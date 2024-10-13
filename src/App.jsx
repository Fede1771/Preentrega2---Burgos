import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home'; // Importa tu componente Home
import NotFound from './components/NotFound';
import Footer from './components/Footer'; // Importa tu componente Footer
import './App.css';

// Componente Layout que incluye el Navbar y el Footer
const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {children} {/* Renderiza los componentes hijos aquí */}
      </header>
      <Footer /> {/* Añade el Footer aquí para que aparezca en todas las páginas */}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Agrega la ruta para el componente Home */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
