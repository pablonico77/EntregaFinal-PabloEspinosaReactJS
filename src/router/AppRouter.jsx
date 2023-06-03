import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ColorSchemesExample } from "../components/Navbar/Navbar";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Contact from '../components/Contact/Contact';
import Checkout from "../components/Checkout/Checkout";




    function AppRouter() {

    return (
        <BrowserRouter>
            <ColorSchemesExample />
            <Routes>
                <Route path='/' element={ <ItemListContainer /> } />
                <Route path='/productos/:categoryId' element={ <ItemListContainer />} />
                <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
                <Route path='/cart' element={ <Cart/> }/>
                <Route path='/contact' element={ <Contact/> }/>
                <Route path='/checkout' element={ <Checkout/> }/>
                <Route path='*' element={ <Navigate to={"/"} /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter