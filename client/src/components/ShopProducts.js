import React from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../App'


const ShopProducts = () => 
  <div style={{marginTop: '50px'}}>
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          { context.state.products.map(showProducts)}
        </React.Fragment>
      )}
    </MyContext.Consumer>
  </div>

export let selectedItem = {}

function showProducts ({ 
  product_id,
  email,
  product_name,
  product_description,
  price
}) { 
  let info = {
    product_id,
    email,
    product_name,
    product_description,
    price
  }
  let handleSelection = () => Object.assign(selectedItem, info)
  return <div key={product_id} className='container element ' >
    <div className='row size '>
      <div className='col productInfo '>
        <div className='' >
          <Link to={`/view-product/${product_id}`}>
            <i className="fas fa-info"></i>
          </Link>
        </div>
      </div>
      <div className='col productTitle ' onClick={handleSelection} >
        <div>
          <Link to={`/view-product/${product_id}`} style={{color: 'white'}} >
            {product_name}
          </Link>
        </div>
      </div>
      <div className='col productPrice '>
        <span >Price: $ {price}</span>
      </div>
    </div>
  </div>
}




export default ShopProducts