import React from 'react'
import ProductData from '../ProductData'
import {mount} from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

/* global it describe beforeEach jest expect */
describe('ProductData test', () => {
  let wrapper

  describe('create table with no filterMatch', () => {
    beforeEach(() => {
      const items = [{category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball', id: '3'}, {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball', id: '3'}]
      const fakeFunc = jest.fn()
      const muiTheme = getMuiTheme()
      wrapper = mount(
        <ProductData
          TEXTVAL='hello'
          INSTOCK
          addTotal={fakeFunc}
          items={items}
        />,
        {context: {
          muiTheme: muiTheme
        },
          childContextTypes: {
            muiTheme: React.PropTypes.object.isRequired
          }
        })
    })

    it('only has one element in it', () => {
      const tableRow = wrapper.find('.categoryHeader')
      expect(tableRow.length).toBe(1)
    })

    it('wont push anything to tableGuts', () => {
      expect(wrapper.find('.productItem').length).toBe(0)
    })
  })

  describe('create table with filterMatch', () => {
    beforeEach(() => {
      const items = [
        {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football', id: 1},
        {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball', id: 2},
        {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball', id: 3}
      ]
      const fakeFunc = jest.fn()
      const muiTheme = getMuiTheme()
      wrapper = mount(
        <ProductData
          TEXTVAL='ball'
          INSTOCK
          addTotal={fakeFunc}
          items={items}
        />,
        {context: {
          muiTheme: muiTheme
        },
          childContextTypes: {
            muiTheme: React.PropTypes.object.isRequired
          }
        })
    })
    it('pushes the correct items to tableGuts', () => {
      expect(wrapper.find('tr').length).toBe(3)
    })
  })
})
