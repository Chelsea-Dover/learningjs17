/**
 * Created by Chelsea on 4/19/17.
 */
import React, { Component } from 'react'
import {TableRow, TableHeaderColumn} from 'material-ui/Table'

export default class ProductHeadline extends Component {
  render () {
    return (
      <TableRow>
        <TableHeaderColumn>
          Name Price
        </TableHeaderColumn>
      </TableRow>
    )
  }
}
