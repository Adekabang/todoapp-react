import React from 'react'

const Todos = ({todos}) => {
  const todoList = todos.length ? (
    todos.map(todos => {
      return (
        <div className="collection-item" key={todos.id}>
          <span>{todos.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, YAY!</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}
export default Todos