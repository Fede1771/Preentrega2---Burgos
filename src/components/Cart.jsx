import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;
