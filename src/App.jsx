import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
   return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer texto="Bienvenido" /> {/* Renderiza ItemListContainer debajo de Navbar */}
      </header>
    </div>
  );
}

export default App;
