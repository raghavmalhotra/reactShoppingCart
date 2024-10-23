# Shopping Cart Concept Design USING CONTEXT API

This project is a concept design for a shopping cart component for a potential e-commerce project. The design is built using React, Tailwind CSS, and Vite.

The cart component is designed to be fully responsive and accessible. It includes features such as:

- A list of products in the cart
- The ability to add or remove products from the cart
- A total price calculation
- Ability to navigate to different pages (without reloading) with react-router-dom 
- A checkout button to complete the purchase

The design is fully customizable and easily integrated into any e-commerce project.

## Demo

A live demo of the cart component can be found [here](https://shoppingcart232.netlify.app/).

## Installation

To install the cart component, clone this repository and run the following command in the root directory:

```
npm install

## Usage

To use the cart component in your project, import it and use it in your React component:
import { Cart } from './src/components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };

  return (
    <Cart
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
};

