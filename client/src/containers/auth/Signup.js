import React from 'react';
import {reduxForm} from 'redux-form';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';


// component that contains the form for handling signing in
class Signup extends React.Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps, this);
    }
    
    renderAlert() {
         if(this.props.errorMessage) {
            return (
                <div className="row">
                <div className="red lighten-4 red-text darken-4-text  col s6 offset-s3 center-align">
                    <h3>{this.props.errorMessage}</h3>
                </div>
                </div>
            );
        }
    }

    render() {
        const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
        return (
            <div className="contanier">
                <h1 className="center-align">Sign Up</h1>
                <form className="col s12" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                    <input {...email} id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    {email.error && email.touched && <div className="red-text darken-4-text">{email.error}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6 offset-s3">
                    <input {...password} id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                    {password.error && password.touched && <div className="red-text darken-4-text">{password.error}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6 offset-s3">
                    <input {...passwordConfirm} id="password-confirm" type="password" className="validate" />
                    <label htmlFor="password-confirm">Confirm Password</label>
                    {passwordConfirm.error && passwordConfirm.touched && <div className="red-text darken-4-text">{passwordConfirm.error}</div>}
                    </div>
                </div>

                {this.renderAlert()}

                <div className="row">
                    <div className="col s6 offset-s3 center-align">
                        <button action="submit" className="blue-grey darken-3 btn-large">Sign up</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Please, enter an email!';
    }

    if(!formProps.password) {
        errors.password = 'Please, enter a password!';
    }

    if(!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Password must be confirmed!';
    }

    if(formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Password must match!';
    }
    
    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

export default withRouter(reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}, mapStateToProps, actions)(Signup));