import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { totalAmount,token,logout } = useContext(CartContext); // Accede al total del carrito desde el contexto


  return (
    <>
      <nav>
        <div className="navProfile">
          <h1>Pizzería Mama Mía</h1>
          <Button variant="dark">
            <Link to="/" className="text-decoration-none text-white">🍕Home</Link>
          </Button>
          <Button variant="dark" className={token?"":"oculto"}>
            <Link to="/profile" className="text-decoration-none text-white">🔏Profile</Link>
          </Button>
          <Button variant="dark" className={token?"":"oculto"} onClick={logout}>
            <Link className="text-decoration-none text-white">↗️Logout</Link>
          </Button>
          <Button variant="dark" className={token?"oculto":""}>
            <Link to="/login" className="text-decoration-none text-white">🔐Login</Link>
          </Button>
          <Button variant="dark" className={token?"oculto":""}> 
            <Link to="/register" className="text-decoration-none text-white">✏️Register</Link>
          </Button>
        </div>

        <div className="navTotal">
          <Button variant="success">
            <Link to="/cart" className="text-decoration-none text-white">
              💵 Total: {totalAmount.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
                minimumFractionDigits: 0,
              })}
            </Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;