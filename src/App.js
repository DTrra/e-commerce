import './App.css';
import Counter from './components/Counter/Counter';
import Navbar from './components/navbar/NavBar';

function App() {

  const addToCart = (number) => {
    console.log(`Se agregaron al carrito ${number} items`);
    return (
      <div id="liveAlertPlaceholder">
        <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
      </div>
    );
  };

  return (
    <div className='App'>
      <Navbar/>
      <Counter stock={10} initial={0} addToCart={addToCart} />
    </div>
  );
}

export default App;