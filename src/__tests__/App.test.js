/**
 * Created by Chelsea on 4/19/17.
 */
import React from "react";
import App from "../App";
import {shallow, mount, render} from "enzyme";


/* global it describe forEach */
describe('App', () => {
    describe('addTotal', () => {
        let app, wrapper;

        beforeEach(() => {
            wrapper = shallow(<App/>);
            app = wrapper.instance();
        });

        it('addTotal', () => {
            const fakeEvent = {target: {checked: 'true'}};
            // console.log(app.state);
            app.addTotal(99, fakeEvent);
            // const expected = {product1: true};
            expect(app.state.total).toEqual(99);
            // expect(app.state.addTotal).toEqual({expected});
        });

        it('properly decrements price', () => {
            wrapper.setState({total: 99});
            const fakeEvent = {target: {value: ':not(:checked)'}};
            app.addTotal(99, fakeEvent);
            expect(app.state.total).toEqual(0);
            // const expected = {product1: true};
        })
    })

});
