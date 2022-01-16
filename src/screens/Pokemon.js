import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonAPI } from "../api/pokemon";

export default function Pokemon({ route: { params }, navigation }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonAPI(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
}
