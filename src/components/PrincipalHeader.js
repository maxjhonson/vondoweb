import React from "react";

function PrincipalHeader(props) {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand py-1" href="index.html">
              <img src="img/logo.svg" alt="Vondo logo" />
            </a>
            <form
              className="form-inline d-none d-sm-flex"
              action="#"
              id="search"
            >
              {/* <div className="input-label-absolute input-label-absolute-left input-expand ms-lg-2 ms-xl-3">
                <label className="label-absolute" for="search_search">
                  <i className="fa fa-search"></i>
                  <span className="sr-only">What are you looking for?</span>
                </label>
                <input
                  className="form-control form-control-sm border-0 shadow-0 bg-gray-200"
                  id="search_search"
                  placeholder="Search"
                  aria-label="Search"
                  type="search"
                />
              </div> */}
            </form>
          </div>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>
          {/* <!-- Navbar Collapse --> */}
          <div class="collapse navbar-collapse" id="navbarCollapse"></div>
        </div>
      </nav>
    </header>
  );
}

export default PrincipalHeader;
