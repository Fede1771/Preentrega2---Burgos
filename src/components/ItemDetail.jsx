import React from "react";
import styles from '../styles/ItemDetail.module.scss'; // Asegúrate de que la ruta sea correcta

const ItemDetail = ({ product }) => {
    return (
        <div className={styles.card}> {/* Aplicamos la clase de tarjeta */}
            <img src={product.pictureUrl} alt={product.title} className={styles.image} /> {/* Aplicamos clase a la imagen */}
            <h1 className={styles.title}>{product.title}</h1> {/* Clase para el título */}
            <span className={styles.description}>{product.description}</span> {/* Clase para la descripción */}
        </div>
    );
};

export default ItemDetail;
