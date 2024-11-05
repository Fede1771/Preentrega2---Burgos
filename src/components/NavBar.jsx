import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
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

      <CartWidget />
    </nav>
  );
};

export default Navbar;
