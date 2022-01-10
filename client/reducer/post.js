import { CAFE_LIST, CAFE_LIST_HASH, CAFE_LIST_COUNT } from "./type";
//리덕스 부분은 사실 가물가물한데 다시 천천히 짚어보면 할 수 있을 것 같음
export const initalState = {
  location: "LA",
  listHash: {},
  listCount: 5,
};

export const postLocationAction = (data) => {
  return {
    type: CAFE_LIST,
    data,
  };
};

export const postCountAction = () => {
  return {
    type: CAFE_LIST_COUNT,
  };
};

export const postListHashAction = (data, id) => {
  return {
    type: CAFE_LIST_HASH,
    data, //[name, counts]
    id, //postId
  };
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case CAFE_LIST:
      return {
        ...state,
        location: action.data,
      };
    case CAFE_LIST_COUNT:
      return {
        ...state,
        listCount: state.listCount + 5,
      };
    case CAFE_LIST_HASH:
      state.listHash[action.id] = action.data;
      return {
        ...state,
        listHash: { ...state },
      };
    default:
      return state;
  }
};

export default postReducer;
