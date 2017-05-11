import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { mount } from 'enzyme'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView
global.window.document = {createElement: function () {}}

/* global it describe beforeEach expect window document */

describe('intergration test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  describe('Searching', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<App />)
    })

    it('will render the right number of table rows', () => { //  Sing that says what is going to happen
      expect(wrapper.find('tr').length).toBe(8)
    })

    it('will filter out of stock items when in stock is checked', () => {
      const event = {target: {checked: true}}
      wrapper.find('#stocked-checkbox').simulate('click', event) // On whatever
      expect(wrapper.find('.productItem').length).toBe(4)
    })

    it('will filter out items that are not ball when user is serching for ball', () => {
      const event = {target: {value: 'ball'}}
      wrapper.find('#filter-name').simulate('change', event)
      expect(wrapper.find('.productItem').length).toBe(3)
    })

    it('will filter out items when in stock is checked and user is searching for ball', () => {
      const typeEvent = {target: {value: 'ball'}}
      const clickEvent = {target: {checked: true}}
      wrapper.find('#filter-name').simulate('change', typeEvent)
      wrapper.find('#stocked-checkbox').simulate('click', clickEvent)
      expect(wrapper.find('.productItem').length).toBe(2)
    })
  })

  describe('checking and unchecking products', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<App />)

      window.getSelection = () => {
        return {
          removeAllRanges: () => {}
        }
      }
    })

    it('total updates when iPod is clicked', () => {
      const event = {target: {checked: true, id: '4'}}
      wrapper.find('#4').simulate('click', event)
      const updatedTotal = wrapper.find('#total').text()
      expect(updatedTotal).toBe('$99.99')
    })

    it('total goes back to 0 once iPod is clicked twice', () => {
      const eventOn = {target: {checked: true, id: '4'}}
      const eventOff = {target: {checked: false, id: '4'}}
      wrapper.find('#4').simulate('click', eventOn)
      wrapper.find('#4').simulate('click', eventOff)
      expect(wrapper.find('#total').text()).toBe('$0')
    })

    it('will add up iPod and Football together', () => {
      const eventiPod = {target: {checked: true, id: '4'}}
      const eventBall = {target: {checked: true, id: '1'}}
      wrapper.find('#4').simulate('click', eventiPod)
      wrapper.find('#1').simulate('click', eventBall)
      expect(wrapper.find('#total').text()).toBe('$149.98')
    })
  })
})
