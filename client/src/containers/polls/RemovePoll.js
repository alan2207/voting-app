import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

// handling removal of the polls created by the authenticated user
class RemovePoll extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.removePoll(this.props.id);
        
    }

    render() {
        return (
        <button onClick={this.handleClick.bind(this)} className="red darken-3 white-text waves-effect waves-teal btn-flat">
            <i className="material-icons">delete</i>
        </button>
    )
    }
}


export default connect(null, actions)(RemovePoll);
