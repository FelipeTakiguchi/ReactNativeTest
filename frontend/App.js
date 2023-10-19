import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import { usersContext } from './context/UserContext';
import { useState } from 'react';
import List from './components/List';

export default function App() {
  const [users, setUsers] = useState([{name: 'teste', age: '18', gender: 'masc', email: 'teste@gmail.com', password: 'dragao'},{name: 'teste', age: '18', gender: 'masc', email: 'teste@gmail.com', password: 'dragao'}]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notify, setNotify] = useState(false);
  const Stack = createStackNavigator();

  function validateData() {
    if (password === confirmPassword && password.length > 3) {
      console.log("password");
      if (name.length > 3 && name.length < 16) {
        console.log("name");
        if (age > 16 && age < 100) {
          console.log("name")
          if (validateEmail(email)) {
            console.log("email")
            return true;
          }
        }
      }
    }
    return false;
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function addUser() {
    if (validateData()) {
      var user = {
        name: name,
        age: age,
        gender: gender,
        email: email,
        password: password
      }

      setUsers([...users,user]);
      reset();

      return user;
    }
    return null;
  }

  const reset = () => 
  {
    setName("");
    setAge(0);
    setGender("");
    setEmail("");
    setPassword("");
    setNotify(false);
  }

  const verifyLogin = (email, password) => 
  {
    var res = false;
    
    users.map(user => {
      console.log(user);
      if(user.email === email && user.password === password){
        res = true;
      }
    })

    return res;
  }

  return (
    <NavigationContainer>
      <usersContext.Provider value={{
        users, setUsers,
        name, setName,
        age, setAge,
        gender, setGender,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        notify, setNotify,
        reset,
        addUser,
        validateData,
        verifyLogin
      }}>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#0A1128' }
        }}>
          <Stack.Screen name="cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="list" options={{ headerShown: false }} component={List} />
        </Stack.Navigator>
      </usersContext.Provider>
    </NavigationContainer>
  );
} 