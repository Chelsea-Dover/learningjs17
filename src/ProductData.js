/**
 * Created by Chelsea on 4/19/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ProductData extends Component {
    // TODO: break this up into two

  render () {
    let tableGuts = []
    let currentCategory = ''

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
                  ${dataItem.price}
                </td>
              </tr>)
          }
        } else {
          /* eslint-ignore react/jsx-no-bind */
          tableGuts.push(<tr className='productItem' key={key}>
            <td>
              <input id={dataItem.id} onChange={this.props.addTotal} type='checkbox' />
            </td>
            <td>{dataItem.name}</td>
            <td>${dataItem.price}</td>
          </tr>)
        }
      }
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
  items: PropTypes.array
}
