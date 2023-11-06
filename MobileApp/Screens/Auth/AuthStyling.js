import { StyleSheet } from "react-native";

export default AuthStyling = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 650
    },
    input: {
        fontSize: 20,
        paddingLeft: 10,
        color: 'black',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: 40,
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    signUpBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 25
    },
    altAuthContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 5,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    altText: {
        fontSize: 25,
    },
    altAuthTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
})
