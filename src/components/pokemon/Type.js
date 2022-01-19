import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { capitalize } from "lodash";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

export default function Type({ types }) {
  return (
    <View style={styles.container}>
      {types.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              ...styles.pill,
              backgroundColor: getColorByPokemonType(item.type.name),
            }}
          >
            <Text>{capitalize(item.type.name)}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
