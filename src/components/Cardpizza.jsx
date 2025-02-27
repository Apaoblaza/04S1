import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cardpizza.css";
import { Link } from "react-router-dom";

const Cardpizza = (props) => {
  const handleAddToCart = () => {
    if (props.addPizza && props.id) {
      props.addPizza(props.id);  // Asegúrate de que props.id sea válido
    } else {
      console.error("No se han definido ID o addPizza");
    }
  };

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={props.img} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.desc}
          <br />
          <strong>Ingredientes:</strong>
          <ul>
            {props.ingredients.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          <hr />
        </Card.Text>
        <div className="btnflex">
          <Button variant="dark"><Link to={`/pizza/${props.id}`} className="text-decoration-none text-white">Ver más</Link></Button>
          <Button variant="success" onClick={handleAddToCart}>
            Agregala por{" "}
            {props.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
              minimumFractionDigits: 0,
            })}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cardpizza;
