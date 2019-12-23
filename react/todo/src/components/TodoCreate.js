import {Field, reduxForm} from 'redux-form';
import React from 'react'
import {connect} from 'react-redux';

import {createTodo} from '../actions'

class TodoCreate extends React.Component {
    
    renderInput = ({input, label, meta}) => {
        const className = `Field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <div class="ui action input fluid">
                    <input {...input} autoComplete='off' type="text" placeholder={label} />
                    {this.renderError(meta)}
                    <button class="ui button">Add Todo</button>
                </div>
            </div>
        );
    };

    renderError = ({error, touched}) => {
        if(touched && error) {
            return (
            <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
            );
        }
    };

    onSubmit = formValue => {
        this.props.createTodo(formValue)
    }

    

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
               <div>
                <Field name="title"
                component = {this.renderInput}
                label= "Enter Todo"/>
                <div class="ui hidden divider"></div>
                </div>
            </form>
        );
    }
} 

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter some text'
    }

    return errors;  
};

const formWrapped = reduxForm({
    form: 'TodoCreate',
    validate
}) (TodoCreate)

export default connect(null, {createTodo})(formWrapped);