import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./fetchproducts.css";
import Products from "./products";
import Navbar from "../components/navbar";
import { FaTag } from "react-icons/fa"; // Import the FaTag icon

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

    if (searchstring) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchstring.toLowerCase())
      );
    }

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
      <Navbar
        searchstring={searchstring}
        setsearchstring={setsearchstring}
        ascending={ascending}
        descending={descending}
      />
      <div class="latest-drops">
        <h2 class="special-offer">Special Offer</h2>
        <h1 class="latest-drops-title">LATEST DROPS</h1>
        <p class="description">
          Looking for the latest trends in clothing, Jewelry and accessories?
          Welcome to our 'Latest Drops' edit, bringing you all the latest styles
          from all your fave brands.
        </p>
      </div>

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
