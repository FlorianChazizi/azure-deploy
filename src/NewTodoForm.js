import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {

    constructor(props){
        super(props);
        this.state = {task: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4() });
        this.setState({ task: "" });

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="NewToDoForm">
                    <label htmlFor='task'>New Todo</label>
                    <input 
                        type="text" 
                        id='task'
                        name='task'
                        placeholder='New Task.'
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add it.</button>
                </form>
              
            </div>
          );
    }
 
}

export default NewTodoForm;
