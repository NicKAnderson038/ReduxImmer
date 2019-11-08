import produce from "immer";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from "../actions/characters";

const fetchCharactersRequest = (state, action) => {
  return produce(state, draft => {
    draft.isLoading = true
  })
}

const fetchCharactersSuccess = (state, action) => {
  return produce(state, draft => {
    draft.data = action.data
    draft.isLoading = false
  })
}

const fetchCharactersError = (state, action) => {
  return produce(state, draft => {
    draft.data = action.err
    draft.isLoading = false
  })
}

const characters = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return fetchCharactersRequest(state, action)
    case FETCH_CHARACTERS_SUCCESS:
      return fetchCharactersSuccess(state, action)
    case FETCH_CHARACTERS_ERROR:
      return fetchCharactersError(state, action)
    default:
      return state;
  }
};

export default characters;
