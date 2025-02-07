import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Pizza.css";

const Pizza = () => {
  const pizzaId = "p001"; // ID fijo por ahora
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!response.ok) {
          throw new Error("No se encontró la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="pizzaDesc">
        <img className="pizzaImg"src={pizza.img}/>      
        <h1>{pizza.name}</h1>
        <p className="pizzaDescP">{pizza.desc}</p>
            <strong className="pizzaDescP">Ingredientes:</strong>
            <ul>
              {pizza.ingredients.map((ingrediente, index) => (
                <li className="pizzaDescP"key={index}>{ingrediente}</li>
              ))}
            </ul>
            <hr />
            <h2>Precio: {pizza.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
              minimumFractionDigits: 0,
            })}</h2>
            <div className="pizzaButtons">

          <Button variant="success">Agregar</Button>
          <Button variant="success" >
            Volver
          </Button>
            </div>
    </div>
  )
}
export default Pizza;
