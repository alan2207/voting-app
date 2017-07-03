import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';

// index page
// lists all polls that were created
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchpolls()
    }

    renderPollLinks() {
        return this.props.polls.length ? 
            this.props.polls.map(poll => <Link key={poll._id} to={"/poll/"+ poll._id} className="collection-item">{poll.title}</Link>)
            : <p>Loading...</p>
    }

    render() {
        return (
            <div className="container center-align">
                <h1>Voting App</h1>
                <ul className="collection">
                    {this.renderPollLinks()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        polls: state.polls
    };
}

export default connect(mapStateToProps, actions)(Home);