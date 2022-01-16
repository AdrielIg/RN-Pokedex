import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import { getPokemonsAPI, getPokemonDetailsAPI } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsAPI();
      console.log(response);

      const pokemonsArry = [];

      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsAPI(pokemon.url);
        pokemonsArry.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[1].name,
          order: pokemonDetail.order,
          img: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArry]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex Screem</Text>
    </SafeAreaView>
  );
}
