import { FILTER_CHARACTERS, GET_CHARACTERS } from "./actions";
import { filter } from "./services/filter";

const initialState = {
  characters: [],
  filterCharacters: [],
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS: {
      payload.map((character) => {
        let episodes = character.episode.map((ruta) => {
          const paragraph = ruta;
          const searchTerm = "/";
          const index = paragraph.lastIndexOf(searchTerm) + 1;
          const episode = paragraph.slice(index);
          return episode;
        });
        character.episode = episodes;
        return character;
      });
      return {
        ...state,
        characters: payload,
      };
    }
    case FILTER_CHARACTERS: {
      ///local
      return {
        ...state,
        filterCharacters: filter(state, payload),
        
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
