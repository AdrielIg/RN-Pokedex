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
import { useNavigation } from "@react-navigation/native";

import { getColorByPokemonType } from "../utils/getColorByPokemonType";

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation();
  const pokemonColor = getColorByPokemonType(pokemon.type);

  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyle };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <View style={styles.bgPokemonWrapper}>
              <View style={styles.bgPokemon}></View>
            </View>
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
    borderWidth: 1,
  },
  bgPokemonWrapper: {
    position: "absolute",
    height: "99%",
    width: "99%",
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  bgPokemon: {
    position: "absolute",
    bottom: -30,
    right: -20,
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  img: {
    position: "absolute",
    bottom: -10,
    right: -5,
    width: 90,
    height: 90,
    zIndex: 500,
  },
});
