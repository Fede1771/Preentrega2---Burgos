import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './App.css';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {children}
      </header>
      <Footer />
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/productos/:categoryId"  // Cambia la ruta para que use un parámetro
            element={<ItemListContainer products={products} />} 
          />
          <Route path="/detail/:id" element={<ItemDetailContainer products={products} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
