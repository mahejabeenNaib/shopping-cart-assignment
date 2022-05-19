import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import CartContext from "../../../../context/cartContext/cart-context";
import { Product } from "../../../../services/commonServices";
import "./index.scss";

const ProductList = ({ list }: any) => {
  const {
    CartState: { cartItems },
    updateCart,
  } = useContext(CartContext);

  // const isItemInCart = Boolean(cartItems.find((item) => item.id === get(product, 'id')));
  const handleClick = (product: Product) => {
    updateCart(product);
    // isItemInCart ? history.push(CART) : updateCart(product);
  };

  return (
    <div>
      <ul className="product-list">
        {list.map((product: any) => (
          <li className="product-cards" id={product.category}>
            <h2 className="product-name truncate">{product.name}</h2>
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
                    {/* {true ? 'Go To Cart' : 'Add To Cart'} */}
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
