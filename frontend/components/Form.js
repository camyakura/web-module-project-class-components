import React from 'react'

const initialState = {
  input: '',
}

export default class Form extends React.Component {
  state = initialState

  todoSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.input)
    this.setState({
      ...this.state, input: ''
    })
  }

  onChange = evt => {
    this.setState({
      ...this.state, input: evt.target.value
    })
  }
  render() {
    return (
      <form>
        <input 
          onChange={this.onChange}
          type='text'
          id='textInput'
          placeholder='type task here'
        />
        <button onClick={this.todoSubmit}>Add</button>
      </form>
    )
  }
}
