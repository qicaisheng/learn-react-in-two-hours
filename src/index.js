/**
 * Created by stong on 1/24/17.
 */
import React from 'react'
import {render} from 'react-dom'
import {Hello} from './components/Hello.js'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { todos } from './redux/todos'
import { TodoList } from './components/TodoList'

const store = createStore(combineReducers({ todos }))

render(
    <Provider store={store}>
        <div>
            <TodoList />
        </div>
    </Provider>, document.getElementById('app'))