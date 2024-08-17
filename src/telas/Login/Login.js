import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function Login({ navigation }) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                <View style={style.container}>
                    <View style={style.fundoRoxo}>
                        <Text style={style.titulo}>Login</Text>
                        
                        <View style={style.inputContainer}>
                            <TextInput 
                                style={style.campos}
                                placeholder="E-mail"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={style.campos}
                                placeholder="Senha:"
                                placeholderTextColor="#8A8A8A"
                                secureTextEntry
                            />
                        </View>
                        <Text style={style.linkTexto}>Esqueci minha senha</Text>

                        <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('EntrarLogin')}>
                            <Text style={style.botaoTexto}>Entrar</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                    <Text style={style.cadastroTexto}>
                        Não possui conta? <Text style={style.cadastroLink} onPress={() => navigation.navigate('Cad')}>Cadastre-se</Text>
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
        height: 700,
        backgroundColor: '#6C49C7', 
        borderBottomLeftRadius: 200, 
        borderBottomRightRadius: 200, 
        alignItems: 'center',
        paddingVertical: 50,
        position: 'absolute',
        top: 0,
    },
    titulo: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: 30,
        marginTop: 40,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
        marginTop: 80,
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
        justifyContent: 'center',
        marginTop: 100,
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    linkTexto: {
        marginTop: -25,
        marginRight: 150,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    },
    cadastroTexto: {
        color: '#000000',
        marginTop: 800,
    },
    cadastroLink: {
        color: '#FF0000',
        fontWeight: 'bold',
    },
   
});
