import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'

export default class ProductRow extends Component {
  render () {
    if (!this.props.dataItem.stocked && this.props.INSTOCK) {
      return null
    }
    const inStock = (
      <TableRow className='productItem' key={this.props.key}>
        <TableRowColumn>
          <Checkbox
            id={this.props.dataItem.id}
            onClick={this.props.addTotal}
            type='checkbox'
          />
        </TableRowColumn>
        <TableRowColumn>
          {this.props.dataItem.name}
        </TableRowColumn>
        <TableRowColumn>
          ${this.props.dataItem.price}
        </TableRowColumn>
      </TableRow>)
    const outOfStock = (
      <TableRow className='productItem' key={this.props.key}>
        <TableRowColumn id={this.props.dataItem.id}>
          Not in stock
        </TableRowColumn>
        <TableRowColumn style={{color: 'red'}}>
          {this.props.dataItem.name}
        </TableRowColumn>
        <TableRowColumn>
          ${this.props.dataItem.price}
        </TableRowColumn>
      </TableRow>
    )
    return this.props.dataItem.stocked ? inStock : outOfStock
  }
}
ProductRow.propTypes = {
  dataItem: PropTypes.object,
  key: PropTypes.string,
  addTotal: PropTypes.func,
  INSTOCK: PropTypes.bool
}
