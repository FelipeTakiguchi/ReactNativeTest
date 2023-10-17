import { Button, View } from "react-native-web";
import { StatusBar } from "expo-status-bar";

export default function Login(props) {
    return (        
        <View>
            <StatusBar></StatusBar>
            <Button
                onPress={() => props.navigation.navigate("cadastro")}
                title="Login"
            >
            </Button>
        </View>
    )
}