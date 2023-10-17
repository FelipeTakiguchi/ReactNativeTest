import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: '#0A1128' }
        }}>
        <Stack.Screen name="cadastro" options={{headerShown: false}} component={Cadastro} />
        <Stack.Screen name="login" options={{headerShown: false}} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 