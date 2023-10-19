import { Button, View, Text, TextInput, Touchable } from "react-native";
import { styles } from "./Styles";
import { useContext, useState } from "react";
import { usersContext } from '../context/UserContext';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login(props) {
    const { verifyLogin, reset } = useContext(usersContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function NavigateMain() {
        var res = verifyLogin(email, password);
        if (res) props.navigation.navigate('list');
    }

    function cancel() {
        props.navigation.navigate('cadastro');
    }

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Login</Text>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Email: </Text>
                <TextInput style={styles.textInput} value={email} onChangeText={setEmail}></TextInput>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Senha: </Text>
                <TextInput style={styles.textInput} secureTextEntry={true} value={password} onChangeText={setPassword}></TextInput>
            </View>
            <View style={styles.space}>
                <Button
                    color={"red"}
                    onPress={() => cancel()}
                    title="Cancelar"
                >
                </Button>
                <Button
                    onPress={() => NavigateMain()}
                    title="Login"
                >
                </Button>
            </View>
        </View>
    )
}