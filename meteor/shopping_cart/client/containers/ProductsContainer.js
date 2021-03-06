/*
Posterior a usar rutas, no se usa mas
*/
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {ProductsCollection} from '../../shared/collections/ProductsCollection';
import Product from  '../components/ProductComponent';
import {CartCollection} from '../../shared/collections/CartCollection';

class Products extends React.Component {
   constructor(props) {
   super(props);
   this.onAddToCart = this.onAddToCart.bind(this);
 }
 onAddToCart(product){
   console.log('aaaaaa');
  CartCollection.insert({
      'title' : product.title,
      'price' : product.price,
      'inventory' : product.inventory,
      'quantity': 1
   });
   alert(product.title + ' added to your cart')
}
  render() {
    const { products } = this.props
    return (
      <div>
        <h2>Product List</h2>
        {products.map(product =>
          <Product
            title={product.title}
            price={product.price}
            quantity={product.inventory}
            key={product._id}
            onAddToCart={() => this.onAddToCart(product)}
          />
        )}
      </div>
    )
  }
}
export default createContainer(() => {
  return {
     products: ProductsCollection.find({}).fetch()
  };
}, Products);
