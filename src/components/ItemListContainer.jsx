import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div>
     <p>{props.texto}</p> {/* Mostrar el texto de la prop */}
    </div>
  );
};

export default ItemListContainer;
