import './App.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ColorSchemesExample} from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <ColorSchemesExample />
      <Routes>
        <Route path= '/' element={ <ItemListContainer bienvenido={"Bienvenido a nuestra tienda Online"}/> } />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer/> } />
        <Route path= '/productos/:categoryId' element={ < ItemListContainer /> } />
        <Route path= '*' element={ <Navigate to={"/"} /> } />
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App;
