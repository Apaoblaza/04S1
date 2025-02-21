import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);  // Pizzas disponibles (Home)
    const [cart, setCart] = useState([]);      // Pizzas en el carrito

    // Cargar las pizzas desde la API y establecerlas en el contexto
    const fetchPizzas = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/pizzas");
            if (!response.ok) throw new Error("Error al obtener las pizzas");
            const data = await response.json();

            // Agregamos la propiedad count solo para el carrito
            const pizzasConCount = data.map(pizza => ({ ...pizza, count: 0 }));
            setPizzas(pizzasConCount);
        } catch (error) {
            console.error("Error al obtener las pizzas", error);
        }
    };

    // Cargar las pizzas al iniciar el contexto
    useEffect(() => {
        fetchPizzas();
    }, []);

    // Agregar una pizza al carrito
    const addPizza = (id) => {
        const pizzaToAdd = pizzas.find((pizza) => pizza.id === id);

        if (pizzaToAdd) {
            setCart((prevCart) => {
                const exists = prevCart.find((pizza) => pizza.id === id);
                if (exists) {
                    return prevCart.map((pizza) =>
                        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
                    );
                } else {
                    return [...prevCart, { ...pizzaToAdd, count: 1 }];
                }
            });
        }
    };

    // Eliminar una pizza del carrito
    const removePizza = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((pizza) =>
                    pizza.id === id && pizza.count > 0
                        ? { ...pizza, count: pizza.count - 1 }
                        : pizza
                )
                .filter((pizza) => pizza.count > 0)
        );
    };

    // Calcular el total del carrito
    const totalAmount = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

    return (
        <CartContext.Provider value={{ pizzas, cart, addPizza, removePizza, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
