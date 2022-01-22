import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export const addPokemonFavorite = async (id) => {
  try {
    const favorites = await getPokemonFavorite();
    /* const favorites = []; */
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export const getPokemonFavorite = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
};

export const isPokemonSaved = async (id) => {
  try {
    const response = await getPokemonFavorite();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
};
