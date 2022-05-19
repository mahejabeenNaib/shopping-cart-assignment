import React, { useContext, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import App from "../../App";
import CartContext from "../../context/cartContext/cart-context";
import Cart from "../../pages/cart";
import Home from "../../pages/home";
import "./index.scss";

const Header = () => {
  // eslint-disable-line no-eval
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const isActiveLink = ({ isActive }: any) => (isActive ? "active" : ""); // eslint-disable-line no-eval
  const {
    CartState: { cartCount },
  } = useContext(CartContext);
  const handleClick = () => {
    if (window.innerWidth > 1024) {
      setShow(true);
    } else {
      navigate("/cart");
      setShow(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Container>
        <Row>
          <Col xs={6} md={8}>
            <div className="flex">
              <div>
                <img src="static/images/logo.png" alt="logo" height="50" />
              </div>
              <nav className="flex d-none d-md-flex">
                <ul className="d-flex">
                  <NavLink className={`navLink ${isActiveLink}`} to={"/"}>
                    Home
                  </NavLink>
                  <NavLink
                    className={`navLink ${isActiveLink}`}
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </ul>
              </nav>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="flex secondary-menu">
              <nav className=" d-none d-md-block">
                <ul className="list-h d-flex">
                  <NavLink className={`navLink ${isActiveLink}`} to={"/login"}>
                    Sign In
                  </NavLink>
                  <NavLink
                    className={`navLink ${isActiveLink}`}
                    to={"/register"}
                  >
                    Register
                  </NavLink>
                </ul>
              </nav>
              <button className="cart flex" onClick={handleClick}>
                <img src="static/images/cart.svg" alt="cart icon" />
                <span className="cart-text" id="cart-items">
                  <span className="cart-count">{cartCount}</span> Items
                </span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* modal */}
      <div className="cart-popup">
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Cart showClose={true} handleClose={handleClose} />
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>
      </div>
    </header>
  );
};

export default Header;
