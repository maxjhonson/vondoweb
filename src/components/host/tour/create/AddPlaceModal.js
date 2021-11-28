import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 18.4725357,
  lng: -69.8923817,
};
function AddPlaceModal(props) {
  const [autocomplete, setAutoComplete] = useState(null);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace().geometry.location.lat());
      console.log(autocomplete.getPlace().geometry.location.lng());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const onLoad = (autocomplete) => {
    console.log("autocomplete: ", autocomplete);
    setAutoComplete(autocomplete);
    //this.autocomplete = autocomplete
  };

  return (
    <div
      class="modal fade"
      id="addPlaceModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New message
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-3 row">
              <label className="form-label">Nombre del lugar</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <LoadScript
              googleMapsApiKey="AIzaSyAaouNDAnrqADf5mfH4Rmx_KH5_Dd1dDkI"
              libraries={["places"]}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker
                  position={{ lat: 18.4636456, lng: -69.91726280000002 }}
                ></Marker>
                <Marker
                  position={{ lat: 16.4636456, lng: -69.91726280000002 }}
                ></Marker>
                <Autocomplete
                  onLoad={onLoad}
                  onPlaceChanged={onPlaceChanged}
                  restrictions={{ country: ["do"] }}
                >
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre del lugar"
                    onChange={onPlaceChanged}
                    style={{
                      boxSizing: `border-box`,
                      border: `1px solid transparent`,
                      width: `90%`,
                      height: `32px`,
                      padding: `0 12px`,
                      borderRadius: `3px`,
                      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                      fontSize: `14px`,
                      outline: `none`,
                      textOverflow: `ellipses`,
                      position: "absolute",
                      left: "30%",
                      marginLeft: "-120px",
                    }}
                  />
                </Autocomplete>
              </GoogleMap>
            </LoadScript>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStyle = {
  width: "100%",
  height: "500px",
};

const mapContainerStyle = {
  position: "initial",
  width: "50%",
  height: "50%",
};

export default AddPlaceModal;
