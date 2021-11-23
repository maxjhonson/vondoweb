const { FETCH_TOURS } = require("../actions/types");

const defaultState = {
  loading: false,
  allTours: [],
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TOURS:
      return { ...state, loading: false, allTours: action.payload };
    default:
      return state;
  }
};
