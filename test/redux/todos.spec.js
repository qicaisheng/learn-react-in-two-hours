/**
 * Created by stong on 1/24/17.
 */
import test from 'ava'
import { todos, addTodo } from '../../src/redux/todos'

test('todo should be an empty array', t => {
    const actual = todos(undefined, { type: 'unrelated' })
    t.deepEqual(actual, [])
})

test('should add a new todo when ADD_TODO', t => {
    const newTodo = addTodo('my first todo')
    const actual = todos([], newTodo)
    t.deepEqual(actual, [{ text: 'my first todo'}])
});
