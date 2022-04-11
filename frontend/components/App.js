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
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  addTodo = todo => {
    const { todos } = this.state
    const newTodo = { 
      id:getIdx(), text:todo, completed: false 
    }
    this.setState({...this.state, todos:[...todos, newTodo]})
  }

  clearInput = () => {
    this.setState({
      ...this.state, todos: this.state.todos.filter(todo => {
        return todo.completed === false
      })
    })
  }

  render() {

    const { todos } = this.state

    return (
      <div>
        <h1>Todo App</h1>

        <TodoList todos={todos} todoToggle={this.todoToggle}/>

        <Form addTodo={this.addTodo}/>

        <button onClick={this.clearInput}>Clear</button>
      </div>
    )
  }
}
