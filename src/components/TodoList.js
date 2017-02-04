import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { addTodo } from '../redux/todos'


const mapState = ({ todos }) => ({ todos })
const mapDispatch = dispatch => bindActionCreators({ addTodo }, dispatch)

export const TodoList =
    connect(mapState, mapDispatch)
    (({todos, addTodo}) => {
        let input

        const onSubmit = e => {
            e.preventDefault();
            addTodo(input.value)
        }

        return <div>
            <ul>
                { todos.map((todo, i) => <li key={i}>{todo.text}</li>) }
            </ul>

            <form onSubmit={onSubmit}>

                <input type="text" ref={f => input = f}/>
            </form>
        </div>
    })
