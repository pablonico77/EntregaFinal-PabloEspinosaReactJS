import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
        <div>
            <img className='carrito' src="./public/Carrito.png" alt="Carrito de compras" />
        </div>
        <span>{totalCantidad()}</span>

        </Link>
    )
}


export default CartWidget