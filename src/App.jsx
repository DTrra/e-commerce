import './App.css';
import Navbar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Carrito} from './components/CartWidget/Carrito';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Carrito/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;