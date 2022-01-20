import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonAPI } from "../api/pokemon";
import Favorite from "../components/pokemon/Favorite";
import Header from "../components/pokemon/Header";
import Stats from "../components/pokemon/Stats";
import Type from "../components/pokemon/Type";
import useAuth from "../hooks/useAuth";

export default function Pokemon({ route: { params }, navigation }) {
  const [pokemon, setPokemon] = useState(null);

  const { auth } = useAuth();

  console.log(auth);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : null),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

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
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        img={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
