import { useContext, useState, useEffect } from "react";
import { UserAuthContext } from "../contexts/userAuth";
import axios from "axios";
import "./checkout.css";

function Checkout() {
  const { add_to_cart } = useContext(UserAuthContext); 
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetch data started");
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;

        const filteredProducts = allProducts.filter((product) =>
          add_to_cart.includes(product.id)
        );
        setCartProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [add_to_cart]);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {loading ? (
        <p>Loading...</p>
      ) : cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartProducts.map((product) => (
            <li key={product.id} className="cart-item">
              <img
                src={product.image}
                alt={product.title}
                className="cart-product-image"
              />
              <div className="cart-product-info">
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p>Price: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Checkout;
