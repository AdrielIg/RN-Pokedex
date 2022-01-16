import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TextComponent,
} from "react-native";
import { capitalize } from "lodash";
import { getColorByPokemonType } from "../utils/getColorByPokemonType";

export default function PokemonCard({ pokemon }) {
  const pokemonColor = getColorByPokemonType(pokemon.type);
  console.log(pokemonColor);
  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyle };

  const goToPokemon = () => {};

  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.img }} style={styles.img} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  name: {
    color: "#fafafa",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  img: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
