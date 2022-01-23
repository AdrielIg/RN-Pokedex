import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { flatten } from "lodash";

export default function NotLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>To see this screen you have to Log In</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Account")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    display: "flex",
    alignItems: "center",
  },
  text: {
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "#fc1c",
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 15,
    width: 80,
    padding: 9,
    backgroundColor: "#4B90EB",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
  },
});
