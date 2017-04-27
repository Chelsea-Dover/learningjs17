import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { mount } from 'enzyme'

/* global it describe beforeEach expect */

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
      // console.log(wrapper)
      expect(wrapper.find('tr').length).toBe(9)
    })

    it('will filter out of stock items when in stock is checked', () => {
            // const app = mount(<ProductData/>);
      const event = {target: {checked: true}}
      wrapper.find('#stocked-checkbox').simulate('change', event) // On whatever
      expect(wrapper.find('.productItem').length).toBe(4)
    })

    it('will filter out items that are not ball when user is serching for ball', () => {
            // const wrapper = mount(<App/>);
      const event = {target: {value: 'ball'}}
      wrapper.find('#filter-name').simulate('change', event)
      expect(wrapper.find('.productItem').length).toBe(3)
    })

    it('will filter out items when in stock is checked and user is searching for ball', () => {
      const typeEvent = {target: {value: 'ball'}}
      const clickEvent = {target: {checked: true}}
      wrapper.find('#filter-name').simulate('change', typeEvent)
      wrapper.find('#stocked-checkbox').simulate('change', clickEvent)
            // wrapper.find('#filter-name', '#stocked-checkbox').simulate('change', typeEvent, clickEvent);
      expect(wrapper.find('.productItem').length).toBe(2)
    })
  })

  describe('checking and unchecking products', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<App />)
    })

    it('total updates when iPod is clicked', () => {
      const event = {target: {checked: true, id: '2'}}
      wrapper.find('#4').simulate('change', event)
      const updatedTotal = wrapper.find('#total').text()
      // console.log(wrapper.find('#total'))
      expect(updatedTotal).toBe('10')
    })

    it('total goes back to 0 once iPod is clicked twice', () => {
      const eventOn = {target: {checked: true, id: '2'}}
      const eventOff = {target: {checked: false, id: '2'}}
      wrapper.find('#4').simulate('change', eventOn) //
      wrapper.find('#4').simulate('change', eventOff)
      expect(wrapper.find('#total').text()).toBe('0')
    })

    it('will add up iPod and Football together', () => {
      const eventiPod = {target: {checked: true, id: '2'}}
      const eventBall = {target: {checked: true, id: '4'}}
      wrapper.find('#4').simulate('change', eventiPod) //
      wrapper.find('#1').simulate('change', eventBall)
      expect(wrapper.find('#total').text()).toBe('110')
    })
  })
})
