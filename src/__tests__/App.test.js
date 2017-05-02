/**
 * Created by Chelsea on 4/19/17.
 */
import React from 'react'
import App from '../App'
import {shallow} from 'enzyme'

/* global it describe beforeEach expect */

describe('App', () => {
  describe('addTotal', () => {
    let app, wrapper

    beforeEach(() => {
      wrapper = shallow(<App />)
      app = wrapper.instance()
    })

    it('addTotal', () => {
      const fakeEvent = {target: {checked: 'true', id: '2'}}
            // console.log(app.state);
      app.addTotal(fakeEvent)
            // const expected = {product1: true};
      expect(app.state.total).toEqual(9.99)
            // expect(app.state.addTotal).toEqual({expected});
    })

    it('properly decrements price', () => {
      wrapper.setState({total: 10})
      const fakeEvent = {target: {value: ':not(:checked)', id: '2'}}
      // const fakeId = {target: {id: '2'}}
      app.addTotal(fakeEvent)
      // console.log(app.state.total)
      expect(app.state.total).toEqual(0)
            // const expected = {product1: true};
    })
  })
})
