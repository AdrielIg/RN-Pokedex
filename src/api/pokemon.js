import { API_HOST } from "../utils/constants";

export const getPokemonsAPI = async (endpoint) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpoint || url);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
};

export const getPokemonDetailsAPI = async (url) => {
  try {
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
