import React, { useEffect, useState } from "react";
import mockProducts from "../assets/mockData.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams(); // Esto recupera la categoría de la URL

    useEffect(() => {
        const promise1 = new Promise((res) => {
            setTimeout(() => {
                res(mockProducts); // Aquí debes usar la fuente de datos correcta
            }, 2000);
        });

        const getProducts = async () => {
            setLoading(true);
            const products = await promise1;
            let productsFiltered;

            if (categoryId) {
                // Filtro los productos por categoría (categoryId viene de la URL)
                productsFiltered = products.filter(
                    (product) => product.category === categoryId
                );
            } else {
                productsFiltered = products;
            }

            setProducts(productsFiltered);
            setLoading(false);
        };

        getProducts();
    }, [categoryId]);

    return loading ? <h1>Espere...</h1> : <ItemList products={products} />;
};

export default ItemListContainer;
