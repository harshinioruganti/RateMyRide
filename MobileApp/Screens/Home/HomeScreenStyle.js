import { StyleSheet } from "react-native";

export default HomeStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#171e2e',
    },
    title: {
        fontSize: 50,               
        fontWeight: 'bold',          
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
    },
    descriptionWrapper: {
        width: '90%',
        height: 300,
        backgroundColor: 'rgba(47,180,194,255)',
        marginTop: 10,
    },
    btnContainer: {
        
    },
    loginRegisterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginRegisterBtn: {
        backgroundColor: '#fff',
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 15,
    },
    guestBtnContainer: {
        display: 'flex',
        margin: 15,
        width: 100,
    },
    logoutBtn: {
        backgroundColor: '#fff',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
})