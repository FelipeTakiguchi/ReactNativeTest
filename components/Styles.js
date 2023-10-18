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
    },
    space: {
        flexDirection: 'row',
        width: '45%',
        gap: '1rem',
        justifyContent: 'center'
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
    wrapInput: {
        backgroundColor: '#fff',
        color: '#ff3fdd',
        borderRadius: '.3rem',
        width: '21.8vw',
    },
    align: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: '.3rem',
    }
  });

export {styles};