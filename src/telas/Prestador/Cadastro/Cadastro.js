import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import Icones from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';

const data = [
    { label: 'Moda e Beleza', value: '1' },
    { label: 'Serviços Domésticos', value: '2' },
    { label: 'Assistência Técnica', value: '3' },
    { label: 'Aulas', value: '4' },
    { label: 'Reformas e Reparos', value: '5' },
    { label: 'Consultoria', value: '6' },
    { label: 'Transporte', value: '7' },
    { label: 'Design e Tecnologia', value: '8' },
    { label: 'Eventos', value: '9' },
    { label: 'Autos', value: '10' },
    { label: 'Saúde', value: '11' },
];

const perfil = [
    { label: 'Microempreendedor Individual', value: '1' },
    { label: 'Autônomo', value: '2' }
];

export default function Cadastro({ navigation }) {
    const [viewPass, setViewPass] = useState(true);
    const [viewConfirmPass, setViewConfirmPass] = useState(true);
    
    const [categoriaValue, setCategoriaValue] = useState(null);
    const [categoriaFocus, setCategoriaFocus] = useState(false);

    const [perfilValue, setPerfilValue] = useState(null);
    const [perfilFocus, setPerfilFocus] = useState(false);

    const [documento, setDocumento] = useState('');

    const [dataNascimento, setDataNascimento] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(false);  
        if (event.type === 'set' && selectedDate) {  
            setDataNascimento(selectedDate.toLocaleDateString('pt-BR'));
        }
    };
    function togglePasswordVisibility() {
        setViewPass(!viewPass);
    }

    function toggleConfirmPasswordVisibility() {
        setViewConfirmPass(!viewConfirmPass);
    }

    const renderLabelCategoria = () => {
      if (categoriaValue || categoriaFocus) {
        return (
          <Text style={[styles.label, { top: -10, left: 15, fontSize: 12, color: categoriaFocus ? 'blue' : '#4E40A2' }]}>
            Categoria
          </Text>
        );
      }
      return null;
    };

    const renderLabelPerfil = () => {
      if (perfilValue || perfilFocus) {
        return (
          <Text style={[styles.label, { top: -10, left: 15, fontSize: 12, color: perfilFocus ? 'blue' : '#4E40A2' }]}>
            Perfil
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
                    <View style={styles.circleBackground} />

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
                                placeholder="Telefone"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                            />

                            <TouchableOpacity 
                                style={[styles.campos, styles.dataNascimento]}  
                                onPress={() => setShowDatePicker(true)}
                            >
                                <Text style={[styles.textoDataNascimento, !dataNascimento && { color: '#282828' }]}>
                                    {dataNascimento || "Data de Nascimento"}
                                </Text>
                            </TouchableOpacity>

                            {showDatePicker && (
                                <DateTimePicker
                                    value={new Date()} 
                                    mode="date"
                                    display="default"
                                    onChange={onChangeDate} 
                                    maximumDate={new Date(2006,11,31)} 
                                    minimumDate={new Date(1940, 0, 1)}
                                />
                            )}

                            <View style={styles.dropdownContainer}>
                                {renderLabelCategoria()}
                                <Dropdown
                                    style={[styles.dropdown, categoriaFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={data}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!categoriaFocus ? 'Selecione uma categoria' : '...'}
                                    searchPlaceholder="Pesquisar..."
                                    value={categoriaValue}
                                    onFocus={() => setCategoriaFocus(true)}
                                    onBlur={() => setCategoriaFocus(false)}
                                    onChange={item => {
                                        setCategoriaValue(item.value);
                                        setCategoriaFocus(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                          style={styles.icon}
                                          color={categoriaFocus ? '#4E40A2' : '#8A8A8A'}
                                          name="Safety"
                                          size={20}
                                        />
                                    )}
                                />
                            </View>

                            <View style={styles.dropdownContainer}>
                                {renderLabelPerfil()}
                                <Dropdown
                                    style={[styles.dropdown, perfilFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={perfil}
                                    search={false}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!perfilFocus ? 'Selecione um perfil' : '...'}
                                    value={perfilValue}
                                    onFocus={() => setPerfilFocus(true)}
                                    onBlur={() => setPerfilFocus(false)}
                                    onChange={item => {
                                        setPerfilValue(item.value);
                                        setPerfilFocus(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                          style={styles.icon}
                                          color={perfilFocus ? '#4E40A2' : '#8A8A8A'}
                                          name="Safety"
                                          size={20}
                                        />
                                    )}
                                />
                            </View>

                            {perfilValue === '1' ? (
                                <TextInput 
                                    style={styles.campos}
                                    placeholder="CNPJ"
                                    placeholderTextColor="#282828"
                                    keyboardType="numeric"
                                    value={documento}
                                    onChangeText={setDocumento}
                                />
                            ) : perfilValue === '2' ? (
                                <TextInput 
                                    style={styles.campos}
                                    placeholder="CPF"
                                    placeholderTextColor="#282828"
                                    keyboardType="numeric"
                                    value={documento}
                                    onChangeText={setDocumento}
                                />
                            ) : null}

                            <TextInput 
                                style={styles.campos}
                                placeholder="Nome Comercial"
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
                        </View>

                        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ConfirPrestador')}>
                            <Text style={styles.botaoTexto}>Cadastrar</Text>
                        </TouchableOpacity>

                        <Text style={styles.cadastroTexto}>
                            Já possui conta? <Text style={styles.cadastroLink} onPress={() => navigation.navigate('EntrarLoginPrestador')}>Entrar</Text>
                        </Text>
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
        backgroundColor: '#4E40A2',
        position: 'relative', 
    },
    fundoRoxo: {
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
    botao: {
        backgroundColor: '#FE914E',
        borderRadius: 10, 
        width: '90%',
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
        color: '#FFFFFF',
        marginTop: 18,
        textAlign: 'center',
    },
    cadastroLink: {
        color: '#FE914E',
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
    dropdownContainer: {
        marginBottom: 10,
        position: 'relative',
    },
    dropdown: {
        height: 49, 
        borderColor: '#F5F5F5',
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
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
        fontSize: 15,
    },
    placeholderStyle: {
        fontSize: 15,
        color: '#282828', 
    },
    selectedTextStyle: {
        fontSize: 15,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 15,
    },
    circleBackground: {
        position: 'absolute',
        width: 350,
        height: 90,
        borderRadius: 150,
        backgroundColor: '#5A4ABA', 
        top: 55,
        left: -40, 
    },
    dataNascimento: {
        justifyContent: 'center',  
    },
    textoDataNascimento: {
        fontSize: 15,             
        color: '#282828',      
        textAlign: 'left',         
    }
    
});
