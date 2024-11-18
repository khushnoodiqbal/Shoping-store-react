import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Font Awesome Shopping Cart Icon
import "./navbar.css"; // Assuming you will style the navbar in navbar.css

function Navbar({ searchstring, setsearchstring, ascending, descending }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
          alt="Logo"
          className="navbar-logo"
        />
        <Link to="/" className="navbar-link">
          Products
        </Link>
        <Link to="/category" className="navbar-link">
          Category
        </Link>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search Products"
          value={searchstring}
          onChange={(e) => setsearchstring(e.target.value)}
        />
      </div>
      <div className="navbar-right">
        <button className="sort-button" onClick={ascending}>
          Ascending
        </button>
        <button className="sort-button" onClick={descending}>
          Descending
        </button>
        <Link to="/checkout" className="checkout-button">
          <FaShoppingCart className="checkout-icon" /> Checkout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
