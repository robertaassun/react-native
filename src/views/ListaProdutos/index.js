import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Cabecalho from "./componentes/cabecalho";

const ListaProdutos = () => {
  return (
    <View>
      <Cabecalho />
      <View style={styles.container}>
      <View style={styles.containerImagem}>
        <Image
          source={require("../../../assets/img/ch.webp")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            Channel
        </Text>
        <Image
          source={require("../../../assets/img/chloe.webp")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            Chloé
        </Text>
        <Image
          source={require("../../../assets/img/goodGirl.webp")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            Good Girl
        </Text>
        <Image
          source={require("../../../assets/img/idole.gif")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            Idôle
        </Text>
        <Image
          source={require("../../../assets/img/joy.webp")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            Joy
        </Text>
        <Image
          source={require("../../../assets/img/laVie.webp")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            La vie est belle
        </Text>
        <Image
          source={require("../../../assets/img/miss.webp")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            Miss Dior
        </Text>
        <Image
          source={require("../../../assets/img/olympea.webp")}
          style={styles.imagem}
        />
        <Text style={styles.descricao}>
            Olympéa
        </Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffc8dd',
  },
  containerImagem: {
    flexDirection: "column",
    alignItems: "center",
  },
  imagem: {
    margin: 10,
    borderRadius: 10,
    height: 300,
    width: 300,
  },
  descricao:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ff5d8f',
  }
});

export default ListaProdutos;
