/**
 * Created by Chelsea on 4/19/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TableBody, TableRow, TableRowColumn, Table} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'
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

  constructor (props) {
    super(props)
    this.state = {
      showCheckboxes: false
    }
  }

  render () {
    let tableGuts = []
    let currentCategory = ''
    // let idName

    this.props.items.forEach((dataItem) => {
      let key = `${dataItem.category}${dataItem.name}`
      let filterMatch = dataItem.name.indexOf(this.props.TEXTVAL) !== -1

      if (currentCategory !== dataItem.category) { // check if the currentCategory is not
        tableGuts.push(<TableRow key={currentCategory}>
          <TableRowColumn colSpan='3' bsStyle='success' style={{color: 'green'}}>{dataItem.category}</TableRowColumn>
        </TableRow>)
        currentCategory = dataItem.category
      }

      if (filterMatch) {
        // idName = makeKey(key)
        if (!dataItem.stocked) {
          if (!this.props.INSTOCK) {
            tableGuts.push(
              <TableRow className='productItem' key={key}>
                <TableRowColumn id={dataItem.id}>
                    Not in stock
                </TableRowColumn>
                <TableRowColumn style={{color: 'red'}}>
                  {dataItem.name}
                </TableRowColumn>
                <TableRowColumn>
                  ${dataItem.price}
                </TableRowColumn>
              </TableRow>)
          }
        } else {
          /* eslint-ignore react/jsx-no-bind */
          tableGuts.push(<TableRow className='productItem' key={key}>
            <TableRowColumn>
              <Checkbox
                id={dataItem.id}
                onClick={this.props.addTotal}
                type='checkbox' />
            </TableRowColumn>
            <TableRowColumn>{dataItem.name}</TableRowColumn>
            <TableRowColumn>${dataItem.price}</TableRowColumn>
          </TableRow>)
        }
      }
    })

    return (
      <Table>
        <TableBody displayRowCheckbox={this.state.showCheckboxes}>
          {tableGuts}
        </TableBody>
      </Table>
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
