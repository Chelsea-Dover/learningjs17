import React, {Component} from 'react'
// import './App.css'
import ProductData from './ProductData'
import SearchBox from './SearchBox'
import ProductHeadline from './ProductHeadline'
import { Grid, Jumbotron, Well, Panel, Col, PageHeader } from 'react-bootstrap'

// import ProductHeadline from './ProductHeadline';

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
  // console.log(num.toFixed(2))
  // console.log((num + e-10).toFixed(2))
  return Math.round(num)
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
      <Grid>
        <Col>
          <Jumbotron>
            <h1>Welcome!</h1>
            {/*<p>We have lots of stuff to buy so please spend your money here!</p>*/}
          </Jumbotron>
          <Panel>
            <PageHeader>Choose one of our many items in our store!</PageHeader>
            <Panel>
              <SearchBox
                matchElements={this.matchElements}
                toggleChecked={this.toggleChecked}
                searchel={this.state.searchEl}
                onlyInStock={this.state.onlyInStock}
              />
            </Panel>
            <Panel>
              <ProductHeadline />
              <ProductData
                /// *{...DATA}*/
                TEXTVAL={this.state.searchEl}
                items={DATA}
                INSTOCK={this.state.onlyInStock}
                addTotal={this.addTotal}
                total={this.state.total}
              />
              <Well bsSize='small' id='total'><p>{this.state.total}</p></Well>
            </Panel>
          </Panel>
        </Col>
      </Grid>
    )
  }
}

export default App
