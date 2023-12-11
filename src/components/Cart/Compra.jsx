import React, { useState, useContext } from 'react'
import { collection, getFirestore, addDoc} from "firebase/firestore";
import { Button } from '@chakra-ui/react';
import { CartContext } from '../../Context/ShoppingCartContext';
import Swal from 'sweetalert2'
import './Cart.css'


const Compra = () => {
    const [orderId, setOrderId] = useState("")
    const { cart, setCart } = useContext(CartContext);
    const total = cart.reduce((total, item) => total + item.Precio * item.cantidad, 0)
    const [nombre, setNombre] = useState ("")
    const [numero, setNumero] = useState ("")
    const [email, setEmail] = useState ("")

    const sendOrder = () => {
        if (!nombre || !numero || !email) {
            Swal.fire({
                title: "Error",
                text: "Completa todos los campos antes de confirmar la compra",
                icon: "error",
            });
            return;
        }
        const order = {
            Comprador: { nombre: {nombre}, telefono: {numero}, email: {email} },
            Productos: cart.map(item => ({ nombre: item.Nombre, precio: item.Precio, ID: item.ID, cantidad: item.cantidad })),
            Total: total
        };

        const db = getFirestore();
        const ordersCollection = collection (db, "orders"); 
        
        const addDocPromise = async () => {
        const docRef = await addDoc(ordersCollection, order);
            return docRef.id;
        };

        addDocPromise().then((id) => {
        setOrderId(id);
            
            Swal.fire({
                title: "Compra confirmada",
                text: `Código de compra: ${id}`,
                icon: "success",
            });
            setCart([])
        });
        
}



  return (
    <div className='containerCompra'>
        <div className='itemCompra'>
        {cart.map((item, index) => (
            <div key={index} className='containerProducts'>
                <p className='nameCart' >Componente: {item.Nombre}</p>
                <p className='precioCart' >Precio: ${item.Precio * item.cantidad}</p>   
                <p className='cantidadCart'>Cantidad: {item.cantidad}</p>
            </div>
        ))}
        </div>
        <form action="" className="formContainer">
                <div>
                    <label htmlFor="nombre" className="formLabel">Nombre:</label>
                    <input
                        required
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="numero" className="formLabel">Número de teléfono:</label>
                    <input
                        required
                        type="number"
                        id="numero"
                        placeholder="Número de teléfono"
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="formLabel">Email:</label>
                    <input
                        required
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='totalAndButton'>    
                    <p> Total de la compra: ${ total } </p>       
                    <Button onClick={() => sendOrder()}>Confirmar Compra</Button>       
                </div>
        </form>

        
    </div>
  )
}

export default Compra