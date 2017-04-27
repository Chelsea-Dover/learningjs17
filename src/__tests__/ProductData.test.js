/**
 * Created by Chelsea on 4/19/17.
 */
import React from 'react'
import ProductData from '../App'
import {shallow} from 'enzyme'

/* global it describe jest */
describe('ProductData test', () => {
    // it('test', () => {
    //     //TODO: rename and redo once components are segmented
    //     const fakeFunc = jest.fn();
    //
    //     const wrapper = shallow(
    //         <ProductData
    //              items={[{category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball"},]}
    //              TEXTVAL= 'ball'
    //              INSTOCK= {true}
    //              addTotal={fakeFunc}
    //              total={99}
    //         />
    //     );
    //
    //     wrapper.simulate('change', {target:{checked: true}});
    //     expect(fakeFunc.mock.calls).toEqual('ball', true, 99)
    //
    // });

  it('does not have checkbox when out of stock', () => {
        // const wrapper = shallow(ProductData)
    const fakeFunc = jest.fn()

    const wrapper = shallow(
      <ProductData
        items={[{category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'}]}
        TEXTVAL='ball'
        INSTOCK={false}
        addTotal={fakeFunc}
        total={99}
            />
        )

    console.log(wrapper)
  })
})
