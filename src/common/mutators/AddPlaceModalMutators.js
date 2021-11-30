// export const onPlaceChangedMutator = (args, state, utils) => {
//   const placeComponent = autocomplete.getPlace();
//   if (!placeComponent) return;
//   const addressComponets = placeComponent.address_components;
//   const address = getAdreessObj(addressComponets);
//   const lat = placeComponent.geometry.location.lat();
//   const lng = placeComponent.geometry.location.lng();
//   setCenter({ lat, lng });
//   utils.changeValue(
//     state,
//     "geolocalization",
//     () => placeComponent.formatted_address
//   );

//   utils.changeValue(state, "lat", () => lat);
//   utils.changeValue(state, "lng", () => lng);
//   utils.changeValue(state, "place", () => autocomplete.getPlace()?.name);
//   utils.changeValue(state, "street", () => address.street);
//   utils.changeValue(state, "number", () => address.streetNumber);
//   utils.changeValue(state, "city", () => address.locality);
//   utils.changeValue(state, "state", () => address.administrativeArea);
// };

// export const onMapDobleClickMutator = async (args, state, utils) => {
//   const lat = args[0].latLng.lat();
//   const lng = args[0].latLng.lng();
//   utils.changeValue(state, "lat", () => lat);
//   utils.changeValue(state, "lng", () => lng);
//   const response = await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLEMAPS_API}`
//   );
//   console.log(response.json());
// };
