import React, { Component } from 'react';
// import './App.css'
import ProductData from './ProductData';
import SearchBox from './SearchBox';
import ProductHeadline from './ProductHeadline'


// import ProductHeadline from './ProductHeadline';

const DATA = [
  //  TODO: Add $ back and remove/convert to int pragmatically
  {category: "Sporting Goods", price: 49.99, stocked: true, name: "Football"},
  {category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball"},
  {category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7"}
];

function roundUp(num) {
    return Math.round(num)
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchEl: '',
            onlyInStock: false,
            total: 0,
            inCart: {},
        };
    }
    
    matchElements (e) {
        this.setState({searchEl: e.target.value})
    }
    
    toggleChecked (e) {
        this.setState({onlyInStock: e.target.checked})
    }

    addTotal (price, event) {

        let newTotal;
        let isChecked = event.target.checked;

         if (isChecked){
            newTotal = roundUp(this.state.total += price)
        }
        else{
            newTotal = roundUp(this.state.total -= price)
        }
        this.setState({total: newTotal});
     }
  
  render() {
    return ( //
        <div style={{fontFamily: 'sans-serif'}}>
            <SearchBox 
                searchel={this.state.searchEl}
                matchElements={this.matchElements.bind(this)}
                toggleChecked={this.toggleChecked.bind(this)}
                onlyInStock={this.state.onlyInStock}
            />
            <table>
                <ProductHeadline/>
                <ProductData
                    ///*{...DATA}*/
                    TEXTVAL={this.state.searchEl}
                    items={DATA}
                    INSTOCK={this.state.onlyInStock}
                    addTotal={this.addTotal.bind(this)}
                    total={this.state.total}
                />
            </table>
        </div>
    );
  }
}


export default App;
