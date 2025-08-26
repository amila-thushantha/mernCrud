import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm w-100 sticky-top">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/">MyBlog</Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Create Post</Link>
              </li>

              {/* Dropdown menu */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/category/tech">Tech</Link></li>
                  <li><Link className="dropdown-item" to="/category/lifestyle">Lifestyle</Link></li>
                  <li><Link className="dropdown-item" to="/category/other">Other</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <span className="nav-link disabled">Disabled</span>
              </li>
            </ul>

            {/* Search form */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search posts..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
