import React from 'react';
import {reduxForm} from 'redux-form';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

// the component for creating polls
class CreatePoll extends React.Component {
    handleFormSubmit(formProps) {
        this.props.createPoll(formProps, this);
    }

    render() {
        const {handleSubmit, fields: {title, options}} = this.props;
        return (
            <div className="contanier">
                <h1 className="center-align">Create Poll</h1>
                <form className="col s12" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                    <input required {...title} id="title" type="text" className="validate" />
                    <label htmlFor="title">Title</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6 offset-s3">
                    <input required {...options} id="options" type="text" className="validate" />
                    <label htmlFor="options">Options, separated by comma</label>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col s6 offset-s3 center-align">
                        <button action="submit" className="blue-grey darken-3 btn-large">Create</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

//export default CreatePoll;

export default withRouter(reduxForm({
    form: 'create_poll',
    fields: ['title', 'options']
}, null, actions)(CreatePoll));