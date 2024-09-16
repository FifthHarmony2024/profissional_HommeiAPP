import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/telas/Home';
import login2 from './src/telas/Login/Login2';
import Login from './src/telas/Login/Login';
import Cadastro from './src/telas/Cadastro/Cadastro';
import Confirmação from './src/telas/Confirmação/Confirmação';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor='#F5F5F5' barStyle="dark-content"></StatusBar>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="EntrarLogin2" component={login2} options={{headerShown: false}}/>
          <Stack.Screen name="EntrarLogin" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Cad" component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name="Conf" component={Confirmação} options={{headerShown: false}}/>
          

        </Stack.Navigator>
      </NavigationContainer>  
  );
}

