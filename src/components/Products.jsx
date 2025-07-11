import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.css";

const Products = ({ items = [], cart = [], setCart = [] }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    if (!Array.isArray(cart)) {
      console.error("Cart is not an array!");
      return;
    }

    const obj = { id, price, title, description, imgSrc };
    setCart([...cart, obj]); // ✅ Now `cart` is always an array
    console.log("Cart Updated: ", [...cart, obj]);
    toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="container my-5">
        <div className="row">
          {items?.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 my-3 text-center"
            >
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3 wrap">
                    {product.price} PKR
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning wrap"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
