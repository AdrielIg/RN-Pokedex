import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      setError("");
      const { username, password } = formValues;
      if (username !== user.username || password !== user.password) {
        setError("Incorrect Credential");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};
const validationSchema = () => {
  return {
    username: Yup.string().required("You need to enter a username"),
    password: Yup.string().required("You need to enter a password"),
  };
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
