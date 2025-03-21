import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";
import Loader from "./Loader/Loader";
import toast from "react-hot-toast";
import { CartContext } from "../Context/CartContext";

export default function LatestProducts({ searchQuery }) {
  const [products, setProducts] = useState([]);
  const { addTOCart, setNumOfCartItems, setCartId } = useContext(CartContext);

  async function getProducts() {
    try {
      const res = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function addProduct(id) {
    let response = await addTOCart(id);
    if (response.status === 'success') {
      setNumOfCartItems(response.numOfCartItems);
      setCartId(response.cartId);
      toast.success('Added Successfully to your cart', {
        style: { backgroundColor: '#0aad0a' }
      });
    } else {
      toast.error('Failed to add product', {
        style: { backgroundColor: 'red' }
      });
    }
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="row">
      {filteredProducts.length > 0 ? 
        filteredProducts.map((product) => (
          <div className="p-2 w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4" key={product.id}>
            <ProductItem product={product} addProduct={addProduct} />
          </div>
        )) :
        <p>No products found</p>
      }
    </div>
  );
}