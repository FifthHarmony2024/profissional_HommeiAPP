import React from "react";
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Icones from 'react-native-vector-icons/Entypo'

export default function Cadastro({ navigation }) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                <View style={style.container}>
                    <View style={style.fundoRoxo}>
                        <Icones style={style.seta} name="chevron-left" size={40} color='#ffffff'  onPress={() => navigation.goBack('EntrarLogin')} />
                        <Text style={style.titulo}>Cadastre-se</Text>

                        <View style={style.inputContainer}>
                            <TextInput 
                                style={style.campos}
                                placeholder="Nome:"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Sobrenome:"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="E-mail"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Categoria:"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Nome Comercial"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Senha:"
                                placeholderTextColor="#8A8A8A"
                                secureTextEntry
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Confirmar senha:"
                                placeholderTextColor="#8A8A8A"
                                secureTextEntry
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="CEP:"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Bairro:"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Endereço:"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Nº Residencial:"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Complemento:"
                                placeholderTextColor="#8A8A8A"
                            />
                        </View>

                        <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Inicio')}>
                            <Text style={style.botaoTexto}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={style.cadastroTexto}>
                                Já possui conta?<Text style={style.cadastroLink} onPress={() => navigation.navigate('EntrarLogin')}>Entrar</Text>
                    </Text>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    fundoRoxo: {
        width: '100%',
        backgroundColor: '#6C49C7',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20, 
        position: 'relative', 
    },
    titulo: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: -5,
        marginTop: -40,
    },
    inputContainer: {
        width: '90%',  
        marginBottom: 20,
        marginTop: 60,
    },
    campos: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000000',
        borderWidth: 0,
    },
    botao: {
        backgroundColor: '#FE914E',
        borderRadius: 50,
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    cadastroTexto: {
        color: '#000000',
        marginTop: 20,
    },
    cadastroLink: {
        color: '#FF0000',
        fontWeight: 'bold',
    },
    seta:{
        marginRight:330,
        marginTop:20
    }
});
