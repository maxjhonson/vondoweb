import React from "react";

/**
 *
 * @param {title} props
 * @param {lowerPrice} props
 * @returns
 */

function TourItem({ tour }) {
  const { _id, title, lowerPrice, host, currency, image } = tour;
  return (
    <div
      className="col-sm-6 col-lg-4 mb-5 hover-animate"
      data-marker-id="59c0c8e33b1527bfe2abaf92"
    >
      <div className="card h-100 border-0 shadow">
        <div className="card-img-top overflow-hidden gradient-overlay">
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
              <div>{host?.name}</div>
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
                {title}
              </a>
            </h6>
            <div className="d-flex card-subtitle mb-3">
              <p className="flex-grow-1 mb-0 text-muted text-sm">
                <b>Fecha:</b> 20/05/2019
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
              Desde {currency}{" "}
              <span className="h4 text-primary">$ {lowerPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourItem;
