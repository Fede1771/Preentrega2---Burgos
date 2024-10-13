import React from 'react';
import image from '../images/tienda.png'; 

const Home = () => {
  return (
    <div className="home">
      <h2>¡Bienvenido a Simona!</h2>
      <p>
        Explora nuestra amplia gama de productos y encuentra lo que más te gusta.
        Desde ropa y calzado hasta electrónica y accesorios, ¡tenemos todo lo que necesitas!
      </p>
      <p>
        Navega por nuestras categorías y disfruta de una experiencia de compra única.
        ¡Comienza a explorar ahora!
      </p>

      {/* Imagen centrada debajo del texto */}
      <div className="image-container">
        <img src={image} alt="Descripción de la imagen" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
