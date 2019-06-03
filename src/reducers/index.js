const initialState = {
  city: "",
  cinema: "",
  user: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      if (!action.payload.query) {
        return state;
      }
      return {
        ...state,
        user: action.payload.query
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: false
      };
    }
    case "SELECT_CITY": {
      return {
        ...state,
        city: action.payload.query
      };
    }
    case "SELECT_CINEMA": {
      return {
        ...state,
        cinema: action.payload.query
      };
    }
    default:
      return state;
  }
};

export default user;
