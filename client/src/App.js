import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar, Home, ShopProducts, ViewProduct, SellProduct } from './components'


import './App.css';

const navButtons = [{page: 'Buy', address: '/shop-products'}, {page: 'Sell', address: '/sell-product'}];

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    products: []
  }
  
  componentDidMount () {
    this.getProducts()
  }


  getProducts () {
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data}))
    .catch(err => console.error(err))
  }

  render() {
    return(
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>

    )
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render () {
    return (
      <MyProvider>
        <Router>
          <div className="">
            <NavBar elements={navButtons} />
            <Route exact path="/" component={Home} />
            <Route path="/shop-products" component={ShopProducts} />
            <Route path="/view-product" component={ViewProduct} />
            <Route path="/sell-product" component={SellProduct} />
          </div>
        </Router>
      </MyProvider>
    );
  }
}

export default App;
