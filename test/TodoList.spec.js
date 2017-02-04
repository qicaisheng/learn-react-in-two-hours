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
    const todoItems = [{
        text: 'first todo'
    },{
        text: 'second todo'
    }]
    const todosComponent = shallow(<TodoList todos={todoItems} />)
    t.is(todosComponent.find('li').length, 2)
    t.true(todosComponent.find('li').at(0).contains(todoItems[0].text))
    t.true(todosComponent.find('li').at(1).contains(todoItems[1].text))
});

