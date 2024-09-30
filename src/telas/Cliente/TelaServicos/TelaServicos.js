import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Pressable } from "react-native";

export default function TelaServicos({ navigation }){
    const [viewPass, setViewPass] = useState(true);
    
    function togglePasswordVisibility(){
        setViewPass(!viewPass);
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                <View style={styles.container}>
                    <View style={styles.circleBackground} />

                    <View style={styles.fundoLaran}>
                        <Icones 
                            style={styles.seta} 
                            name="chevron-left" 
                            size={40} 
                            color='#ffffff'  
                            onPress={() => navigation.goBack('EntrarLoginCliente')} 
                        />
                        <Text style={styles.titulo}>Cadastre-se</Text>

                         <View style={styles.inputContainer}>
                             <TextInput 
                                 style={styles.campos}
                                 placeholder="Nome"
                                 placeholderTextColor="#282828"
                                    value={nome}
                                 onChangeText={setNome}
                                 />
                

