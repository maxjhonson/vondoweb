import { FETCH_TOURS } from "./types";

const fakeTours = [
  {
    lowerPrice: 250,
    title: "1 Tour por las playas de Samana",

    currency: "DOP",
    host: { name: "Tours Rd", picture: "" },
  },
  {
    title: "Tour por las playas de Samana",
    lowerPrice: 250,
    currency: "DOP",
    host: { name: "Tours Rd", picture: "" },
  },
  {
    title: "Tour por las playas de Samana",
    lowerPrice: 250,
    currency: "DOP",
    host: { name: "Tours Rd", picture: "" },
  },
];

export const fetchTour = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_TOURS,
      payload: fakeTours,
    });
  };
};
