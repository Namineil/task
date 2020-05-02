import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import {todosData} from './todosData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.chekChange = this.chekChange.bind(this)
  }

  chekChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(
        todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        }
      )
      return {
        todos: updatedTodos
      }
    })
  }

  render() {

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} chekChange={this.chekChange}/>)

    return (
      <div className="todoList">
        <p class="title">To-do list</p>
          {todoItems}
      </div>
    );
  }
}

export default App;
