import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./fetchproducts.css";
import Products from "./products";

function Fetchproducts() {
  const [dataarray, setdataarray] = useState([]);
  const [searchstring, setsearchstring] = useState("");
  const [searchproduct, setsearchproduct] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch data Started");
      const response = await axios.get("https://fakestoreapi.com/products");
      setdataarray(response.data);
      setsearchproduct(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredProducts = dataarray;

    // Filter by search string
    if (searchstring) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchstring.toLowerCase())
      );
    }

    // Filter by category if provided in URL
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    setsearchproduct(filteredProducts);
  }, [searchstring, category, dataarray]);

  function ascending() {
    const sortedArray = [...searchproduct].sort((a, b) => a.price - b.price);
    setsearchproduct(sortedArray);
  }

  function descending() {
    const sortedArray = [...searchproduct].sort((a, b) => b.price - a.price);
    setsearchproduct(sortedArray);
  }

  return (
    <>
      <button onClick={ascending}>Ascending</button>
      <button onClick={descending}>Descending</button>
     <Link to={"/checkout"}> Checkout </Link>
      <input
        type="text"
        placeholder="Search Product"
        onChange={(e) => setsearchstring(e.target.value)}
      />
      <div className="product-container">
        {searchproduct.map((element) => (
          <Products
            key={element.id}
            id={element.id}
            title={element.title}
            price={element.price}
            category={element.category}
            description={element.description}
            image={element.image}
            rating={element.rating.rate}
          />
        ))}
      </div>
    </>
  );
}

export default Fetchproducts;
