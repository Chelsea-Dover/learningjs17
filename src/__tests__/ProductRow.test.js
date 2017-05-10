import React from 'react'
import ProductRow from '../ProductRow'
import {shallow} from 'enzyme'

/* global it describe jest expect */
describe('ProductRow tests', () => {
  describe('ProductRow instock not checked and product is not stocked', () => {
    const fakeFunc = jest.fn()
    const wrapper = shallow(
      <ProductRow
        dataItem={{category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball', id: '3'}}
        INSTOCK={false}
        addTotal={fakeFunc}
        key='3'
      />
    )
    it('does not have checkbox when out of stock', () => {
      const tableRow = wrapper.find('#3')
      expect(tableRow.node.props.children).toBe('Not in stock')
    })
  })

  describe('ProductRow instock not checked and product is stocked', () => {
    const fakeFunc = jest.fn()
    const wrapper = shallow(
      <ProductRow
        dataItem={{category: 'Sporting Goods', price: 29.99, stocked: true, name: 'Basketball', id: '3'}}
        INSTOCK={false}
        addTotal={fakeFunc}
        key='3'
      />
    )
    it('', () => {
      const tableRow = wrapper.find('#3')
      expect(tableRow.prop('type')).toBe('checkbox')
    })
  })

  describe('ProductRow instock checked', () => {
    const fakeFunc = jest.fn()
    const wrapper = shallow(
      <ProductRow
        dataItem={{category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball', id: '3'}}
        INSTOCK={true}
        addTotal={fakeFunc}
        key='3'
      />
      )
    it('does not have checkbox when out of stock', () => {
      expect(wrapper.node).toBe(null)
    })
  })
})
