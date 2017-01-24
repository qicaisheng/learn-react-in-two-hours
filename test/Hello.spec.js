/**
 * Created by stong on 1/24/17.
 */
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Hello } from '../src/components/Hello'

test('Hello component should render', t => {
    const hello = shallow(<Hello name="World" />)
    t.true(hello.find('h1').contains("World"))
});