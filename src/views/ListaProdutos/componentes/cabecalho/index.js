import React, { Fragment } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Cabecalho = () => {
    return (
        <Fragment>
          <View style={styles.container}>

          </View>
        <View style={styles.containerTitle}>
        <Text style={styles.title}>Perfumarie</Text>
        <View style={styles.containerSacola} >
        <Image source={require('../../../../../assets/img/sacola.png')} style={styles.imagem} />
        </View>
      </View>
      <View style={styles.containerDescricao} >
        <View style={styles.separador} />
        <View  style={styles.containerText} >
          <Text style={styles.textDescricao}>
            Categorias
          </Text>
        </View>
      </View>
      </Fragment>
    );
};

const styles = StyleSheet.create({
    
    containerTitle: {
      backgroundColor: '#ffc8dd',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 30,
    },
    title: {
      backgroundColor: '#ffc8dd',
      fontSize: 20,
      fontWeight: 'bold',
    },
    containerSacola: {
      backgroundColor: '#fff',
      padding: 18,
      borderRadius: 50,
      marginBottom: 10,
    },
    imagem:{
      height: 30,
      width: 30,
    },
    containerDescricao:{
      paddingHorizontal: 24,
    },
    separador:{
      borderWidth: 0.5,
      borderColor: '#A1A5AA'
    },
    containerText: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: -46,
    },
    textDescricao: {
      padding: 34,
      backgroundColor: '#ffc8dd',
      fontSize:14,
      color: '#A1A5AA'
    }
  });

  export default Cabecalho;
