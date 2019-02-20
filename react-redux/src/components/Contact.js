import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
    UPDATE_FIELD_CONTACT,
    CONTACT_PAGE_UNLOADED,
    CONTACT
} from '../constants/actionTypes';
import { Field, reduxForm } from 'redux-form'
import { required, maxLength15, maxLength55, emails } from '../utils/helpers'
import { renderField, renderTextArea } from './FormFields'

const mapStateToProps = state => ({ ...state.contact });

const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
        dispatch({ type: UPDATE_FIELD_CONTACT, key: 'email', value }),
    onChangeSubject: value =>
        dispatch({ type: UPDATE_FIELD_CONTACT, key: 'subject', value }),
    onChangeName: value =>
        dispatch({ type: UPDATE_FIELD_CONTACT, key: 'name', value }),
    onChangeComment: value =>
        dispatch({ type: UPDATE_FIELD_CONTACT, key: 'comment', value }),
    onSubmit: (name, email, subject, comment) => {
        agent.Contact.sendEmail(name, email, subject, comment).then(payload => {
            dispatch({ type: CONTACT, payload })
        });
    },
    onUnload: () =>
        dispatch({ type: CONTACT_PAGE_UNLOADED })
});

class Contact extends React.Component {
    constructor() {
        super();
        this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
        this.changeSubject = ev => this.props.onChangeSubject(ev.target.value);
        this.changeName = ev => this.props.onChangeName(ev.target.value);
        this.changeComment = ev => this.props.onChangeComment(ev.target.value);
        this.submitForm = (name, email, subject, comment) => ev => {
            ev.preventDefault();
            this.props.onSubmit(name, email, subject, comment);
        }
    }

    componentWillUnmount() {

        this.props.onUnload();
    }

    render() {
        console.log("PROPS_CONTACT", this.props);
        const email = this.props.email;
        const subject = this.props.subject;
        const name = this.props.name;
        const comment = this.props.comment;

        return (
            <section>
                <h3 align="center">Contacte con nosotros</h3><br />
                <ListErrors errors={this.props.errors} />

                <form onSubmit={this.submitForm(name, email, subject, comment)}>
                    <fieldset>
                        <Field name="name" type="text"
                            component={renderField} label="Name"
                            validate={[required, maxLength15]}
                            value={this.props.name || ''}
                            onChange={this.changeName}
                        />
                        <Field name="subject" type="text"
                            component={renderField} label="Subject"
                            validate={[required, maxLength15]}
                            value={this.props.subject || ''}
                            onChange={this.changeSubject}
                        />
                        <Field name="email" type="email"
                            component={renderField} label="Email"
                            validate={[required, emails]}
                            value={this.props.email || ''}
                            onChange={this.changeEmail}
                        />
                        <Field name="comment" type="textbox"
                            component={renderTextArea} label="Comment"
                            validate={[required, maxLength55]}
                            value={this.props.comment || ''}
                            onChange={this.changeComment}
                        />

                        <button type="submit" className="button" disabled={!this.props.valid}>Enviar</button>
                    </fieldset>

                </form>

            </section>
        );
    }
}

export default reduxForm({
    form: 'fieldLevelValidation'
})(connect(mapStateToProps, mapDispatchToProps)(Contact));