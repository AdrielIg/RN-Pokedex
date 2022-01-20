import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonFavorite } from "../api/favorite";

export default function Favorite() {
  const [favorites, setFavorites] = useState(null);

  return (
    <SafeAreaView>
      <Text>Favorite Screen</Text>
    </SafeAreaView>
  );
}
