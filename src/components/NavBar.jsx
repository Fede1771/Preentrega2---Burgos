import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { UserContext } from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const categorias = ["Ropa", "Accesorios", "Electrónica"];

  return (
    <nav>
      <div className="brand">
        <img src="/logo.png" alt="Logo Simona" />
        <h1>Simona</h1>
      </div>

      <ul className="categories">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <Link to={`/productos/${categoria.toLowerCase()}`}>{categoria}</Link>
          </li>
        ))}
      </ul>

      <div className="user-controls">
        {user ? (
          <>
            <span>Bienvenido, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart">
          <CartWidget />
          {cart.length > 0 && <span>({cart.length})</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
