export const getAdreessObj = (addressComponents) => {
  console.log("cd", addressComponents);
  const dirrectionObj = {
    street: null,
    streetNumber: null,
    locality: null,
    administrativeArea: null,
  };
  if (!addressComponents || !Array.isArray(addressComponents))
    return { ...dirrectionObj };

  addressComponents.forEach((element) => {
    if (element.types.includes("route")) {
      dirrectionObj.street = element.long_name;
    } else if (element.types.includes("street_number")) {
      dirrectionObj.streetNumber = element.long_name;
    } else if (element.types.includes("locality")) {
      dirrectionObj.locality = element.long_name;
    } else if (element.types.includes("administrative_area_level_1")) {
      dirrectionObj.administrativeArea = element.long_name;
    }
  });
  return { ...dirrectionObj };
};

//mutators

export const onPlaceChanged = (args, state, utils) => {};
