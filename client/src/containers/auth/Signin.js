import React from 'react';
import {reduxForm} from 'redux-form';
import {withRouter, Link} from 'react-router-dom';
import * as actions from '../../actions'

// component that contains the form for handling signing in
class Signin extends React.Component {
    constructor(props) {
        super(props)
    }

    handleFormSubmit({email, password}) {
        this.props.signinUser({email, password}, this);
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="row">
                <div className="red lighten-4 red-text darken-4-text  col s6 offset-s3 center-align">
                    <h3>{this.props.errorMessage}</h3>
                </div>
                </div>
            )
        }
    }

    render() {
        const {handleSubmit, fields: {email, password}} = this.props;
        return (
            <div className="contanier">
                <h1 className="center-align">Sign In</h1>
                <form className="col s12" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                <div className="row">
                    <div className="input-field col s6 offset-s3">
                    <input {...email} id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6 offset-s3">
                    <input {...password} id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                    </div>
                </div>
                {this.renderAlert()}
                <div className="row">
                    <div className="col s6 offset-s3 center-align">
                        <button action="submit" className="blue-grey darken-3 btn-large">Sign in</button>
                    </div>
                </div>
                </form>

                <div className="row">
                    <div className="col s6 offset-s3 center-align">
                        <Link to="/signup">If you dont have account, feel free to create one!</Link>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.error};
}


export default withRouter(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin));
