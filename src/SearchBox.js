/**
 * Created by Chelsea on 4/19/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class SearchBox extends Component {
  render () {
    const textChangeCallback = this.props.matchElements
    const changeCheck = this.props.toggleChecked

    return (
      <form>
        <input
          id='filter-name'
          onChange={textChangeCallback}
          type='text'
          placeholder='Enter text'
          />
        <p>
          <input
            id='stocked-checkbox'
            onChange={changeCheck}
            defaultChecked={this.props.onlyInStock}
            type='checkbox'/>
            Only show products in stock
        </p>
      </form>
    )
  }
}

SearchBox.propTypes = {
  // searchel: PropTypes.string,
  matchElements: PropTypes.func,
  toggleChecked: PropTypes.func,
  onlyInStock: PropTypes.bool
}
