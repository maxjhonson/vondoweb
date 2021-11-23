import React from "react";

function TourList(props) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div className="me-3">
            <p className="mb-3 mb-md-0">
              <strong>12</strong> results found
            </p>
          </div>
          <div>
            <label className="form-label me-2" for="form_sort">
              Sort by
            </label>
            <select
              className="selectpicker"
              name="sort"
              id="form_sort"
              data-style="btn-selectpicker"
              title=""
            >
              <option value="sortBy_0">Most popular </option>
              <option value="sortBy_1">Recommended </option>
              <option value="sortBy_2">Newest </option>
              <option value="sortBy_3">Oldest </option>
              <option value="sortBy_4">Closest </option>
            </select>
          </div>
        </div>
        <div className="row">
          {/* <!-- place item--> */}
          <div
            className="col-sm-6 col-lg-4 mb-5 hover-animate"
            data-marker-id="59c0c8e33b1527bfe2abaf92"
          >
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden gradient-overlay">
                {" "}
                <img
                  className="img-fluid"
                  src="img/photo/photo-1484154218962-a197022b5858.jpg"
                  alt="Modern, Well-Appointed Room"
                />
                <a className="tile-link" href="detail-rooms.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <div className="d-flex text-white text-sm align-items-center">
                    <img
                      className="avatar avatar-border-white flex-shrink-0 me-2"
                      src="img/avatar/avatar-0.jpg"
                      alt="Pamela"
                    />
                    <div>Pamela</div>
                  </div>
                </div>
                <div className="card-img-overlay-top text-end">
                  <a
                    className="card-fav-icon position-relative z-index-40"
                    href="javascript: void();"
                  >
                    <svg className="svg-icon text-white">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-body d-flex align-items-center">
                <div className="w-100">
                  <h6 className="card-title">
                    <a
                      className="text-decoration-none text-dark"
                      href="detail-rooms.html"
                    >
                      Modern, Well-Appointed Room
                    </a>
                  </h6>
                  <div className="d-flex card-subtitle mb-3">
                    <p className="flex-grow-1 mb-0 text-muted text-sm">
                      Private room
                    </p>
                    <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                    </p>
                  </div>
                  <p className="card-text text-muted">
                    <span className="h4 text-primary">$80</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- place item--> */}
          <div
            className="col-sm-6 col-lg-4 mb-5 hover-animate"
            data-marker-id="59c0c8e322f3375db4d89128"
          >
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden gradient-overlay">
                {" "}
                <img
                  className="img-fluid"
                  src="img/photo/photo-1426122402199-be02db90eb90.jpg"
                  alt="Cute Quirky Garden apt, NYC adjacent"
                />
                <a className="tile-link" href="detail-rooms.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <div className="d-flex text-white text-sm align-items-center">
                    <img
                      className="avatar avatar-border-white flex-shrink-0 me-2"
                      src="img/avatar/avatar-7.jpg"
                      alt="John"
                    />
                    <div>John</div>
                  </div>
                </div>
                <div className="card-img-overlay-top text-end">
                  <a
                    className="card-fav-icon position-relative z-index-40"
                    href="javascript: void();"
                  >
                    <svg className="svg-icon text-white">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-body d-flex align-items-center">
                <div className="w-100">
                  <h6 className="card-title">
                    <a
                      className="text-decoration-none text-dark"
                      href="detail-rooms.html"
                    >
                      Cute Quirky Garden apt, NYC adjacent
                    </a>
                  </h6>
                  <div className="d-flex card-subtitle mb-3">
                    <p className="flex-grow-1 mb-0 text-muted text-sm">
                      Entire apartment
                    </p>
                    <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-gray-300"> </i>
                    </p>
                  </div>
                  <p className="card-text text-muted">
                    <span className="h4 text-primary">$121</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- place item--> */}
          <div
            className="col-sm-6 col-lg-4 mb-5 hover-animate"
            data-marker-id="59c0c8e3a31e62979bf147c9"
          >
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden gradient-overlay">
                {" "}
                <img
                  className="img-fluid"
                  src="img/photo/photo-1512917774080-9991f1c4c750.jpg"
                  alt="Modern Apt - Vibrant Neighborhood!"
                />
                <a className="tile-link" href="detail-rooms.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <div className="d-flex text-white text-sm align-items-center">
                    <img
                      className="avatar avatar-border-white flex-shrink-0 me-2"
                      src="img/avatar/avatar-8.jpg"
                      alt="Julie"
                    />
                    <div>Julie</div>
                  </div>
                </div>
                <div className="card-img-overlay-top text-end">
                  <a
                    className="card-fav-icon position-relative z-index-40"
                    href="javascript: void();"
                  >
                    <svg className="svg-icon text-white">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-body d-flex align-items-center">
                <div className="w-100">
                  <h6 className="card-title">
                    <a
                      className="text-decoration-none text-dark"
                      href="detail-rooms.html"
                    >
                      Modern Apt - Vibrant Neighborhood!
                    </a>
                  </h6>
                  <div className="d-flex card-subtitle mb-3">
                    <p className="flex-grow-1 mb-0 text-muted text-sm">
                      Entire apartment
                    </p>
                    <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-gray-300"> </i>
                      <i className="fa fa-star text-gray-300"> </i>
                    </p>
                  </div>
                  <p className="card-text text-muted">
                    <span className="h4 text-primary">$75</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- place item--> */}
          <div
            className="col-sm-6 col-lg-4 mb-5 hover-animate"
            data-marker-id="59c0c8e3503eb77d487e8082"
          >
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden gradient-overlay">
                {" "}
                <img
                  className="img-fluid"
                  src="img/photo/photo-1494526585095-c41746248156.jpg"
                  alt="Sunny Private Studio-Apartment"
                />
                <a className="tile-link" href="detail-rooms.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <div className="d-flex text-white text-sm align-items-center">
                    <img
                      className="avatar avatar-border-white flex-shrink-0 me-2"
                      src="img/avatar/avatar-9.jpg"
                      alt="Barbora"
                    />
                    <div>Barbora</div>
                  </div>
                </div>
                <div className="card-img-overlay-top text-end">
                  <a
                    className="card-fav-icon position-relative z-index-40"
                    href="javascript: void();"
                  >
                    <svg className="svg-icon text-white">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-body d-flex align-items-center">
                <div className="w-100">
                  <h6 className="card-title">
                    <a
                      className="text-decoration-none text-dark"
                      href="detail-rooms.html"
                    >
                      Sunny Private Studio-Apartment
                    </a>
                  </h6>
                  <div className="d-flex card-subtitle mb-3">
                    <p className="flex-grow-1 mb-0 text-muted text-sm">
                      Shared room
                    </p>
                    <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-gray-300"> </i>
                    </p>
                  </div>
                  <p className="card-text text-muted">
                    <span className="h4 text-primary">$93</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- place item--> */}
          <div
            className="col-sm-6 col-lg-4 mb-5 hover-animate"
            data-marker-id="59c0c8e39aa2eed0626e485d"
          >
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden gradient-overlay">
                {" "}
                <img
                  className="img-fluid"
                  src="img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                  alt="Mid-Century Modern Garden Paradise"
                />
                <a className="tile-link" href="detail-rooms.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <div className="d-flex text-white text-sm align-items-center">
                    <img
                      className="avatar avatar-border-white flex-shrink-0 me-2"
                      src="img/avatar/avatar-10.jpg"
                      alt="Jack"
                    />
                    <div>Jack</div>
                  </div>
                </div>
                <div className="card-img-overlay-top text-end">
                  <a
                    className="card-fav-icon position-relative z-index-40"
                    href="javascript: void();"
                  >
                    <svg className="svg-icon text-white">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-body d-flex align-items-center">
                <div className="w-100">
                  <h6 className="card-title">
                    <a
                      className="text-decoration-none text-dark"
                      href="detail-rooms.html"
                    >
                      Mid-Century Modern Garden Paradise
                    </a>
                  </h6>
                  <div className="d-flex card-subtitle mb-3">
                    <p className="flex-grow-1 mb-0 text-muted text-sm">
                      Entire house
                    </p>
                    <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                    </p>
                  </div>
                  <p className="card-text text-muted">
                    <span className="h4 text-primary">$115</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- place item--> */}
          <div
            className="col-sm-6 col-lg-4 mb-5 hover-animate"
            data-marker-id="59c0c8e39aa2edasd626e485d"
          >
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden gradient-overlay">
                {" "}
                <img
                  className="img-fluid"
                  src="img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                  alt="Brooklyn Life, Easy to Manhattan"
                />
                <a className="tile-link" href="detail-rooms.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <div className="d-flex text-white text-sm align-items-center">
                    <img
                      className="avatar avatar-border-white flex-shrink-0 me-2"
                      src="img/avatar/avatar-11.jpg"
                      alt="Stuart"
                    />
                    <div>Stuart</div>
                  </div>
                </div>
                <div className="card-img-overlay-top text-end">
                  <a
                    className="card-fav-icon position-relative z-index-40"
                    href="javascript: void();"
                  >
                    <svg className="svg-icon text-white">
                      <use xlinkHref="#heart-1"> </use>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-body d-flex align-items-center">
                <div className="w-100">
                  <h6 className="card-title">
                    <a
                      className="text-decoration-none text-dark"
                      href="detail-rooms.html"
                    >
                      Brooklyn Life, Easy to Manhattan
                    </a>
                  </h6>
                  <div className="d-flex card-subtitle mb-3">
                    <p className="flex-grow-1 mb-0 text-muted text-sm">
                      Private room
                    </p>
                    <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-gray-300"> </i>
                    </p>
                  </div>
                  <p className="card-text text-muted">
                    <span className="h4 text-primary">$123</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Pagination --> */}
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-template d-flex justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                {" "}
                <i className="fa fa-angle-left"></i>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                {" "}
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default TourList;
