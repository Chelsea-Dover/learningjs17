import React, {Component} from 'react'
import './App.css'
import ProductData from './ProductData'
import SearchBox from './SearchBox'
import ProductHeadline from './ProductHeadline'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import {Table, TableHeader} from 'material-ui/Table'
import {indigo500} from 'material-ui/styles/colors'

import IconButton from 'material-ui/IconButton'
import SocialCake from 'material-ui/svg-icons/social/cake'

const barStyle = {
  backgroundColor: indigo500
}

const style = {
  padding: 30,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

const DATA = [
  //  TODO: Add $ back and remove/convert to int pragmatically
  {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football', id: 1},
  {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball', id: 2},
  {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball', id: 3},
  {category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch', id: 4},
  {category: 'Electronics', price: 399.99, stocked: false, name: 'iPhone 5', id: 5},
  {category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7', id: 6}
]

function roundUp (num) {
  let roundNum = parseFloat(num.toFixed(2))
  if (roundNum < 0.99) {
    roundNum = 0.00
  }
  return roundNum
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchEl: '',
      onlyInStock: false,
      total: 0,
      inCart: {}
    }
    this.matchElements = this.matchElements.bind(this)
    this.toggleChecked = this.toggleChecked.bind(this)
    this.addTotal = this.addTotal.bind(this)
  }

  matchElements (e) {
    this.setState({searchEl: e.target.value})
  }

  toggleChecked (e) {
    this.setState({onlyInStock: e.target.checked})
  }

  addTotal (event) {
    let newTotal
    let isChecked = event.target.checked
    let price

    DATA.forEach((dataItem) => {
      if (dataItem.id === parseInt(event.target.id)) {
        price = dataItem.price
      }
    })

    if (isChecked) {
      newTotal = roundUp(this.state.total += price)
    } else {
      newTotal = roundUp(this.state.total -= price)
    }
    this.setState({total: newTotal})
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar
            iconElementLeft={<IconButton><SocialCake /></IconButton>}
            title='Welcome!'
            style={barStyle}
          />
          <Paper style={style} zDepth={1}>
            <SearchBox
              searchel={this.state.searchEl}
              matchElements={this.matchElements}
              toggleChecked={this.toggleChecked}
              onlyInStock={this.state.onlyInStock}
            />
            <Table>
              <TableHeader>
                <ProductHeadline />
              </TableHeader>
            </Table>
            <ProductData
              // {...DATA}
              TEXTVAL={this.state.searchEl}
              items={DATA}
              INSTOCK={this.state.onlyInStock}
              addTotal={this.addTotal}
              total={this.state.total}
            />
            <p id='total'>${this.state.total}</p>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
