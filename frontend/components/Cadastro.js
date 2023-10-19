import { TouchableOpacity, TextInput, View, Text, Button, Image } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { styles } from "./Styles";
import { useContext, useState } from "react";
import { usersContext } from "../context/UserContext";
import api from "../api";

export default function Cadastro(props) {
    const { name, setName, age, setAge, gender, setGender, email, setEmail, password, setPassword,
        confirmPassword, setConfirmPassword, notify, setNotify, addUser, reset } = useContext(usersContext);

    async function testeApi(){
        try{
            const response = await api.get("/");
            alert(response.data);
            return "funfou";
        } catch(error){
            return error;
        }
    }

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setNotify(isEnabled);
    };

    const [inputValue, setInputValue] = useState('');

    function RegisterUser() {
        var res = addUser();
        if (res != null)
            props.navigation.navigate("login");
    }

    function cancel() {
        reset();
        props.navigation.navigate('login');
    }

    return (
        <View style={styles.center}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' }} style={{ width: 100, height: 100 }} />
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Nome: </Text>
                <TextInput style={styles.textInput} value={name} onChangeText={setName}></TextInput>
            </View>
            <View style={styles.space}>
                <View>
                    <Text style={styles.font}>Idade: </Text>
                    <TextInput keyboardType="phone-pad" style={styles.wrapInput} value={age} onChangeText={setAge}></TextInput>
                </View>
                <View>
                    <Text style={styles.font}>Sexo: </Text>
                    <TextInput value={gender} style={styles.wrapInput} onChangeText={setGender}></TextInput>
                </View>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Email: </Text>
                <TextInput style={styles.textInput} value={email} onChangeText={setEmail}></TextInput>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Senha: </Text>
                <TextInput style={styles.textInput} secureTextEntry={true} value={password} onChangeText={setPassword}></TextInput>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Confirma Senha: </Text>
                <TextInput style={styles.textInput} secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword}></TextInput>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Deseja receber notificações?</Text>
                <View style={styles.align}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    ></Switch>
                    <Text style={styles.font}>{isEnabled ? 'Sim' : 'Não'}</Text>
                </View>
            </View>
            <View style={styles.space}>
                <Button
                    color={"red"}
                    onPress={() => cancel()}
                    title="Cancelar"
                >
                </Button>
                <Button
                    onPress={() => RegisterUser()}
                    title="Cadastrar"
                ></Button>
            </View>

            <TouchableOpacity style={{ backgroundColor: "#212343", padding: 8, borderRadius: 7 }} onPress={() => props.navigation.navigate('list')}><Text style={{ fontSize: 22 }}>Listagem</Text></TouchableOpacity>
        </View >
    )
}