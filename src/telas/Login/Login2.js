import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function login2({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Selecione o tipo de perfil:</Text>
        <TouchableOpacity style={styles.botaoTexto}>
          <Text style={styles.botaoTexto} onPress={() => navigation.navigate('EntrarLogin')}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoTexto1} onPress={() => navigation.navigate('EntrarPrestador')}>
          <Text style={styles.botaoTexto1} >Prestador de serviço</Text>
        </TouchableOpacity>
      </View>
  );
}const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E40A2',
  },
    titulo: {
    fontSize: 30,
    color: 'white',
    marginTop: 10, 
  },
    botaoTexto1: {
    position: 'absolute',
    backgroundColor: '#FE914E',
    borderRadius: 50,
    alignSelf: 'center',
    width: '60%',
    height: '6%',
    paddingVertical: 8,
    bottom: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
    botaoTexto: {
    position: 'absolute',
    backgroundColor: '#FE914E',
    borderRadius: 50,
    alignSelf: 'center',
    width: '60%',
    height: '6%',
    paddingVertical: 8,
    bottom: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
    botaoTexto: {
    fontSize: 25,
    color: '#F5F5F5',
  },
    botaoTexto1: {
    fontSize: 20,
    color: '#F5F5F5',
  },
    nome: {
    width: 270,
    height: 270,
    marginTop: -90,
  },
});
