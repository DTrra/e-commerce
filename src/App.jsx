import './App.css';
import Counter from './components/Counter/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar/NavBar';


function App() {

  const addToCart = (number) => {
    console.log(`Se agregaron al carrito ${number} items`);

  };

  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer/>
      {/*<Counter stock={10} initial={0} addToCart={addToCart} />*/ }
    </div>
  );
}

export default App;