import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actions from '../../actions';

// handling signing out
class Signout extends React.Component {
    componentWillMount() {
        this.props.signoutUser(this);
    }

    render() {
        return (
            <div className="row">
                <div className="#e1f5fe light-blue lighten-5 light-blue-text darken-4-text col s6 offset-s3 center-align">
                    <h3>You have successfully signed out!</h3>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, actions)(Signout));