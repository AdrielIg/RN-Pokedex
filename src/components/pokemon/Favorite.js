import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavorite, isPokemonSaved } from "../../api/favorite";

export default function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  console.log(isFavorite);
  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonSaved(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFav = () => {
    setReloadCheck((state) => !state);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavorite(id);
      onReloadCheckFav();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = () => {
    console.log("Delte fav");
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={25}
      solid={isFavorite}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
