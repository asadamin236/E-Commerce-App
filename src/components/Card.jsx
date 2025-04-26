import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cart, setCart }) => {
  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to="/" className="btn btn-warning mt-3">
            Continue Shopping...
          </Link>
        </div>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="card mb-4 shadow-sm">
            <div className="row g-0">
              <div className="col-md-4 col-sm-12">
                <img
                  src={product.imgSrc}
                  className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                  alt={product.title}
                />
              </div>
              <div className="col-md-8 col-sm-12 d-flex align-items-center">
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                    <button className="btn btn-primary">
                      {product.price} PKR
                    </button>
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {cart.length !== 0 && (
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <button className="btn btn-success">CheckOut</button>
          <button onClick={() => setCart([])} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;