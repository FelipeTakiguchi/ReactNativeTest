import { Button, View, Text, TextInput } from "react-native";
import { styles } from "./Styles";

export default function Login(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Login</Text>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Email: </Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Senha: </Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <Button
                onPress={() => props.navigation.navigate("cadastro")}
                title="Login"
            >
            </Button>
        </View>
    )
}