/**
 * Created by Chelsea on 4/19/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import App from './App'
// import React from 'react'
// const {Component} = React;
// import ProductRow from "./ProductRow";

// function makeKey (key) {
//   const convertedKey = key.toLowerCase().replace(/ /g, '-')
//   return convertedKey
// }

export default class ProductData extends Component {
    // TODO: break this up into two

    // static propTypes = {
    //     TEXTVAL: PropTypes.string,
    //     INSTOCK: PropTypes.bool,
    //     addTotal: PropTypes.func,
    //     total: PropTypes.number,
    //     items: PropTypes.array,
    //     price: PropTypes.number,
    // };

  render () {
    let tableGuts = []
    let currentCategory = ''
    // let idName

    this.props.items.forEach((dataItem) => {
      let key = `${dataItem.category}${dataItem.name}`
      let filterMatch = dataItem.name.indexOf(this.props.TEXTVAL) !== -1

      if (currentCategory !== dataItem.category) { // check if the currentCategory is not
        tableGuts.push(<tr key={currentCategory}>
          <td colSpan='3' bsStyle="success" style={{color: 'green'}}>{dataItem.category}</td>
        </tr>)
        currentCategory = dataItem.category
      }

      if (filterMatch) {
        // idName = makeKey(key)
        if (!dataItem.stocked) {
          if (!this.props.INSTOCK) {
            tableGuts.push(
              <tr className='productItem' key={key}>
                <td id={dataItem.id}>
                    Not in stock
                </td>
                <td style={{color: 'red'}}>
                  {dataItem.name}
                </td>
                <td>
                  {dataItem.price}
                </td>
              </tr>)
          }
        } else {
          // let price = dataItem.price
          /* eslint-ignore react/jsx-no-bind */
          tableGuts.push(<tr className='productItem' key={key}>
            <td>
              <input id={dataItem.id} onChange={this.props.addTotal} type='checkbox' />
            </td>
            <td>{dataItem.name}</td>
            <td>{dataItem.price}</td>
          </tr>)
        }
      }
      // tableGuts.push(<tr key={'total'}><td id='total'>{this.props.total}</td></tr>)
    })

    return (
      <tbody>
        {tableGuts}
      </tbody>
    )
  }
}

ProductData.propTypes = {
  TEXTVAL: PropTypes.string,
  INSTOCK: PropTypes.bool,
  addTotal: PropTypes.func,
  // total: PropTypes.number,
  items: PropTypes.array
  // id: PropTypes.id
  // price: PropTypes.number
}
