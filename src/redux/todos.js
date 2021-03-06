const ADD_TODO = 'todos/ADD_TODO'
const REMOVE_TODO = 'todos/REMOVE_TODO'

export const addTodo = text => ({ type: ADD_TODO, text })

const initialState = []

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {text: action.text}]
        default:
            return state
    }
}