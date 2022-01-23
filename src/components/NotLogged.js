import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NotLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>To see this screen you have to Log In</Text>
      <Button title="Log In" onPress={() => navigation.navigate("Account")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
