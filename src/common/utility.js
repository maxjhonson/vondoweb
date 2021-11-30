const getGeometyLocation = (geometry) => {
  let lat,
    lng = 0;
  if (typeof geometry?.location?.lat === "function") {
    lat = geometry.location.lat();
    lng = geometry.location.lng();
  } else if (typeof geometry?.location?.lat === "number") {
    lat = geometry.location.lat;
    lng = geometry.location.lng;
  }
  return { lat: lat, lng: lng };
};

export const getAddressFormatted = (place) => {
  console.log(place);
  if (!place) return;
  const locationLocation = getGeometyLocation(place.geometry);
  const addressFormatted = {
    ...locationLocation,
    geolocalization: place.formatted_address,
    place: place.name,
    street: "",
    number: "",
    city: "",
    state: "",
  };
  if (!Array.isArray(place.address_components)) return { ...addressFormatted };
  place.address_components.forEach((element) => {
    if (element.types.includes("route")) {
      addressFormatted.street = element.long_name;
    } else if (element.types.includes("street_number")) {
      addressFormatted.number = element.long_name;
    } else if (element.types.includes("locality")) {
      addressFormatted.city = element.long_name;
    } else if (element.types.includes("administrative_area_level_1")) {
      addressFormatted.state = element.long_name;
    }
  });
  return { ...addressFormatted };
};

//mutators

export const onPlaceChanged = (args, state, utils) => {};
