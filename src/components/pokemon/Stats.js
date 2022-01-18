import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { capitalize } from "lodash";

export default function Stats({ stats }) {
  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      {stats.map((item, index) => {
        return (
          <View key={index} style={styles.statWrapper}>
            <View style={styles.wrapperTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.number}>{item.base_stat}</Text>
              <View style={styles.bgBar}>
                <View
                  style={[styles.barContent, barStyles(item.base_stat)]}
                ></View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  statWrapper: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  wrapperTitle: {
    width: "40%",
  },
  statName: { fontSize: 12, fontWeight: "bold" },
  info: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    width: "75%",
    height: 5,
    borderRadius: 15,
    backgroundColor: "#dedede",
    overflow: "hidden",
  },
  barContent: {
    /* backgroundColor: "red",
    width: "100%", */
    height: 5,
    borderRadius: 15,
  },
});
