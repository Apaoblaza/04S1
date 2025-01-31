import "./Cart.css";
import { pizzaCart } from "../assets/pizzas";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cart = () => {
  const [pizzaCount, setPizzaCount] = useState(pizzaCart);

  const addPizza = (id) => {
    setPizzaCount((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const removePizza = (id) => {
    setPizzaCount((prev) =>
      prev.map((pizza) =>
        pizza.id === id && pizza.count > 0
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      ).filter((pizza)=>pizza.count>0)
    );
  };

  return (
    <div className="cartStyle">
      <Container className="cartContainer p-4">
        <h1 className="cartH1">Detalles del Pedido</h1>
        <hr />
        {pizzaCount.map((pizza) => (
          <Row className="row mb-4 mt-4 align-items-center" key={pizza.id}>
            <Col>
              <img className="cartImg" src={pizza.img} alt={pizza.name} />
            </Col>
            <Col xs={6}>
              <strong>{pizza.name}</strong>
            </Col>
            <Col>
              <strong>${pizza.price.toLocaleString("es-ES")}</strong>
            </Col>
            <Col>
              <Button variant="success" onClick={() => addPizza(pizza.id)}>
                +
              </Button>
            </Col>
            <Col>
              <p className="cartNumber">{pizza.count}</p>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => removePizza(pizza.id)}>
                -
              </Button>
            </Col>
          </Row>
        ))}
        <hr />
        <div className="cartTotal">
          <h2>
            Total: $
            {pizzaCount.reduce((total, pizza) => total + pizza.price * pizza.count, 0).toLocaleString("es-ES")}
          </h2>
          <Button variant="secondary" className="m-1">
            Pagar
          </Button>
          <Button variant="secondary" className="m-1">
            Volver
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;