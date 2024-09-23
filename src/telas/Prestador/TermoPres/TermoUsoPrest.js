import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function TermoUsoPrest({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Termos de Uso</Text>

      <View style={styles.containerProgresso}>
        <View style={styles.circulo}>
          <AntDesign name="check" size={20} color="#FFF" />
        </View>
        <View style={styles.linha} />
        <View style={styles.circulo}>
          <AntDesign name="check" size={20} color="#FFF" />
        </View>
        <View style={styles.linhaInativa} />
        <View style={styles.circuloAtivo}>
          <View style={styles.circuloInterno} />
        </View>
      </View>

      <View style={styles.fundo}>
        <Text style={styles.textoPrincipal}>
          Para continuar utilizando o aplicativo é necessário ler e aceitar nossos{' '}
          <Text style={styles.texto}>termos de uso</Text>.
        </Text>
      </View>

      <View style={styles.botoesContainer}>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('')}>
          <Text style={styles.botaoTexto}>Não Aceito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('')}>
          <Text style={styles.botaoTexto}>Aceito</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E40A2',
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 60,
    marginTop: 15,
  },
  fundo: {
    backgroundColor: '#F0EBE0',
    width: '88%',
    height: 500,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  containerProgresso: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: -35,
    justifyContent: 'space-between',
    width: '80%',
  },
  circulo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FE914E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circuloAtivo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FE914E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circuloInterno: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#FE914E',
  },
  linha: {
    width: 100,
    height: 2,
    backgroundColor: '#FE914E',
    marginHorizontal: 10,
  },
  linhaInativa: {
    width: 100,
    height: 2,
    backgroundColor: '#FE914E',
    marginHorizontal: 10,
  },
  botoesContainer: {
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    width: '85%',  
    marginTop: 20,
  },
  botao: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    width: '45%',  
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    fontSize: 18,
    color: '#282828',
    fontWeight: 'bold',
  },
  textoPrincipal: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
    textAlign: 'left',
  },
  texto: {
    fontSize: 16,
    color: '#4E40A2',
    fontWeight: 'bold',
  },
});
