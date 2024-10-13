import React, { useEffect, useState } from "react";
import mockProducts from "../assets/mockData.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

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

            if (categoryId) {
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

    useEffect(() => {
        console.log("Este side effect se ejecuta en el montaje del componente");

        return () => {
            console.log("Aca se va a desmontar el componente!");
        };
    }, []);

    console.log(products);

    return loading ? <h1>Espere</h1> : <ItemList products={products} />;
};

export default ItemListContainer;
