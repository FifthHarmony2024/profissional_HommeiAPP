import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Pressable, toggleConPasswordVisibility } from "react-native";

export default function ConfirmacaoCli(){
    return(
          <View style={styles.container}>
            <Text>Tela COnfirmacao Cliente</Text>
          </View>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },})


   
    
  