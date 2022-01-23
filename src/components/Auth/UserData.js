import React, { useCallback, useState } from "react";
import { StyleSheet, Button, View, Text, Pressable } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import { getPokemonFavorite } from "../../api/favorite";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavorite();
          setTotal(size(response));
        } catch (error) {
          console.log(error);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>
          Bienvenid@, {auth.firstName} {auth.lastName}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favorites" text={`${total} Pokemons`} />
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const ItemMenu = ({ title, text }) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 140,
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
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
