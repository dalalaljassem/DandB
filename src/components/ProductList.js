import Home from './Home.js';
import ProductItem from './ProductItem.js';

function ProductList(){

    const myProducts = ProductItem.map(item => <Home  name={item.name} price={item.price} image={item.image} id ={item.id} /> ) //pass product as prop?
   return myProducts;

}

export default ProductList;  