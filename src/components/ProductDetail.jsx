import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const selectedProduct = items.find((product) => product.id == id);
    setProduct(selectedProduct);

    if (selectedProduct) {
      const filteredProducts = items.filter(
        (p) =>
          p.category === selectedProduct.category && p.id !== selectedProduct.id
      );
      setRelatedProducts(filteredProducts);
    }
  }, [id]);

  return (
    <div className="container text-center my-5">
      {product ? (
        <div className="img">
          <img
            src={product.imgSrc}
            alt={product.title}
            className="img-fluid mb-3"
          />

          <div className="details">
            <h2 className="mb-3">{product.title}</h2>

            <p className="mb-3">{product.description}</p>
            <div className="details-btn">
              <button className="btn btn-primary mb-2">
                {product.price} PKR
              </button>
              <button className="btn btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <h3>Product Not Found</h3>
      )}

      {/* Related Products Section */}
      <h3 className="mt-5">Related Products</h3>
      <div className="row">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.imgSrc}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary">{item.price} PKR</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Related Products Found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
