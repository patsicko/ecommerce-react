import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const { products, cart, total } = useSelector((state) => state.cart);
  console.log("products", products);
  return (
    <div className="p-10 bg-green-600 rounded-lg w-50 h-50">
      <h1>PRODUCTS</h1>
      <select>
        {products.map((product) => {
          return (
            <option value="" key={product.id}>
              {product.name}:{product.price}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Products;
