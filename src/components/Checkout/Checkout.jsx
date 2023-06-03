import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, addDoc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })
    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { nombre, direccion, email } = values

        if (nombre.length < 3) {
            alert("El nombre demasiado corto")
            return
        }
        if (direccion.length < 3) {
            alert("Dirección inválida")
            return
        }
        if (email.length < 5) {
            alert("Email inválido")
            return
        }
        
        const orden = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const q = query(productosRef, where( documentId(), "in", cart.map(item => item.id) ))
        
        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock
            
            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                        batch.commit()
                        setOrderId(doc.id)
                        emptyCart()
                    })
        } else {
            alert("Hay items sin stock")
        }

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Tu número de orden es: {orderId}</p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    className="form-control my-2"
                    type="text"
                    value={values.nombre}
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleInput}
                />
                <input 
                    className="form-control my-2"
                    type="text"
                    value={values.direccion}
                    placeholder="Dirección"
                    name="direccion"
                    onChange={handleInput}
                />
                <input 
                    className="form-control my-2"
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    name="email"
                    onChange={handleInput}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout