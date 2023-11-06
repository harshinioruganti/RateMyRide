import { StyleSheet } from "react-native";

export default HeaderStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // Center vertically
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#ffffff',
        height: 150,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingTop: 25
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // Center vertically
    },
    rightContainer: {
        paddingRight: 25
    },
    msgContainer: {
        paddingLeft: 10,
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    userText: {
        fontSize: 20,
    },
})
