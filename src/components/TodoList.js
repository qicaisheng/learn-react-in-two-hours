import React from 'react'

export const TodoList = ({todos}) => <ul>
    { todos.map((todo, i) => <li key={i}>{todo.text}</li>) }
</ul>
