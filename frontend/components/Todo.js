import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { todo } = this.props
    return (
      <li key={todo.id}>
        { todo.text }
      </li>
    )
  }
}
