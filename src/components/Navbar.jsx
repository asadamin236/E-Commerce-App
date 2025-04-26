import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaCartArrowDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterByCategory = (category) => {
    const filteredItems = items.filter(
      (product) => product.category === category
    );
    setData(filteredItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <header className="sticky-top">
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link to="/" className="navbar-brand">
          E-Cart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto w-100 justify-content-end align-items-lg-center">
            <li className="nav-item w-100 w-lg-auto">
              <form onSubmit={handleSubmit} className="d-flex mt-3 mt-lg-0">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search Products"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </li>
            <li className="nav-item">
              <Link
                to="/Card"
                className="btn btn-primary position-relative ms-lg-3 mt-2 mt-lg-0"
              >
                <FaCartArrowDown />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Filter Navbar - Only on Home Page */}
      {location.pathname === "/" && (
        <nav className="bg-light border-top px-3 py-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Filter By →</div>
            <button
              className="btn btn-outline-secondary d-lg-none"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          <div
            className={`mt-3 ${
              isFilterOpen ? "d-block" : "d-none d-lg-flex"
            } flex-wrap gap-2`}
          >
            <button
              onClick={() => setData(items)}
              className="btn btn-sm btn-outline-dark"
            >
              No Filter
            </button>
            <button
              onClick={() => filterByCategory("mobiles")}
              className="btn btn-sm btn-outline-dark"
            >
              Mobiles
            </button>
            <button
              onClick={() => filterByCategory("laptops")}
              className="btn btn-sm btn-outline-dark"
            >
              Laptops
            </button>
            <button
              onClick={() => filterByCategory("tablets")}
              className="btn btn-sm btn-outline-dark"
            >
              Tablets
            </button>
            {[29999, 49999, 69999, 89999].map((price) => (
              <button
                key={price}
                onClick={() => setData(items.filter((p) => p.price >= price))}
                className="btn btn-sm btn-outline-dark"
              >
                ≥ {price}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
