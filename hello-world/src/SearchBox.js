/**
 * Created by Chelsea on 4/19/17.
 */
import React, { Component } from 'react';

export default class SearchBox extends Component {
    // static propTypes = {
    //     searchel: React.PropTypes.string,
    //     matchElements: React.PropTypes.func,
    //     toggleChecked: React.PropTypes.func,
    //     onlyInStock: React.PropTypes.bool,
    // };

    render() {
        const textChangeCallback = this.props.matchElements.bind(this);
        const changeCheck = this.props.toggleChecked.bind(this);

        return (
            <div>
                <input id='filter-name' onChange={textChangeCallback} placeholder="Search..."/>

                <p>
                <input
                        id='stocked-checkbox'
                        onChange={changeCheck}
                        defaultChecked={this.props.onlyInStock}
                        type='checkbox'/>
                Only show products in stock</p>
            </div>
        )
    }

}