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
    <div className="container my-5">
      {product ? (
        <div className="row mb-5 align-items-center">
          {/* Image column */}
          <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          {/* Details column */}
          <div className="col-12 col-lg-6 text-center">
            <h2 className="mb-3">{product.title}</h2>
            <p className="mb-3">{product.description}</p>
            <div className="d-flex gap-3 flex-wrap justify-content-center">
              <button className="btn btn-primary">{product.price} PKR</button>
              <button className="btn btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-center">Product Not Found</h3>
      )}

      {/* Related Products Section */}
      <h3 className="text-center mb-4">Related Products</h3>
      <div className="row g-4">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.imgSrc}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary w-100">
                      {item.price} PKR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Related Products Found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
