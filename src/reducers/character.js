import produce from "immer";
// import immutable from 'object-path-immutable'
import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR
} from "../actions/characters";

function fetchCharacterRequest(state, action) {
  return {
    ...state,
    [action.id]: { ...state[action.id], isLoading: true }
  };
  // return produce(state, draft => {
  //    draft[action.id].isLoading = true
  // })
}

const fetchCharacterSuccess = (state, action) => {
  // return {
  //   ...state,
  //   [action.id]: {
  //     ...state[action.id],
  //     data: action.data,
  //     isLoading: false
  //   }
  // };
  return produce(state, draft => {
    draft[action.id].data = action.data
    draft[action.id].isLoading = false
  })
}

const fetchCharacterError = (state, action) => {
  // return { ...state, [action.id]: { err: action.err, isLoading: false } };
  return produce(state, draft => {
    draft[action.id].err = action.err
    draft[action.id].isLoading = false
  })
}

const character = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_REQUEST:
      return fetchCharacterRequest(state, action)
    case FETCH_CHARACTER_SUCCESS:
      return fetchCharacterSuccess(state, action)
    case FETCH_CHARACTER_ERROR:
      return fetchCharacterError(state, action)
    default:
      return state;
  }
};

export default character;
