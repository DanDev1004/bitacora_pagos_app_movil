import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'
import { COLORS } from '../theme/AppTheme'

interface Props {
    image: any, //Usamos datos de tipo any para no usar la funcion require() en source ya que dicha funcion solo permite string y no, no podemos pasarsela como variable
    placeholder: string,
    KeyboardType: KeyboardType,
    secureTextEntry?: boolean, //no es obligatorio
    property: string,
    value: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    KeyboardType,
    secureTextEntry = false,
    property,
    value,
    onChangeText
}:Props) => {
  return (
    <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={image}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={placeholder}
                        keyboardType={KeyboardType}
                        value={value}
                        onChangeText={ value => onChangeText(property, value)}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
  )
}


const styles = StyleSheet.create({
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 10
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 25
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gris,
        marginLeft: 15
    },
})