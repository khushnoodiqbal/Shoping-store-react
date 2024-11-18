import { Link } from "react-router-dom";
import { useContext } from "react";
import "./products.css";
import { UserAuthContext } from "../contexts/userAuth";

function Products(props) {
  const { add_to_cart, setadd_to_cart } = useContext(UserAuthContext);
  console.log(add_to_cart);
  return (
    <div className="product-card">
      <Link to={`/products/${props.id}`} style={{ textDecoration: "none" }}>
        <img src={props.image} alt={props.title} className="product-image" />
        <div className="product-info">
         <h2 className="product-title">{props.title.split(" ").slice(0, 3).join(" ")}</h2>
          <p className="product-category">{props.category}</p>
          <p className="product-price">Price: {props.price}$</p>
        </div>
      </Link>
      <button
        className="add-to-cart-btn"
        onClick={() => {
          setadd_to_cart([...add_to_cart, props.id]);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Products;
