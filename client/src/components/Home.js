import React from 'react'
import { MyContext } from '../App'

const Home = () =>
  <div className='center homeP'>
    <div className=''>
      <h2>Hello and Welcome.</h2>
      <p>Please explore as much as you need to buy or sell any kind of usefull or useless thing.</p>
      <p>To Buy or Sell click any of the buttons at the top of the page.</p>
    </div>
    <div className='homeItems'>
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          { context.state.products.map(showProducts).slice(randomN(0,2), randomN(3,5))}
        </React.Fragment>
      )}
    </MyContext.Consumer>
    </div>
  </div>

const randomN = (n, m) =>
  Math.floor(Math.random() * n) + m

const showProducts = ({
  product_id,
  product_name,
  product_description,
  price
}) =>
  <div key={product_id} className=''>
    <div className="row">
      <div className="col itemWidth">
        <div className="card blue-grey darken-2">
          <div className="card-content white-text">
            <i className="fas fa-info"></i>
            <p>{product_name}</p>
            <p>Price: $ {price}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Home
