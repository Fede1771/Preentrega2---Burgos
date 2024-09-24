import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const cartItemCount = 4; // Valor hardcodeado de notificación

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} /> {/* Icono de carrito de Font Awesome */}
      <span className="notification">{cartItemCount}</span> {/* Valor hardcodeado de notificación */}
    </div>
  );
};

export default CartWidget;
