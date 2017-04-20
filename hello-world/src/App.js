import React, { Component } from 'react';
// import './App.css';

const DATA = [
  //  TODO: Add $ back and remove/convert to int pragmatically
  {category: "Sporting Goods", price: 49.99, stocked: true, name: "Football"},
  {category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball"},
  {category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7"}
];

function makeKey(key) {
    const convertedKey = key.toLowerCase().replace(/ /g, '-');
    return `${convertedKey}`
}

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
    return (
        <div>
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
                    ///*price={DATA.price}*/
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

class SearchBox extends Component {
    // static propTypes = {
    //     searchel: React.PropTypes.string,
    //     matchElements: React.PropTypes.func,
    //     toggleChecked: React.PropTypes.func,
    //     onlyInStock: React.PropTypes.bool,
    // };

    render() {
        const textChangeCallback = this.props.matchElements.bind(this);
        const changeCheck = this.props.toggleChecked.bind(this);

        return (
            <div>
                <input id='filter-name' onChange={textChangeCallback} placeholder="Search..."/>
            
                <p>
                <input
                        id='stocked-checkbox'
                        onChange={changeCheck}
                        defaultChecked={this.props.onlyInStock}
                        type='checkbox'/>
                Only show products in stock</p>
            </div>
        )
    }
    
}

class ProductHeadline extends Component {
    render() {
        return (
                <thead>
                    <tr><td>Name</td><td>Price</td></tr>
                </thead>
        )
    }
}

class ProductData extends Component {
    // static propTypes = {
    //     TEXTVAL: React.PropTypes.string,
    //     INSTOCK: React.PropTypes.bool,
    //     addTotal: React.PropTypes.func,
    //     total: React.PropTypes.number,
    //     items: React.PropTypes.array,
    //     price: React.PropTypes.number,
    // };
    
    render() {
        let tableGuts = [];
        let currentCategory = "";
        let idName;
        
        this.props.items.forEach ((dataItem) => {
            let key = `${dataItem.category}${dataItem.name}`;
            let filterMatch = dataItem.name.indexOf(this.props.TEXTVAL) !== -1;


            if (currentCategory !== dataItem.category) {
                tableGuts.push(<tr key={currentCategory}><td style={{color: 'green'}}>{dataItem.category}</td></tr>);
                currentCategory = dataItem.category
            }
            if (filterMatch){
                idName = makeKey(key);

                if (!dataItem.stocked){
                    if (!this.props.INSTOCK){
                        tableGuts.push(
                            <tr className="productItem" key={key}>
                                {/*<td>*/}
                                    {/*<input onChange={this.handleBuying.bind(this)} type='checkbox'/>*/}
                                {/*</td>*/}
                                <td id={idName}>Not in stock</td>
                                <td style={{color: 'red'}}>
                                    {dataItem.name}
                                </td>
                                <td>
                                    {dataItem.price}
                                </td>
                            </tr>)


                    }
                }
                else{
                    let price = dataItem.price;
                    tableGuts.push(<tr className="productItem" key={key}><td>
                        <input id={idName} onChange={this.props.addTotal.bind(this, price)} type='checkbox'/>
                    </td><td>{dataItem.name}</td><td>{dataItem.price}</td></tr>)
                }
            }
        });
        
        return (
                <tbody>
                    {tableGuts}
                    <tr>
                        <td id="total">
                            {this.props.total}
                        </td>
                    </tr>
                </tbody>
        )
    }
}


export default App;
