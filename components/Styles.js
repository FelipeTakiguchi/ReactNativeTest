import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 34,
    },
    center: {
        marginTop: '3rem',
        gap: 10,
        flexDirection: 'column',
        alignItems: 'center',
        width: '170%',
        marginLeft: '-35%',
    },
    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '45%',
    },
    font: {
        color: '#fff',
        fontSize: 14,
    },
    textInput: {
        backgroundColor: '#fff',
        color: '#ff3fdd',
        borderRadius: '.3rem',
    },
    align: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: '.3rem',
    }
  });

export {styles};