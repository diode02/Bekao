import React, { useState, Component, useEffect } from "react";
import { Alert, Button, TextInput, View, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function LoginScreen(props) {
  const [email, setEmail] = useState("waqaskhanws12@gmail.com");
  const [password, setPassword] = useState("khankhan");
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    if (isLogin) {
      props.navigation.navigate("Home");
    }
  });

  const onLogin = async (event) => {
    // event.preventDefault();
    try {
      axios
        .post("http://localhost:5000/users/login", {
          email,
          password,
        })
        .then(
          async (response) => {
            await AsyncStorage.setItem("@storage_Key", response.data);
            setIsLogin(await AsyncStorage.getItem("@storage_Key"));
          },
          (error) => {
            console.log(error);
          }
        );
      //   await auth.login(email, password);
      //   const { state } = props.location;
      //   window.location = state ? state.from.pathname : "/";
    } catch (error) {
      console.log(error);
    }
  };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("@storage_Key");
  //     if (value !== null) {
  //       console.log(value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder={"email"}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button title={"Login"} style={styles.input} onPress={onLogin} />
      {/* <Button title={"Read"} style={styles.input} onPress={getData} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
