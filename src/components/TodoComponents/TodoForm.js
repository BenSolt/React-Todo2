import React from 'react';
class TodoForm extends React.Component {

constructor() {
    super();
    this.state = {

    }
}


handleChanges = e => {
    this.setState({
        newTodo: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();
    console.log('submit working');
    // this.props.a
    this.setState({newTodo: ''});
};

render() {
    console.log ('rendering form')
    return(
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='todo'>New Todo</label>
            <input
            type='text'
            name='todo'
            id='todo'
            value={this.state.newTodo}
            onChange={this.handleChanges}
            />
        <button>Add to do</button>
        </form>
    );
 }
}

export default TodoForm;