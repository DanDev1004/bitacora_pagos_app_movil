import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/AppTheme";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.azul,
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '40%',
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
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: COLORS.azul_pastel,
        borderBottomWidth: 1,
        borderBottomColor: 'bold',
        marginLeft: 10
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoImage: {
        width: 220,
        height: 180
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold'
    },

});

export default HomeStyles;
