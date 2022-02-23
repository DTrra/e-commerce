import './App.css';
import Navbar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './components/Pages/Home';
import {Pizzas} from './components/Pages/Pizzas';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/CartaDePedidos/:id' element={<ItemDetailContainer/>}/>
        <Route path='/pizzas/' element={<Pizzas/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;