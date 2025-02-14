import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cardpizza.css";

const Cardpizza = (props) => {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.desc}
          <br/>
          <strong>Ingredientes:</strong>
          <ul>
            {props.ingredients.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li> // Renderiza cada ingrediente como un elemento de lista
            ))}
          </ul>
          <hr />
        </Card.Text>
        <div className="btnflex">
          <Button variant="dark">Ver más</Button>
          <Button variant="success">
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
