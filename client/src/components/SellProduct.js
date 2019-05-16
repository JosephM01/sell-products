import React, { Component } from 'react'

class SellProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      product_name: '',
      product_description: '',
      price: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addProduct = this.addProduct.bind(this)
  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  addProduct() {
    const { product_name, email, product_description, price} = this.state
    fetch(`http://localhost:4000/products/add?email=${email}&product_name=${product_name}&product_description=${product_description}&price=${price}`)
  }

  render () {
    const { product_name, email, product_description, price } = this.state
    return (
      <div style={{marginTop: '50px'}}>
        <div className='container blue-grey darken-2 element'>
          <div className='row'>
            <div className='col'>
              <div className='row inputSize'>
                <div className='col '>
                  <p className=''>Title: </p>
                  <input className='input' type='text' value={product_name} name='product_name' onChange={this.handleChange} />
                </div>
                <div className='col pq'>
                  <p>Price: $ </p>
                  <input className='input' type='text' value={price} name='price' onChange={this.handleChange} />
                </div>
                <div className='col '>
                  <p>Email:</p>
                  <input className='input' type='email' value={email} name='email' onChange={this.handleChange} />
                </div>
              </div>
                <div>
                  <p>Description: </p>
                  <textarea className='textArea' value={product_description} name='product_description' onChange={this.handleChange}></textarea>
                </div>
                <div>
                  <button className='addButton' type='button' onClick={this.addProduct}>Sell</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default SellProduct
