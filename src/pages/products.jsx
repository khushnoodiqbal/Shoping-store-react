import { Link } from "react-router-dom";
import "./products.css";

function Products(props) {
  return (
    <div className="product-card">
      <Link to={`/products/${props.id}`} style={{ textDecoration: "none" }}>
        <img src={props.image} alt={props.title} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{props.title}</h2>
          <p className="product-category">{props.category}</p>
          <p className="product-price">Price: {props.price}$</p>
        </div>
      </Link>
      <button className="add-to-cart-btn" >
        Add to Cart
      </button>
    </div>
  );
}

export default Products;
