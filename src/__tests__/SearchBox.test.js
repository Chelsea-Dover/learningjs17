import React from 'react'
import SearchBox from '../SearchBox'
import { shallow } from 'enzyme'

/* global describe expect beforeEach it */

describe('SearchBox tests', () => {
  let wrapper
  let testVar
  beforeEach(() => {
    testVar = 0
    const fakeFunc = () => { testVar = 1 }
    wrapper = shallow(<SearchBox
      searchel={'ball'}
      matchElements={fakeFunc}
      toggleChecked={fakeFunc}
      onlyInStock={false}
      />)
  })

  it('will go to matchElements when box is clicked', () => {
    const event = {target: {value: 'ball'}}
    wrapper.find('#filter-name').simulate('change', event)
    expect(testVar).toBe(1)
  })
  it('will go to toggleChecked when box is clicked', () => {
    const event = {target: {checked: true}}
    wrapper.find('#stocked-checkbox').simulate('click', event)
    expect(testVar).toBe(1)
  })
})
