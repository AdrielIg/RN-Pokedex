import React, { useState, useEffect, useCallback } from "react";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { getPokemonFavorite } from "../api/favorite";
import { getPokemonAPI } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import { now } from "lodash";

export default function Favorite({ id }) {
  const [favorites, setFavorites] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavorite();
          const pokemonsArray = [];

          for await (const id of response) {
            const pokemonDetails = await getPokemonAPI(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              img: pokemonDetails.sprites.other["official-artwork"]
                .front_default,
            });
          }
          setFavorites(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return auth ? (
    <PokemonList pokemons={favorites} />
  ) : (
    <Text>You need to log in</Text>
  );
}
