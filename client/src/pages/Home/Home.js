import React, { Component } from 'react';
// import ProductView from './../../components/ProductView/productview'
// import ProductCard from './../../components/ProductView/productview'
// import About from '../About/About'

// import React from 'react';
// import {TshirtList } from "./TshirtList";
// import './App.css';

import '../../components/App/App.css';

// import { CartProvider } from './CartContext';
// import { Cart } from '../Cart/Cart';
import { CartProvider } from '../../contexts/CartContext';
// import { TshirtList } from '../Tshirt/TshirtList';
import { Cart } from '../../components/Cart/Cart';
import { TshirtList } from '../../components/Tshirt/TshirtList';
// import App from '../../components/App/App';

class HomePage extends Component {

  render() {
    return (
      <div>

        <div className="jumbotron text-left">
          <h4 className="display">Personal protective equipment</h4>
          <h4>delivery to your doorstep</h4>
          {/* <img className="jumbotronImg" src="https://fontmeme.com/permalink/201007/197bd622ace3df16555e2fc9b07a4ceb.png" /> */}
          {/* <hr className="my-4" /> */}
          <p>Take a look at our inventory below.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          
        </div>

        <row>

        </row>
      </div>
    );
  }
}

export default HomePage;