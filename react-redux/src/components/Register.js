import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });
const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    agent.User.register(username, email, password).then(payload => {
      payload = payload.result
      dispatch({ type: REGISTER, payload })
    })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

const Register = props => {
  this.changeEmail = ev => props.onChangeEmail(ev.target.value);
  this.changePassword = ev => props.onChangePassword(ev.target.value);
  this.changeUsername = ev => props.onChangeUsername(ev.target.value);
  this.submitForm = (username, email, password) => ev => {
    ev.preventDefault();
    props.onSubmit(username, email, password);
  }

  const email = props.email;
  const password = props.password;
  const username = props.username;
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">
                Have an account?
                </Link>
            </p>

            <ListErrors errors={props.errors} />

            <form onSubmit={this.submitForm(username, email, password)}>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    value={props.username}
                    onChange={this.changeUsername} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={props.email}
                    onChange={this.changeEmail} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={this.changePassword} />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={props.inProgress}>
                  Sign up
                  </button>

              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
