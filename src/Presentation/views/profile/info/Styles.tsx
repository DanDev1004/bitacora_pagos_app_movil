import { StyleSheet } from "react-native";

const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.6,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '45%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formContent: {
        marginLeft: 15
    },
    formImage: {
        height: 30,
        width: 30
    },
    formTextDescription: {
        fontSize: 12,
        color: 'gray'
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '11%'
    },
    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    logout: {
        position: 'absolute',
        alignSelf: 'center',
        top: 30,
        right: 15,
    },
    logoutImage: {
        width: 40,
        height: 40,
    },
    change: {
        position: 'absolute',
        alignSelf: 'center',
        top: 80,
        right: 15,
    }
});

export default ProfileInfoStyles;