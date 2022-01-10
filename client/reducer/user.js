import { LOG_IN, LOG_OUT, USER_DATA } from "./type";
//리덕스 부분은 사실 가물가물한데 다시 천천히 짚어보면 할 수 있을 것 같음
export const initalState = {
  isLoggedIn: false,
  me: null,
};

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};

export const userLocationAction = (lat, long) => {
  return {
    type: USER_DATA,
    lat,
    long,
  };
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    case USER_DATA:
      return {
        ...state,
        me: { lat: action.lat, long: action.long },
      };
    default:
      return state;
  }
};

export default userReducer;
