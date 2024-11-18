import { useState, useEffect } from "react";
import axios from "axios";
import "./category.css"; // Updated CSS file
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
    <div className="category-page">
      <h1 className="category-heading">Explore Categories</h1>
      <div className="category-grid">
        {dataarray.map((category, index) => (
          <div key={index} className="category-card">
            <Link to={`/products/${category}`} className="category-link">
              {category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
