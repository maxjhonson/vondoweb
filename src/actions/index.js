import { FETCH_TOURS } from "./types";

export const fetchTour = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_TOURS,
      payload: [],
    });
  };
};
