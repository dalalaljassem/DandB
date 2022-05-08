import logo from './luke.jpeg';
import './App.css';
import products from './products.js';

function Product(props){
  return(
    <div> 
    <h1>{props.name}</h1>
    <h2>{props.price}</h2>
    <img src={props.image} alt="logo" />
    </div>
  )
  
}

//rendering the array of components
function App() {
  const myProducts = products.map(item => <Product  name={item.name} price={item.price} image={item.image} /> )

  return (
    <div className="App">
      <header className="App-header">
        <h3>Dee and Bee's Shop</h3>
        <p>
          This website will be a coffee and book shop run by Dee and Bee.
        </p>
        <img src={logo} alt="logo" />
        {myProducts}
      </header>
    </div>
  );
  
}

export default App;


