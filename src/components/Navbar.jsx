import React from "react";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <>
      <nav>
        <div className="navProfile">
          <h1>Pizzería Mama Mía</h1>
          <Button variant="dark"><Link to="/" className="text-decoration-none text-white">🍕Home</Link></Button>
          <Button variant="dark">
            {/* className={token ? "visible" : "oculto"} */}
            <Link to="/profile" className="text-decoration-none text-white">🔏Profile</Link>
          </Button>
          <Button variant="dark" >
            {/* className={token ? "visible" : "oculto"} */}
            <Link to="/" className="text-decoration-none text-white">↗️Logout</Link>
          </Button>
          <Button variant="dark" >
            {/* className={token ? "oculto" : "visible"} */}
            <Link to="/login" className="text-decoration-none text-white">🔐Login</Link>
          </Button>
          <Button variant="dark" >
            {/* className={token ? "oculto" : "visible"} */}
            <Link to="/register" className="text-decoration-none text-white">✏️Register</Link>
          </Button>
        </div>
        <div className="navTotal">
          <Button variant="success">
            <Link to="/cart" className="text-decoration-none text-white">💵Total{" "}
            {total.toLocaleString("es-CL", {
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
