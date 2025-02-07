import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cardpizza from "./Cardpizza";
import "./Home.css";
import Container from "react-bootstrap/Container";

const Home = () => {
  const [pizzas, setPizzas] = useState([]); 



  const fetchPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas"); 
      if (!response.ok) {
        throw new Error("Error al obtener las pizzas");
      }
      const data = await response.json(); 
      setPizzas(data); 
    } catch (error) {
      console.error("Error al obtener las pizzas", error);
      setError(error.message);
    } 
  };

  useEffect(() => {
    fetchPizzas(); 
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        <div className="productos">
          {pizzas.length > 0 ? (
            pizzas.map((pizza) => (
              <Cardpizza
                key={pizza.id || pizza.name} // Asegura una clave única
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            ))
          ) : (
            <p>No hay pizzas disponibles.</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
