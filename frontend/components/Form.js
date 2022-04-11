import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input 
          
          type='text'
          id='textInput'
          placeholder='type task here'
        />
        <button>Add</button>
      </form>
    )
  }
}
