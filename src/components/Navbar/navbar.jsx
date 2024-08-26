import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"; // Import custom CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="container-fluid">
        <div className="navbar-brand mr-3">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="TyrePlex"
            style={{ height: "30px" }}
          />
        </div>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleDrawer}
          aria-controls="navbarDrawer"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-none d-lg-flex"
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="carTyresDropdown"
                role="button"
              >
                Car Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="carTyresDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="bikeTyresDropdown"
                role="button"
              >
                Bike Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="bikeTyresDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="tyrePressureDropdown"
                role="button"
              >
                Tyre Pressure
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="tyrePressureDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="commercialTyresDropdown"
                role="button"
              >
                Commercial Tyres
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="commercialTyresDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="accessoriesDropdown"
                role="button"
              >
                Accessories
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="accessoriesDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="moreDropdown" role="button">
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i> Login
              </a>
            </li>
          </ul>
        </div>

        {/* Drawer for smaller screens */}
        <div
          className={`navbar-drawer d-lg-none ${isOpen ? "open" : ""}`}
          id="navbarDrawer"
        >
          <div className="drawer-header">
            <button
              className="btn-close"
              aria-label="Close"
              onClick={closeDrawer}
            ></button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="carTyresDropdown"
                role="button"
              >
                Car Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="carTyresDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="bikeTyresDropdown"
                role="button"
              >
                Bike Tyres
              </a>
              <ul className="dropdown-menu" aria-labelledby="bikeTyresDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="tyrePressureDropdown"
                role="button"
              >
                Tyre Pressure
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="tyrePressureDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="commercialTyresDropdown"
                role="button"
              >
                Commercial Tyres
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="commercialTyresDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="accessoriesDropdown"
                role="button"
              >
                Accessories
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="accessoriesDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="moreDropdown" role="button">
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
