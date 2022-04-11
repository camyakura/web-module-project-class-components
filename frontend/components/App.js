import React from 'react'
import Form from './Form'
import TodoList from './TodoList'


let idx = 0
const getIdx = () => idx++

const todos = [
  { id:getIdx(), text:'walk the dog', completed: false },
  { id:getIdx(), text:'do homework', completed: false },
  { id:getIdx(), text:'eat food', completed: false },
]

const initialState = {
  todos,
}

export default class App extends React.Component {
  state = initialState

  todoToggle = toggleId => {
    this.setState({
      ...this.state, todos: this.state.todos.map(todo => {
        if(todo.id === toggleId){
          return {
            ...todo,
            completed: !todos.completed
          }
        }
        return todo
      })
    })
  }

  addTodo = () => {

  }

  clearInput = () => {

  }

  render() {

    const { todos } = this.state

    return (
      <div>
        <h1>Todo App</h1>

        <TodoList todos={todos} todoToggle={this.todoToggle}/>

        <Form />

        <button>Clear</button>
      </div>
    )
  }
}
