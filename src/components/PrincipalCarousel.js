import React from "react";

function PrincipalCarousel(props) {
  return (
    <section className="hero-home">
      <div className="swiper-container hero-slider">
        <div className="swiper-wrapper dark-overlay">
          <div
            className="swiper-slide"
            style={{
              "background-image":
                "url(img/photo/photo-1501621965065-c6e1cf6b53e2.jpg)",
            }}
          ></div>
          <div
            className="swiper-slide"
            style={{
              "background-image":
                "url(img/photo/photo-1519974719765-e6559eac2575.jpg)",
            }}
          ></div>
          <div
            className="swiper-slide"
            style={{
              "background-image":
                "url(img/photo/photo-1490578474895-699cd4e2cf59.jpg)",
            }}
          ></div>
          <div
            className="swiper-slide"
            style={{
              "background-image":
                "url(img/photo/photo-1534850336045-c6c6d287f89e.jpg)",
            }}
          ></div>
        </div>
      </div>
      <div className="container py-6 py-md-7 text-white z-index-20">
        <div className="row">
          <div className="col-xl-10">
            <div className="text-center text-lg-start">
              <p className="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">
                The best holiday experience
              </p>
              <h1 className="display-3 fw-bold text-shadow">
                Stay like a local
              </h1>
            </div>
            <div className="search-bar mt-5 p-3 p-lg-1 ps-lg-4">
              <form action="#">
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center form-group">
                    <input
                      className="form-control border-0 shadow-0"
                      type="text"
                      name="search"
                      placeholder="What are you searching for?"
                    />
                  </div>
                  <div className="col-lg-3 d-flex align-items-center form-group">
                    <div className="input-label-absolute input-label-absolute-right w-100">
                      <label className="label-absolute" for="location">
                        <i className="fa fa-crosshairs"></i>
                        <span className="sr-only">City</span>
                      </label>
                      <input
                        className="form-control border-0 shadow-0"
                        type="text"
                        name="location"
                        placeholder="Location"
                        id="location"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center form-group no-divider">
                    <select
                      className="selectpicker"
                      title="Categories"
                      data-style="btn-form-control"
                    >
                      <option value="small">Restaurants</option>
                      <option value="medium">Hotels</option>
                      <option value="large">Cafes</option>
                      <option value="x-large">Garages</option>
                    </select>
                  </div>
                  <div className="col-lg-2 d-grid">
                    <button
                      className="btn btn-primary rounded-pill h-100"
                      type="submit"
                    >
                      Search{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalCarousel;
