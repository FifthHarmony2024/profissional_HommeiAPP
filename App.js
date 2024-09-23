import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/telas/Home';
import Login from './src/telas/Prestador/Login/Login';
import Cadastro from './src/telas/Prestador/Cadastro/Cadastro';
import Confirmação from './src/telas/Prestador/Confirmação/Confirmação';
import TipoPerfil from './src/telas/TipoPerfil/Perfil';
import LoginCliente from './src/telas/Cliente/Login/LoginCliente'
import CadastroClie from './src/telas/Cliente/Cadastro/CadastroClie';
import ConfirmacaoCli from './src/telas/Cliente/ConfirmacaoCliente/ConfirmacaoCli';
import ConfirmacaoTel from './src/telas/Prestador/Confirmação/ConfirmacaoTel';
import ConfirmacaoClieTel from './src/telas/Cliente/ConfirmacaoCliente/ConfirmacaoClieTel';
import TermoUsoPrest from './src/telas/Prestador/TermoPres/TermoUsoPrest';
import TermoUsoCliente from './src/telas/Cliente/TermoClie/TermoUsoCliente';
import TelaPrestadorPerfil from './src/telas/Prestador/TelaPerfilPrestador/TelaPrestadorPerfil';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor='#F5F5F5' barStyle="dark-content"></StatusBar>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Perfil" component={TipoPerfil} options={{headerShown: false}}/>
          <Stack.Screen name="EntrarLoginPrestador" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="CadPrestador" component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name="ConfirPrestador" component={Confirmação} options={{headerShown: false}}/>
          <Stack.Screen name="EntrarLoginCliente" component={LoginCliente} options={{headerShown: false}}/>
          <Stack.Screen name="CadCliente" component={CadastroClie} options={{headerShown:false}}/>
          <Stack.Screen name="ConfiClie" component={ConfirmacaoCli} options={{headerShown:false}}/>
          <Stack.Screen name="ConfirPresTel" component={ConfirmacaoTel} options={{headerShown:false}}/>
          <Stack.Screen name="ConfirClieTel" component={ConfirmacaoClieTel} options={{headerShown:false}}/>
          <Stack.Screen name="TermoPrestador" component={TermoUsoPrest} options={{headerShown:false}}/>
          <Stack.Screen name="TermoCliente" component={TermoUsoCliente} options={{headerShown:false}}/>
          <Stack.Screen name="TelaPerfil" component={TelaPrestadorPerfil} options={{headerShown:false}}/>


        </Stack.Navigator>
      </NavigationContainer>  
  );
}

