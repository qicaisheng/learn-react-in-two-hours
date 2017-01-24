/**
 * Created by stong on 1/24/17.
 */

import test from 'ava'
import { sum } from '../src/sum'

test('test should work', t => {
    t.true(true)
    t.is(1, 1)
    t.deepEqual([1], [1])
    t.is(2, sum(1,1))
})