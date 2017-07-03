import React from 'react';
import AddOption from './AddOption';
import ShareButton from './ShareButton';

// component that contains option selection
// and if user is authenticated , Addoption and Sharing button components
class Vote extends React.Component {

    constructor(props) {
        super(props);
    }

    renderOptions() {
        return this.props.options.map((option) => {
            return (
                <option key={option} value={option}>{option}</option>
            );
        })
    }


    renderAddoption() {
        if(localStorage.getItem('token')) {
            return (
                <div>
                <AddOption id={this.props.id}/>
                <ShareButton title={this.props.title} />
                </div>
            )
        }
    }

    handleChange(e) {
        this.props.handleVote(e.target.value, this.props.id);
    }

    render() {
        return (
            <div className="col s4">
                <label>Select:</label>
                <select id="voteForm" className="browser-default" onChange={this.handleChange.bind(this)}>
                    <option value="" disabled selected>Choose your option</option>
                    {this.renderOptions()}
                </select>
                {this.renderAddoption()}
            </div>
        )
    }
}

export default Vote;