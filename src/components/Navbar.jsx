import React from "react";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <>
      <nav>
        <div className="navProfile">
          <h1>Pizzería Mama Mía</h1>
          <Button variant="dark">🍕Home</Button>
          <Button variant="dark" className={token ? null : "oculto"}>
            🔏Profile
          </Button>
          <Button variant="dark" className={token ? null : "oculto"}>
            ↗️Logout
          </Button>
          <Button variant="dark" className={token ? "oculto" : null}>
            🔐Login
          </Button>
          <Button variant="dark" className={token ? "oculto" : null}>
            ✏️Register
          </Button>
        </div>
        <div className="navTotal">
          <Button variant="success">
            💵Total{" "}
            {total.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
              minimumFractionDigits: 0,
            })}
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
