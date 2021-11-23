import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTour } from "../../actions";
import Pagination from "./Pagination";
import TourItem from "./TourItem";

function TourList({ tours, fetchTour }) {
  console.log(tours);
  useEffect(() => {
    fetchTour();
  }, []);

  const renderTourItem = () => {
    return tours.allTours.map((tour) => {
      console.log("sss", tour);
      return <TourItem tour={tour} />;
    });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
          <div className="me-3">
            <p className="mb-3 mb-md-0">
              <strong>{tours.allTours.length ?? 0}</strong> Resultados
            </p>
          </div>
          <div>
            <label className="form-label me-2" for="form_sort">
              Ordenar por
            </label>
            <select
              className="selectpicker"
              name="sort"
              id="form_sort"
              data-style="btn-selectpicker"
              title=""
            >
              <option value="sortBy_0">Más Populares </option>
              <option value="sortBy_4">Sercanos </option>
            </select>
          </div>
        </div>
        {/* Tours */}
        <div className="row">{renderTourItem()}</div>
        {/* Pagination */}
        <Pagination />
      </div>
    </section>
  );
}

const mapStateToProp = (state) => {
  console.log(state);
  return { tours: state.tours };
};

export default connect(mapStateToProp, { fetchTour })(TourList);
