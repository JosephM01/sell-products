import React from 'react'
import { selectedItem } from './ShopProducts';


const ViewProduct = () =>
  <div style={{marginTop: '50px'}}>
    <div className='container element center'>
      <div className='contact'>
        <p>{ selectedItem.product_name }</p>
      </div>
      <div className='itemDescription'>
        <p>Contact: { selectedItem.email }</p>
      </div>
      <div className='itemDescription'>
        <p>Description: { selectedItem.product_description }</p>
      </div>
      <div className='itemDescription'>
        <p>Price: $ { selectedItem.price }</p>
      </div>
      <div className='reminder'>
        <p>
          Reminder: We do not own any of the articles described above.<br />
          We just provide "buy/sell" service. <br />
          Avoid giving your credentials as ID, credit card number, bank account, etc.
        </p>
      </div>
    </div>
  </div>


export default ViewProduct
