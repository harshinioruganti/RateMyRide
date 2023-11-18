import { StyleSheet } from 'react-native';

export default SearchBarStyle = StyleSheet.create({
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 350,
        height: 50,
        margin: 15,
        borderRadius: 15,
    },
    secondarySearchBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 325,
        height: 50,
        marginLeft: 50,
        borderRadius: 15,
    },
    secondaryLeftSideContainer: {
        flexDirection: 'row',
        height: '100%',
        width: 275,
    },
    leftSideContainer: {
        flexDirection: 'row',
        height: '100%',
        width: 300,
    },
    rightSideContainer: {
        flexDirection: 'row',
        height: '100%',
    },
    input: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        marginLeft: 20,
    },
    icon: {
        backgroundColor: 'blue'
    },
})