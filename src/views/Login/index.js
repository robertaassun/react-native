import { useNavigation } from "@react-navigation/native";
import React, { Fragment } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Login = ({}) => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={styles.container}>
          <Text style={styles.title}>
              Perfumarie
          </Text>
        <TextInput style={styles.input} placeholder="Digite seu email" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('ListaProdutos')}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc8dd',
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    height: 35,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#bdb2ff",
    height: 30,
    width: 100,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d405b',
  }
});

export default Login;
