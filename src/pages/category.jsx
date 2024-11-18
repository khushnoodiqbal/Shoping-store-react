import { useState, useEffect } from "react";
import axios from "axios";
import "./fetchproducts.css";
import Products from "./products";
import { Link } from "react-router-dom";

function Category() {
  const [dataarray, setdataarray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setdataarray(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {dataarray.map((category, index) => (
          <li key={index}>
            <Link to={`/products/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
