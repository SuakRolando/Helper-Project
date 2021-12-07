import React from "react";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="nav container-fluid">
            <ul className="navbar-nav">
            <li className="nav-item dropdown ms-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Types
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Wooden Chair
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tulip Chair
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rocking Chair
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item position-absolute top-0 start-50 translate-middle mt-4">
                <a className="nav-item active text-secondary" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-item mx-4 text-secondary" href="#">
                  Features
                </a>
                <a className="nav-item text-secondary" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown position-absolute top-0 end-0 me-2 mt-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Price
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Murah
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pass
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mahal
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
          
        </div>
      </nav>
  );
};

export default Navbar;
