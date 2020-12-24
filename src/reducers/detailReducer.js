const initState = {
  game: {},
  screenshot: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
