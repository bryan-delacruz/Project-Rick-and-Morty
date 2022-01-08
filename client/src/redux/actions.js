import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const FILTER_CHARACTERS = "FILTER_CHARACTERS";

export const getCharacters = () => async (dispatch) => {
  let { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return dispatch({ type: GET_CHARACTERS, payload: data.results });
};
export const filterCharacters = (name) => {
  return { type: FILTER_CHARACTERS, payload: name };
};
