import { TextInput, View, Text, Button, Image } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { styles } from "./Styles";
import { useState } from "react";

export default function Cadastro() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.center}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png' }} style={{ width: 100, height: 100 }} />
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Nome: </Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.space}>
                <View style={{ width: '20vw' }}>
                    <Text style={styles.font}>Idade: </Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={{ width: '24vmax' }}>
                    <Text style={styles.font}>Sexo: </Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Email: </Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Senha: </Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={{ width: '45%' }}>
                <Text style={styles.font}>Confirma Senha: </Text>
                <TextInput style={styles.textInput}></TextInput>
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
            <Button
                onPress={() => props.navigation.navigate("Login")}
                title="Cadastrar"
            >
            </Button>
        </View>
    )
}