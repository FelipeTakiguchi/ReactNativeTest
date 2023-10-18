import { useContext } from "react";
import { Text, View, Button } from "react-native";
import { usersContext } from "../context/UserContext";
import { styles } from './Styles';

export default function List(props) {
    const { users } = useContext(usersContext);

    function cancel() {
        props.navigation.navigate('cadastro');
    }

    return (
        <View style={styles.center}>
            <Text style={styles.title}>All Users</Text>
            {
                Array.from(users).map((user, index) => {
                    return (
                        <View key={index} style={styles.space}>
                            <Text style={styles.font}>{user.name}</Text>
                            <Text style={styles.font}>{user.age}</Text>
                            <Text style={styles.font}>{user.gender}</Text>
                            <Text style={styles.font}>{user.email}</Text>
                        </View>
                    );
                })
            }
            <Button
                onPress={() => cancel()}
                title="Cadastrar"
            >
            </Button>
        </View>
    )
}