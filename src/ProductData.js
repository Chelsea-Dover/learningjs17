import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TableBody, TableRow, TableRowColumn, Table} from 'material-ui/Table'
import ProductRow from './ProductRow'

export default class ProductData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCheckboxes: false
    }
  }

  render () {
    let tableGuts = []
    let currentCategory = ''

    this.props.items.forEach((dataItem) => {
      let key = `${dataItem.category}${dataItem.name}`
      let filterMatch = dataItem.name.indexOf(this.props.TEXTVAL) !== -1

      if (currentCategory !== dataItem.category) {
        tableGuts.push(
          <TableRow className='categoryHeader' key={currentCategory}>
            <TableRowColumn colSpan='3' bsStyle='success' style={{color: 'green'}}>{dataItem.category}</TableRowColumn>
          </TableRow>)
        currentCategory = dataItem.category
      }

      if (filterMatch) {
        tableGuts.push(
          <ProductRow
            dataItem={dataItem}
            key={key}
            addTotal={this.props.addTotal}
            INSTOCK={this.props.INSTOCK} />
        )
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
  items: PropTypes.array
}
