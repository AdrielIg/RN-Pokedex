import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavorite } from "../../api/favorite";

export default function Favorite({ id }) {
  const addFavorite = async () => {
    await addPokemonFavorite(id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={25}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
