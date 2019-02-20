import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT
} from '../constants/actionTypes';

class SettingsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();

      const user = Object.assign({}, this.state);
      if (!user.password) {
        delete user.password;
      }

      this.props.onSubmitForm(user);
    };
  }

  componentWillMount() {
    console.log("this.props.currentUser", this.props.currentUser)
    if (this.props.currentUser) {
      Object.assign(this.state, {
        //image: this.props.currentUser.image || '',
        username: this.props.currentUser.username,
        //bio: this.props.currentUser.bio,
        email: this.props.currentUser.email
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        image: nextProps.currentUser.image || '',
        username: nextProps.currentUser.username,
        bio: nextProps.currentUser.bio,
        email: nextProps.currentUser.email
      }));
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <fieldset className="form-settings">
          <legend><strong>Información Personal</strong></legend><br/>

          <label htmlFor="url">Url profile picture:</label><br />
          <input
            id="url"
            className="input-form"
            type="text"
            placeholder="URL of profile picture"
            value={this.state.image}
            required
            pattern={/[A-Za-z]{4-12}/}
            onChange={this.updateState('image')} /><br />



          <label htmlFor="username">Username:</label><br />
          <input
            id="username"
            className="input-form"
            type="text"
            placeholder="Username"
            value={this.state.username}
            required
            pattern={/[A-Za-z]{4-12}/}
            onChange={this.updateState('username')} /><br />



          <label htmlFor="bio">Bio:</label><br />
          <textarea
            id="bio"
            className="input-form"
            rows="8"
            placeholder="Short bio about you"
            value={this.state.bio}
            required
            pattern={/[A-Za-z]{5-110}/}
            onChange={this.updateState('bio')}>
          </textarea><br />



          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            className="input-form"
            type="email"
            placeholder="Email"
            value={this.state.email}
            required
            pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
            onChange={this.updateState('email')} /><br />



          <label htmlFor="password">Password:</label><br />
          <input
            id="password"
            className="input-form"
            type="password"
            placeholder="New Password"
            value={this.state.password}
            required
            pattern={/[A-Za-z0-9]{4-12}/}
            onChange={this.updateState('password')} /><br />

          <br />
          <button
            className="button"
            type="submit"
            disabled={this.state.inProgress}>
            Update Settings
          </button>

        </fieldset>

      </form>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: user =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED })
});

class Settings extends React.Component {
  render() {
    return (
      <section>
        <h1 className="title-principal" align="center">Your Settings</h1>
        <ListErrors errors={this.props.errors}></ListErrors>

        <SettingsForm
          currentUser={this.props.currentUser}
          onSubmitForm={this.props.onSubmitForm} />

        <br />
        <button
          className="button"
          onClick={this.props.onClickLogout}>
          Or click here to logout.
        </button>

      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
