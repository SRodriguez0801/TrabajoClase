import { View, Text } from 'react-native'
import React from 'react'
import ContexProvider from '../../Context/ContexProvider'
import FormularioContacto from '../../Componentes/FormularioContacto'

export default function Usuario() {
  return (
    <View>
<ContexProvider >
  <FormularioContacto/>

</ContexProvider>
    </View>
  )
}