/**
 * Created by Chelsea on 4/19/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import {shallow, mount, render} from "enzyme";
import renderer from 'react-test-renderer'

/* global it */
// describe('ProductData test', () => {
//     it('', () => {
//         const callback = jest.fn();
//
//         // const callBack = function (price, event) {
//         //     console.log('MERP');
//         //     // console.log(input)
//         // };
//
//         const Wrapper = shallow(
//             <ProductData
//                 // items:[electronics, true, 121]
//                 TEXTVAL: ''
//                 INSTOCK: true
//                 addTotal:{callback}
//                 total:{99}
//                 price:{99}
//             />
//         );
//         wrapper.simulate('change', {target:{checked: true}});
//         expect(callBack.mock.calls).toEqual()
//     })
//
// });