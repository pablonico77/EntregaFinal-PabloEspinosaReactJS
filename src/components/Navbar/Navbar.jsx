import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export function ColorSchemesExample() {
    
    return (
    <Navbar bg="secondary" variant="dark">
        <Container>
        <Navbar.Brand href="/" ><img src="./public/1 Cosa de Locos.png" alt="Logo" height="70" /></Navbar.Brand>
        <Nav className="justify-content-end">
            <div className='menu'>
            <Link className='item' to="/">Inicio</Link>
            <Link className='item' to="/productos/rickandmorty">Rick And Morty</Link>
            <Link className='item' to="/productos/starwars">Star Wars</Link>
            <Link className='item' to="/productos/simpsons">The Simpsons</Link>
            <Link className='item' to="/contact">Contacto</Link>

            </div>
        </Nav>
        </Container>
        <CartWidget />
        </Navbar>
    );
}

export default ColorSchemesExample;