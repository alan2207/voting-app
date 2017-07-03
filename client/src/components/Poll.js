import React from 'react';
import Chart from './Chart';
import Vote from './Vote'
import * as actions from '../actions';
import {connect} from 'react-redux';


// extracting options data  from array of objects to 2d array - for chart data
function formatData(data) {
	return data.map(item => {
		return [item.option, item.value]
	});
}



// extracting options from the options array - for select input
function extractOptions(data) {
    return data.map(option => option.option) 
}


// poll component - when viewing individual polls
// it contains voting component and the chart
class Poll extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getCurrentPoll(this.props.match.params.id);
    }

    getCurrentPoll() {

        return this.props.poll.options ? (
            <div className="row">
            <h2 className="center-align">{this.props.poll.title}</h2>
            <div className="row">
            <Vote handleVote={localStorage.getItem('token') ? this.props.voteAuth : this.props.vote} title={this.props.poll.title} id={this.props.match.params.id} options={extractOptions(this.props.poll.options)} />
            <Chart title={this.props.poll.title} data={formatData(this.props.poll.options)} />
            </div>
            </div>
        ) : <p>Loading...</p>
    }

    render() {
        return (
            <div className="poll  orange lighten-4">
            {this.getCurrentPoll()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        poll: state.currentPoll
    };
}

export default connect(mapStateToProps, actions)(Poll)