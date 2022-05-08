import logo from './luke.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Dee and Bee's Shop</h3>
        <p>
          This website will be a coffee and book shop run by Dee and Bee.
        </p>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;


