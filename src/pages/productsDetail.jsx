import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productsDetail.css";

function ProductDetails() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchProductsDetails = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setDetails(response.data);
    };

    fetchProductsDetails();
  }, []);
  return (
    <>
      {Object.keys(details).length !== 0 ? (
        <>
          <div className="product-details-container">
            <img
              className="product-details-image"
              src={details.image}
              alt={details.title}
            />
            <div className="product-details-info">
              <h2>{details.title}</h2>
              <p>{details.category}</p>
              <p className="price">${details.price}</p>
              <p>{details.description}</p>
              <p>{details.rating.rate}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </>
  );
}

export default ProductDetails;
