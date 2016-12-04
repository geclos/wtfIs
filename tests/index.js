import test from 'ava'

import isArray from '../src/array'
import isFalse from '../src/false'
import isNull from '../src/null'
import isNumber from '../src/number'
import isObject from '../src/object'
import isString from '../src/string'
import isTrue from '../src/true'
import isUndefined from '../src/undefined'

test('isArray', t => {
    t.truthy(isArray([]))    

    t.falsy(isArray(""))
    t.falsy(isArray({}))
    t.falsy(isArray(() => {}))
    t.falsy(isArray(null))
    t.falsy(isArray(undefined))
})

test('isObject', t => {
    t.truthy(isObject({}))

    t.falsy(isObject([]))
    t.falsy(isObject(null))
    t.falsy(isObject(2))
    t.falsy(isObject(""))
    t.falsy(isObject(() => {}))
})

test('isNull', t => {
    t.truthy(isNull(null))

    t.falsy(isNull({}))
    t.falsy(isNull([]))
    t.falsy(isNull(undefined))
    t.falsy(isNull(""))
})

test('isUndefined', t => {
    t.truthy(isUndefined(undefined))

    t.falsy(isUndefined({}))
    t.falsy(isUndefined([]))
    t.falsy(isUndefined(""))
})

test('isTrue', t => {
    t.truthy(isTrue(true))

    t.falsy(isTrue([]))
    t.falsy(isTrue({}))
    t.falsy(isTrue(2))
    t.falsy(isTrue("123"))
    t.falsy(isTrue(false))
    t.falsy(isTrue(""))
    t.falsy(isTrue(0))
})

test('isFalse', t => {
    t.truthy(isFalse(false))

    t.falsy(isFalse(""))
    t.falsy(isFalse(0))
    t.falsy(isFalse(true))
    t.falsy(isFalse([]))
    t.falsy(isFalse({}))
    t.falsy(isFalse(2))
    t.falsy(isFalse("123"))
})

test('isNumber', t => {
    t.truthy(isNumber(0))
    t.truthy(isNumber(1))

    t.falsy(isNumber("0"))
    t.falsy(isNumber("1"))
})

test('isString', t => {
    t.truthy(isString('123'))
    t.truthy(isString(''))
})