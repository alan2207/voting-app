import React from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../actions';


// gives the user functionality to add options if not already there
class AddOption extends React.Component {
    constructor(props) {
        super(props)
    }

    handleFormSubmit(formProps) {
        this.props.addOption(formProps, this.props.id);
    }

    render() {
        const {handleSubmit, fields: {option}} = this.props;
        return (
            <div>
            <form className="row" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <input required placeholder="Add option" {...option} id="option" type="text" />
                    
                    <button action="submit" className="green darken-3 white-text waves-effect waves-teal btn-flat">Add Option</button>
            </form>         
                 
            
            </div>
        )
    }
}

export default reduxForm({
    form: 'add_option',
    fields: ['option']
}, null, actions)(AddOption);