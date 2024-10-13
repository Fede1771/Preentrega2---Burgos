import React, { useEffect, useState } from "react";
import mockProducts from "../assets/mockData.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    // Función para eliminar acentos y pasar a minúsculas
    const normalizeString = (str) => {
        return str
            .normalize("NFD") // Normalizar caracteres
            .replace(/[\u0300-\u036f]/g, "") // Eliminar diacríticos (acentos)
            .toLowerCase(); // Convertir a minúsculas
    };

    useEffect(() => {
        const promise1 = new Promise((res) => {
            setTimeout(() => {
                res(mockProducts);
            }, 2000);
        });

        const getProducts = async () => {
            setLoading(true);
            const products = await promise1;
            let productsFiltered;

            // Filtrar productos según la categoría normalizada
            if (categoryId) {
                productsFiltered = products.filter(
                    (product) => normalizeString(product.category) === normalizeString(categoryId)
                );
            } else {
                productsFiltered = products; // Si no hay categoría, mostrar todos los productos
            }

            setProducts(productsFiltered);
            setLoading(false);
        };

        getProducts();
    }, [categoryId]);

    return loading ? <h1>Espere</h1> : <ItemList products={products} />;
};

export default ItemListContainer;
