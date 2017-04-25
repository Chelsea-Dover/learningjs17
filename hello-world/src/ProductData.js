/**
 * Created by Chelsea on 4/19/17.
 */
import React, {Component} from "react";
// import App from './App'
// import React from 'react'
// const {Component} = React;
// import ProductRow from "./ProductRow";

function makeKey(key) {
    const convertedKey = key.toLowerCase().replace(/ /g, '-');
    return `${convertedKey}`
}

export default class ProductData extends Component {
    //TODO: break this up into two

    // static propTypes = {
    //     TEXTVAL: React.PropTypes.string,
    //     INSTOCK: React.PropTypes.bool,
    //     addTotal: React.PropTypes.func,
    //     total: React.PropTypes.number,
    //     items: React.PropTypes.array,
    //     price: React.PropTypes.number,
    // };

    render() {
        let tableGuts = [];
        let currentCategory = "";
        let idName;

        this.props.items.forEach((dataItem) => {
            let key = `${dataItem.category}${dataItem.name}`;
            let filterMatch = dataItem.name.indexOf(this.props.TEXTVAL) !== -1;
            // tableGuts.push(
            //     <ProductRow
            //         tableGuts={[]}
            //         currentCategory={currentCategory}
            //         idName={idName}
            //         key={key}
            //         filterMatch={filterMatch}
            //     />
            // );

            if (currentCategory !== dataItem.category) {
                tableGuts.push(<tr key={currentCategory}><td style={{color: 'green'}}>{dataItem.category}</td></tr>);
                currentCategory = dataItem.category
            }

            if (filterMatch){
                idName = makeKey(key);

                if (!dataItem.stocked){
                    if (!this.props.INSTOCK){
                        tableGuts.push(
                            <tr className="productItem" key={key}>
                                <td id={idName}>Not in stock</td>
                                <td style={{color: 'red'}}>
                                    {dataItem.name}
                                </td>
                                <td>
                                    {dataItem.price}
                                </td>
                            </tr>)
                    }
                }
                else{
                    let price = dataItem.price;
                    tableGuts.push(<tr className="productItem" key={key}><td>
                        <input id={idName} onChange={this.props.addTotal.bind(this, price)} type='checkbox'/>
                    </td><td>{dataItem.name}</td><td>{dataItem.price}</td></tr>)
                }
        }
    });

    return(

        <tbody>
            {tableGuts}
                <tr>
                    <td id="total">
                        {this.props.total}
                    </td>
                </tr>
        </tbody>
        )
    }
}

