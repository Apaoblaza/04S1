import React, { useContext } from "react";
import Header from "../components/Header";
import Cardpizza from "../components/Cardpizza";
import "./Home.css";
import Container from "react-bootstrap/Container";
import { CartContext } from "../context/CartContext";

const Home = () => {
    const { pizzas, addPizza } = useContext(CartContext); // Pizzas disponibles y función para agregar

    return (
        <>
            <Header />
            <Container fluid>
                <div className="productos">
                    {pizzas.length > 0 ? (
                        pizzas.map((pizza) => (
                            <Cardpizza
                                key={pizza.id}
                                id={pizza.id}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                desc={pizza.desc}
                                addPizza={addPizza} // Pasamos la función para agregar al carrito
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
