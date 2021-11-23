import React from "react";

function Pagination(props) {
  return (
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
  );
}

export default Pagination;
