import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Hello } from '../src/components/Hello'
import { TodoList } from '../src/components/TodoList'

test('Hello component should render', t => {
    const hello = shallow(<Hello name="World" />)
    t.true(hello.find('h1').contains("World"))
});

test('TodoList component should render', t => {
    const todos = [{
        text: 'first todo'
    },{
        text: 'second todo'
    }]
    const todoItems = shallow(<TodoList todos={todos} />)
    t.is(todoItems.find('li').length, 2)
    t.true(todoItems.find('li').at(0).contains(todos[0].text))
    t.true(todoItems.find('li').at(1).contains(todos[1].text))
});

