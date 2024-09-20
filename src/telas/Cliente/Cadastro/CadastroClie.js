import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import Icones from 'react-native-vector-icons/Feather';



export default function CadastroClie({ navigation }) {
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
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Sobrenome"
                                placeholderTextColor="#282828"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="E-mail"
                                placeholderTextColor="#282828"
                            />
                             <TextInput 
                                style={styles.campos}
                                placeholder="CPF"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Telefone"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                            />
                             <TextInput 
                                style={styles.campos}
                                placeholder="CEP"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Bairro"
                                placeholderTextColor="#282828"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Endereço"
                                placeholderTextColor="#282828"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Nº Residencial"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Complemento"
                                placeholderTextColor="#282828"
                            />
                            <View style={styles.inputSenha}>
                                <TextInput 
                                    style={styles.camposSenha}
                                    placeholder="Senha"
                                    placeholderTextColor="#282828"
                                    secureTextEntry={viewPass}
                                />
                                <Pressable onPress={togglePasswordVisibility} style={styles.iconeOlho}> 
                                    {viewPass ? 
                                        (<Icones name="eye-off" size={25} color="#282828" />) :
                                        (<Icones name="eye" size={25} color="#282828" />)}
                                </Pressable>
                            </View>
                            <View style={styles.inputSenha}>
                                <TextInput 
                                    style={styles.camposSenha}
                                    placeholder="Confirmar Senha"
                                    placeholderTextColor="#282828"
                                    secureTextEntry={viewConfirmPass}
                                />
                                <Pressable onPress={toggleConfirmPasswordVisibility} style={styles.iconeOlho}> 
                                    {viewConfirmPass ? 
                                        (<Icones name="eye-off" size={25} color="#282828" />) :
                                        (<Icones name="eye" size={25} color="#282828" />)}
                                </Pressable>
                            </View>
                            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ConfiClie')}>
                            <Text style={styles.botaoTexto}>Cadastrar</Text>
                        </TouchableOpacity>

                        <Text style={styles.cadastroTexto}>
                            Já possui conta? <Text style={styles.cadastroLink} onPress={() => navigation.navigate('EntrarLoginCliente')}>Entrar</Text>
                        </Text>
                        </View>
                    </View>
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
        backgroundColor: '#FF8E4E',
        position: 'relative', 
    },
    fundoLaran: {
        width: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20,
        position: 'relative',
    },
    titulo: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: 50, 
        marginTop: 30,
        marginRight:85
    },
    inputContainer: {
        width: '90%',
        marginBottom: 20,
    },
    campos: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8, 
        height: 49, 
        marginBottom: 10, 
        paddingHorizontal: 15,  
        fontSize: 15, 
        color: '#000000',
        borderWidth: 0,
    },
    camposSenha: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        height: 49, 
        paddingHorizontal: 15,  
        fontSize: 15,
        color: '#000000',
        borderWidth: 0,
    },
    inputSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        height: 49, 
        marginBottom: 10,
    },
    cadastroTexto: {
        color: '#FFFFFF',
        marginTop: 25,
        textAlign: 'center',
    },
    cadastroLink: {
        color: '#4E40A2',
        fontWeight: 'bold',
    },
    seta: {
        position: 'absolute',
        top: 84, 
        left: 20,
    },
    iconeOlho: {
        paddingHorizontal: 10,
        paddingRight: 20,
        justifyContent: 'center',
        height: '100%',
    },

    botao: {
        backgroundColor: '#4E40A2',
        borderRadius: 10, 
        width: '100%',
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
    circleBackground: {
        position: 'absolute',
        width: 350,
        height: 90,
        borderRadius: 150,
        backgroundColor: '#FFA572', 
        top: 55,
        left: -40, 
    },
    
});
