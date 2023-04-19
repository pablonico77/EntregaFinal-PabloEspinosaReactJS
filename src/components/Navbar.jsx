import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

export function ColorSchemesExample() {
    return (
    <Navbar bg="secondary" variant="dark">
        <Container>
        <Navbar.Brand href="#home" ><img src="./public/1 Cosa de Locos.png" alt="Logo" height="70" /></Navbar.Brand>
        <Nav className="justify-content-end">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#features">Tabla de Talles</Nav.Link>
            <Nav.Link href="#pricing">Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        </Container>
        <CartWidget />
        </Navbar>
    );
}

export default ColorSchemesExample;