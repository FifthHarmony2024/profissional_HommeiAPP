import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/telas/Home';
import Login from './src/telas/Prestador/Login/Login';
import Cadastro from './src/telas/Prestador/Cadastro/Cadastro';
import Confirmação from './src/telas/Prestador/Confirmação/Confirmação';
import TipoPerfil from './src/telas/TipoPerfil/Perfil';

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
          

        </Stack.Navigator>
      </NavigationContainer>  
  );
}

