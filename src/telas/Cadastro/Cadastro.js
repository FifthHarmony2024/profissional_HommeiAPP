import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import Icones from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export default function Cadastro({ navigation }) {
    const [viewPass, setViewPass] = useState(true);
    const [viewConfirmPass, setViewConfirmPass] = useState(true);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    function togglePasswordVisibility() {
        setViewPass(!viewPass);
    }

    function toggleConfirmPasswordVisibility() {
        setViewConfirmPass(!viewConfirmPass);
    }

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, { top: -10, left: 15, fontSize: 12, color: isFocus ? 'blue' : '#4E40A2' }]}>
            Categoria
          </Text>
        );
      }
      return null;
    };

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
                            
                            <View style={styles.dropdownContainer}>
                                {renderLabel()}
                                <Dropdown
                                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={data}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Selecione uma categoria' : '...'}
                                    searchPlaceholder="Pesquisar..."
                                    value={value}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setValue(item.value);
                                        setIsFocus(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                          style={styles.icon}
                                          color={isFocus ? '#4E40A2' : '8A8A8A'}
                                          name="Safety"
                                          size={20}
                                        />
                                    )}
                                />
                            </View>

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
    },
    dropdownContainer: {
        marginBottom: 15,
        position: 'relative',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        left: 20,
        top: 15,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
