/**
 * Created by Chelsea on 4/20/17.
 */
// import React, { Component } from 'react';
//
// export default class ProductRow extends Component {
//
//     render() {
//         if (currentCategory !== dataItem.category) {
//                 tableGuts.push(<tr key={currentCategory}><td style={{color: 'green'}}>{dataItem.category}</td></tr>);
//                 currentCategory = dataItem.category
//             }
//             if (filterMatch){
//                 idName = makeKey(key);
//
//                 if (!dataItem.stocked){
//                     if (!this.props.INSTOCK){
//                         tableGuts.push(
//                             <tr className="productItem" key={key}>
//                                 {/*<td>*/}
//                                     {/*<input onChange={this.handleBuying.bind(this)} type='checkbox'/>*/}
//                                 {/*</td>*/}
//                                 <td id={idName}>Not in stock</td>
//                                 <td style={{color: 'red'}}>
//                                     {dataItem.name}
//                                 </td>
//                                 <td>
//                                     {dataItem.price}
//                                 </td>
//                             </tr>)
//
//
//                     }
//                 }
//                 else{
//                     let price = dataItem.price;
//                     tableGuts.push(<tr className="productItem" key={key}><td>
//                         <input id={idName} onChange={this.props.addTotal.bind(this, price)} type='checkbox'/>
//                     </td><td>{dataItem.name}</td><td>{dataItem.price}</td></tr>)
//                 }
//
//         return (
//             null
//         )
//     }
//
// }}