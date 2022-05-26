import React, { useContext } from "react";
import CartContext from "../../../../context/cartContext/cart-context";
import { Product } from "../../../../services/commonServices";
import "./index.scss";

const ProductList = ({ list }: any) => {
  const {
    updateCart,
  } = useContext(CartContext);

  const handleClick = (product: Product) => {
    updateCart(product);
  };

  return (
    <div>
      <ul className="product-list">
        {list.map((product: Product) => (
          <li className="product-cards" id={product.category} key={product.id}>
            <h1 className="product-name truncate">{product.name}</h1>
            <div  className="product-wrap">
              <img
                src={product.imageURL}
                alt={product.name}
                className="product-img"
              />
              <div>
                <p className="product-desc">{product.description}</p>
                <div className="product-cta-container  d-none d-lg-block">
                  <span className="product-price">MRP Rs. {product.price}</span>
                  <button
                    onClick={() => handleClick(product)}
                    className="btn-cta btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
                <button
                  className="btn-primary d-none tablet"
                  onClick={() => handleClick(product)}
                >
                  Buy Now @ Rs. {product.price}
                </button>
              </div>
            </div>
            <button
                  className="btn-primary d-none mobile"
                  onClick={() => handleClick(product)}
                >
                  Buy Now @ Rs. {product.price}
                </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
