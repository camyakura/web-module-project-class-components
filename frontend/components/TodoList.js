import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todos} = this.props
    return (
      <ul>
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo}/> 
        })}
      </ul>
    )
  }
}
