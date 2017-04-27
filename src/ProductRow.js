/**
 * Created by Chelsea on 4/20/17.
 */
// import React, { Component } from 'react';
//
// function makeKey(key) {
//     const convertedKey = key.toLowerCase().replace(/ /g, '-');
//     return `${convertedKey}`
// }
//
//
// export default class ProductRow extends Component {
//
//     render() {
//         let idName;
//
//
//         idName = makeKey(key);
//         if (!dataItem.stocked){
//             if (!this.props.inStock){
//                 tableGuts.push(
//                     <tr className="productItem" key={key}>
//                         <td id={idName}>Not in stock</td>
//                         <td style={{color: 'red'}}>
//                             {dataItem.name}
//                         </td>
//                         <td>
//                             {dataItem.price}
//                         </td>
//                     </tr>)
//                     }
//         }
//         else{
//             let price = dataItem.price;
//             tableGuts.push(<tr className="productItem" key={key}><td>
//                 <input id={idName} onChange={this.props.addTotal.bind(this, price)} type='checkbox'/>
//             </td><td>{dataItem.name}</td><td>{dataItem.price}</td></tr>)
//         }
//     }
// }
