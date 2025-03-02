import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  // Fix: setData should be destructured from props

  const filterByCategory = (category) => {
    const filteredItems = items.filter(
      (product) => product.category === category
    );
    setData(filteredItems); // Fix: correctly updating the state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>
          <Link to={"/Card"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter By {"->"}</div>
            <div onClick={() => setData(items)} className="items">
              No Filter
            </div>
            <div onClick={() => filterByCategory("mobiles")} className="items">
              Mobiles
            </div>
            <div onClick={() => filterByCategory("laptops")} className="items">
              Laptops
            </div>
            <div onClick={() => filterByCategory("tablets")} className="items">
              Tablets
            </div>
            <div
              onClick={() =>
                setData(items.filter((product) => product.price >= 29999))
              }
              className="items"
            >
              {">="}29999
            </div>
            <div
              onClick={() =>
                setData(items.filter((product) => product.price >= 49999))
              }
              className="items"
            >
              {">="}49999
            </div>
            <div
              onClick={() =>
                setData(items.filter((product) => product.price >= 69999))
              }
              className="items"
            >
              {">="}69999
            </div>
            <div
              onClick={() =>
                setData(items.filter((product) => product.price >= 89999))
              }
              className="items"
            >
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
