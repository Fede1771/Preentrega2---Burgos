import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  const categorias = ["Ropa", "Calzado", "Accesorios", "Electrónica"];

  return (
    <nav>
      <div className="brand">
        <img src="/logo.png" alt="Logo Simona" />
        <h1>Simona</h1>
      </div>

      <ul className="categories">
        <li>
          <a href="/">Inicio</a> {/* Enlace para volver al inicio */}
        </li>
        {categorias.map((categoria, index) => (
          <li key={index}>
            <a href={`/productos/${categoria.toLowerCase()}`}>{categoria}</a>
          </li>
        ))}
      </ul>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
