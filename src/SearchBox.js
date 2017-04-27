/**
 * Created by Chelsea on 4/19/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { FormControl, Checkbox } from 'react-bootstrap'

export default class SearchBox extends Component {
  render () {
    const textChangeCallback = this.props.matchElements
    const changeCheck = this.props.toggleChecked

    return (
      <form>
        <FormControl
          id='filter-name'
          onChange={textChangeCallback}
          type='text'
          placeholder='Enter text'
          />
        <Checkbox
          id='stocked-checkbox'
          onChange={changeCheck}
          defaultChecked={this.props.onlyInStock}
          type='checkbox'>
            Only show products in stock
          </Checkbox>
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
