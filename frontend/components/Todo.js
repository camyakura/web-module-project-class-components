import React from 'react'

export default class Todo extends React.Component {
  
  todoClick = () => {
    this.props.todoToggle(this.props.todo.id)
  }
  render() {
    const { todo } = this.props
    return (
      <li key={todo.id} onClick={this.todoClick}>
        { todo.text }
        { todo.completed ? <span>✔️</span> : ''}
      </li>
    )
  }
}
