/**
 * Created by stong on 1/24/17.
 */
import React from 'react'
import {render} from 'react-dom'
import {Hello} from './components/Hello.js'

render(<Hello name="world" />, document.getElementById('app'))