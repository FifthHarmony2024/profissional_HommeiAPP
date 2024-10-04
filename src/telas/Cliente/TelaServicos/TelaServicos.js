import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { SimpleLineIcons, Ionicons, Octicons } from '@expo/vector-icons';

import PedidosCliente from '../Pedidos/PedidosCliente';
import Pesquisa from '../Pesquisa/PesquisaClie';
import Notificacao from '../Notificacao/Notificacao';
import PerfilCliente from '../Perfil/PerfilCliente';

import nomepreto from '../../../../assets/nomepreto.png';
import moda_beleza from "../../../../assets/moda_beleza.png";
import serviços_domesticos from "../../../../assets/serviços_domesticos.png";
import assistencia_tec from "../../../../assets/assistencia_tec.png";
import { ScrollView } from 'react-native-gesture-handler';

export default function TelaServicos(navigation) {
function InicioScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); 
    // Lógica de pesquisa aqui
  };


  return (
    <ScrollView>
    <View style={styles.screen}>
      <View style={styles.nomeContainer}>
        <Image source={nomepreto} style={styles.nome} resizeMode="contain" />
      </View>
      
       <Text style={styles.welcomeText}>Olá, nome da pessoa</Text>

       <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#A3A3A3" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="O que você precisa?"
          placeholderTextColor="#A3A3A3"
          value={searchQuery}
          onChangeText={handleSearch}
        />
       </View>

       <Text style={styles.text}>Serviços</Text>

       <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Inicio")}>
       <Text style={styles.botão1}>Moda e Beleza</Text>
        <Image source={moda_beleza} style={styles.image} />
       </TouchableOpacity>
       <TouchableOpacity style={styles.botao0} onPress={() => navigation.navigate("Inicio")}>
        <Text style={styles.botão2}>Serviços Domésticos</Text>
        <Image source={serviços_domesticos} style={styles.imagem} />
       </TouchableOpacity>
       <TouchableOpacity style={styles.bot} onPress={() => navigation.navigate("Inicio")}>
        <Text style={styles.botão3}>Assistência Técnica</Text>
        <Image source={assistencia_tec} style={styles.imagem1} />
       </TouchableOpacity>


       </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

const animateIn = { 0: { scale: 0.7, translateY: 8 }, 1: { scale: 1.1, translateY: -8 } }; 
const animateOut = { 0: { scale: 1.1, translateY: -8 }, 1: { scale: 1, translateY: 8 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animateIn);
      iconRef.current.animate({ 0: { rotate: '0deg' }, 1: { rotate: '360deg' } });
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animateOut);
      iconRef.current.animate({ 0: { rotate: '360deg' }, 1: { rotate: '0deg' } });
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={500} style={styles.tabButton}>
        <Animatable.View ref={iconRef}>
          <item.iconType name={item.iconName} size={24} color={focused ? '#fff' : '#4E40A2'} />
        </Animatable.View>
        <Animatable.Text ref={textRef} style={[styles.label, focused ? styles.labelFocused : null]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};


  const tabs = [
    { name: 'Início', label: 'Início', iconType: Ionicons, iconName: 'home', component: InicioScreen },
    { name: 'Pesquisa', label: 'Pesquisa', iconType: Ionicons, iconName: 'search', component: Pesquisa },
    { name: 'Pedidos', label: 'Pedidos', iconType: SimpleLineIcons, iconName: 'handbag', component: PedidosCliente },
    { name: 'Notificação', label: 'Notificação', iconType: Ionicons, iconName: 'notifications', component: Notificacao },
    { name: 'Perfil', label: 'Perfil', iconType: Octicons, iconName: 'person', component: PerfilCliente },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
    backgroundColor: '#7B68EE',
    borderRadius: 15,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 11,
    color: '#000',
    marginTop: 5,
    fontWeight: '600',
    flexShrink: 1,
    textAlign: 'center',
  },
  labelFocused: {
    color: '#fff',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
    marginBottom: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  filterIcon: {
    marginLeft: 10,
  },
  nomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nome: {
    width: 120, 
    height: 120, 
    marginTop:-30,
    marginRight:235
  },
  text:{
    fontSize: 25,
    fontWeight: '600',
    marginTop: -15,
    marginLeft: -250
  },
  botao: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 10 },
    height: 150,
    width: 100,
    elevation: 3,
    marginBottom: -10,
    marginLeft:-250,
    borderRadius:20,
    marginTop: 20,
  },
  botão1:{
    margin:2,
    marginTop: 70,
    color:'#000',
    fontWeight: '250',
  },
  image:{
    margin:-90,
    marginTop: -2,
    width:80,
    height:60
  },
  botao0: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 10 },
    height: 150,
    width: 100,
    elevation: 3,
    marginBottom: -10,
    marginTop:-137,
    marginLeft:0,
    borderRadius:20,
  },
  botão2:{
    margin: 3.4,
    marginTop: 54,
    color:'#000',
    shadowColor: '#000',
    fontWeight: '250',
    fontSize: 14,
  },
  imagem:{
    margin:-75,
    marginTop: -5,
    width:80,
    height:60
  },
  bot:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 10 },
    height: 150,
    width: 100,
    elevation: 3,
    marginBottom: -10,
    marginTop:-139,
    marginLeft:250,
    borderRadius:20,
  },
  botão3:{
    margin: 3,
    marginTop: 54,
    color:'#000',
  },
  imagem1:{
    margin:-75,
    marginTop: -5,
    width:80,
    height:60
  },
});
