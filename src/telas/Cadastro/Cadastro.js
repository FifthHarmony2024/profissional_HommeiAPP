import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import Icones from 'react-native-vector-icons/Feather';

export default function Cadastro({ navigation }) {
    const [viewPass, setViewPass] = useState(true);
    const [viewConfirmPass, setViewConfirmPass] = useState(true);

    function togglePasswordVisibility() {
        setViewPass(!viewPass);
    }

    function toggleConfirmPasswordVisibility() {
        setViewConfirmPass(!viewConfirmPass);
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                <View style={styles.container}>
                    <View style={styles.fundoRoxo}>
                        <Icones 
                            style={styles.seta} 
                            name="chevron-left" 
                            size={40} 
                            color='#ffffff'  
                            onPress={() => navigation.goBack('EntrarLogin')} 
                        />
                        <Text style={styles.titulo}>Cadastre-se</Text>

                        <View style={styles.inputContainer}>
                            <TextInput 
                                style={styles.campos}
                                placeholder="Nome"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Sobrenome"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="E-mail"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Categoria"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Nome Comercial"
                                placeholderTextColor="#8A8A8A"
                            />
                            <View style={styles.inputSenha}>
                                <TextInput 
                                    style={styles.camposSenha}
                                    placeholder="Senha"
                                    placeholderTextColor="#8A8A8A"
                                    secureTextEntry={viewPass}
                                />
                                <Pressable onPress={togglePasswordVisibility} style={styles.iconeOlho}> 
                                    {viewPass ? 
                                        (<Icones name="eye" size={25} color="#8A8A8A" />) :
                                        (<Icones name="eye-off" size={25} color="#8A8A8A" />)}
                                </Pressable>
                            </View>
                            <View style={styles.inputSenha}>
                                <TextInput 
                                    style={styles.camposSenha}
                                    placeholder="Confirmar Senha"
                                    placeholderTextColor="#8A8A8A"
                                    secureTextEntry={viewConfirmPass}
                                />
                                <Pressable onPress={toggleConfirmPasswordVisibility} style={styles.iconeOlho}> 
                                    {viewConfirmPass ? 
                                        (<Icones name="eye" size={25} color="#8A8A8A" />) :
                                        (<Icones name="eye-off" size={25} color="#8A8A8A" />)}
                                </Pressable>
                            </View>
                            <TextInput 
                                style={styles.campos}
                                placeholder="CEP"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Bairro"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Endereço"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Nº Residencial"
                                placeholderTextColor="#8A8A8A"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Complemento"
                                placeholderTextColor="#8A8A8A"
                            />
                        </View>

                        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Inicio')}>
                            <Text style={styles.botaoTexto}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.cadastroTexto}>
                        Já possui conta? <Text style={styles.cadastroLink} onPress={() => navigation.navigate('EntrarLogin')}>Entrar</Text>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
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
        marginBottom: 50, 
        marginTop:24
    },
    inputContainer: {
        width: '90%',
        marginBottom: 20,
    },
    campos: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        height: 50,
        marginBottom: 15, 
        paddingHorizontal: 20,  
        paddingVertical: 10,    
        fontSize: 16,
        color: '#000000',
        borderWidth: 0,
    },
    camposSenha: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 20,  
        paddingVertical: 10,    
        fontSize: 16,
        color: '#000000',
        borderWidth: 0,
    },
    inputSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        height: 50,
        marginBottom: 15,
    },
    botao: {
        backgroundColor: '#FE914E',
        borderRadius: 50,
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
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
    seta: {
        position: 'absolute',
        top: 79,
        left: 20,
    },
    iconeOlho: {
        paddingHorizontal: 10,
        paddingRight: 25,
        justifyContent: 'center',
        height: '100%',
    }
});
