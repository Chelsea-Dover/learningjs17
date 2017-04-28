/**
 * Created by Chelsea on 4/19/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

const checkStyle = {
  maxWidth: 264,
  textAlign: 'left',
  margin: 'auto'
}

export default class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.textChangeCallback = this.props.matchElements.bind(this)
    this.changeCheck = this.props.toggleChecked.bind(this)
  }
  render () {
    return (
      <div>
        <TextField
          id='filter-name'
          onChange={this.textChangeCallback}
          hintText='Search...'
          floatingLabelText='Search for a product'
        />
        <Checkbox
          style={checkStyle}
          id='stocked-checkbox'
          onClick={this.changeCheck}
          label='Show only products in stock'
        />
      </div>
    )
  }
}

SearchBox.propTypes = {
  // searchel: PropTypes.string,
  matchElements: PropTypes.func,
  toggleChecked: PropTypes.func,
  // onlyInStock: PropTypes.bool
}
