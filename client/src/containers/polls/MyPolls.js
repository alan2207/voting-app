import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Link} from 'react-router-dom';
import RemovePoll from './RemovePoll'

// the component that lists all polls created by the authenticated user
class MyPolls extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchMyPolls();
    }

    renderMyPolls() {
        return this.props.polls.length ? 
        this.props.polls.map(poll => <li key={poll._id} className="collection-item"><Link className="left" key={poll._id} to={"/poll/"+ poll._id} >{poll.title}</Link><RemovePoll id={poll._id} /></li>) 
        : <p>Loading...</p>
    }

    render() {
        


        return (
            <div className="center-align">
                <h3>My Polls:</h3>
                <ul className="collection">
                    {this.renderMyPolls()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        polls: state.myPolls
    }
}

export default connect(mapStateToProps, actions)(MyPolls);