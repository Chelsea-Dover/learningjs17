import React from 'react'
import App, {roundUp} from '../App'
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
      app.addTotal(fakeEvent)
      expect(app.state.total).toEqual(9.99)
    })

    it('properly decrements price', () => {
      wrapper.setState({total: 10})
      const fakeEvent = {target: {value: ':not(:checked)', id: '2'}}
      app.addTotal(fakeEvent)
      expect(app.state.total).toEqual(0)
    })
  })
  describe('roundUp', () => {
    it('will roundUp correctly', () => {
      let output = roundUp(359.96000000000004)
      expect(output).toEqual(359.96)
    })
  })
})
