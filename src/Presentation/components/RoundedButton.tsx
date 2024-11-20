import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { COLORS } from '../theme/AppTheme'

interface Props {
  texto: string,
  Presionado: () => void
}


export const RoundedButton = ( {texto, Presionado}:Props ) => {
  return (
    <TouchableOpacity
      style={styles.roundendButton}
      onPress={ () => Presionado() }
    >
      <Text style={styles.textButton}>{texto}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  roundendButton: {
    width: '100%',
    height: 50,

    backgroundColor: COLORS.azul,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 15 
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold'
  }
})
