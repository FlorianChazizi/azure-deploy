import React, { Component } from 'react';
import './Todo.css';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state= {
            isEditting: false,
            task: this.props.task,
            completed: ""
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this. handleToggle.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
    }

    toggleForm(){
        this.setState({ isEditting: !this.state.isEditting })
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({ isEditting: false })

    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleToggle(){
        this.props.toggleTodo(this.props.id)
    }

  render() {
    let results;

    if ( this.state.isEditting ) {
        results = (
            <div className='Todo'>
                <form onSubmit={this.handleUpdate} className="Todo-edit-form">
                    <input 
                        type="text"
                        name='task'
                        onChange={this.handleChange}
                        value={this.state.task} />
                    <button> Save </button>
                </form>
            </div>
        )
    } else {
        results = (
            <div className='Todo'>
                <li className={ this.props.completed ? "Todo-task completed" : "Todo-Task"} onClick={this.handleToggle} >
                    {this.props.task}
                </li>
              
                <div className='Todo-buttons'>
                    <button onClick={this.toggleForm} > <AiFillEdit /> </button>
                    <button onClick={this.handleRemove}>  <AiFillDelete /> </button>
                </div>
                
            </div>
          );
        
    }
    return results;
  }
}

export default Todo;
