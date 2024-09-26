import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import Icones from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';


const generoOpcao = [
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Prefiro não declarar', value: 'Prefiro não declarar' },
];

export default function CadastroClie({ navigation }) {
    const [viewPass, setViewPass] = useState(true);
    const [viewConfirmPass, setViewConfirmPass] = useState(true);
    

    function togglePasswordVisibility() {
        setViewPass(!viewPass);
    }

    function toggleConfirmPasswordVisibility() {
        setViewConfirmPass(!viewConfirmPass);
    }

    
    const [dataNascimento, setDataNascimento] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);


    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numResidencial, setNumResidencial] = useState('');
    const [complementoResi, setComplementoResi] = useState('');
    const [cidade,setCidade] = useState('');
    const [genero,setGenero] = useState('');
    const [estado,setEstado] = useState('');
    const [generoFocus, setGeneroFocus] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(false);  
        if (event.type === 'set' && selectedDate) {  
            setDataNascimento(selectedDate.toLocaleDateString('pt-BR'));
        }
    };

    const renderLabelGenero = () => {
        if (genero || generoFocus) {
            return (
                <Text style={[styles.label, { top: -10, left: 15, fontSize: 12, color: generoFocus ? 'blue' : '#4E40A2' }]}>
                    Gênero
                </Text>
            );
        }
        return null;
    };

    const handleSubmit = async () => {
        let userData = {
            nome,
            sobrenome,
            email,
            telefone,
            dataNascimento,
            senha,
            cep: cep.replace(/\D/g, ''), 
            bairro,
            endereco,
            numResidencial: Number(numResidencial),
            complementoResi,
            cidade,
            estado, 
            genero
 
        };

    
        console.log('Dados que serão enviados:', JSON.stringify(userData, null, 2));
    
        try {
            const response = await axios.post('http://192.168.0.7:8080/usuarios/cliente', userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Cadastro realizado com sucesso:', response.data);
            navigation.navigate('ConfiClie');
        } catch (error) {
            console.error('Erro ao cadastrar:', error.message);
            alert('Erro ao cadastrar: ' + (error.response?.data?.message || error.message));
        }
    };
    
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
                            <TextInput 
                                style={styles.campos}
                                placeholder="Sobrenome"
                                placeholderTextColor="#282828"
                                value={sobrenome}
                                onChangeText={setSobrenome}
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="E-mail"
                                placeholderTextColor="#282828"
                                value={email}
                                onChangeText={setEmail}
                            />
                             <TextInput 
                                style={styles.campos}
                                placeholder="Telefone"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                                value={telefone}
                                onChangeText={setTelefone}
                            />
                            <View style={styles.dropdownContainer}>
                                    {renderLabelGenero()}
                                    <Dropdown
                                        style={[styles.dropdown, generoFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={generoOpcao}
                                        search={false}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!generoFocus ? 'Selecione um gênero' : '...'}
                                        value={genero}
                                        onFocus={() => setGeneroFocus(true)}
                                        onBlur={() => setGeneroFocus(false)}
                                        onChange={item => {
                                            setGenero(item.value);
                                            setGeneroFocus(false);
                                        }}
                                        renderLeftIcon={() => (
                                            <AntDesign
                                                style={styles.icon}
                                                color={generoFocus ? '#4E40A2' : '#8A8A8A'}
                                                name="Safety"
                                                size={20}
                                            />
                                        )}
                                    />
                            </View>
                            <TextInput 
                                style={styles.campos}
                                placeholder="CPF"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                                value={cpf}
                                onChangeText={setCpf}
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
                             <TextInput 
                                style={styles.campos}
                                placeholder="CEP"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                                value={cep}
                                onChangeText={setCep}
                            />
                             <TextInput
                                style={styles.campos}
                                placeholder="Cidade"
                                placeholderTextColor="#282828"
                                value={cidade}
                                onChangeText={setCidade}
                            />
                            <TextInput
                                style={styles.campos}
                                placeholder="Estado"
                                placeholderTextColor="#282828"
                                value={estado}
                                onChangeText={setEstado}
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Bairro"
                                placeholderTextColor="#282828"
                                value={bairro}
                                onChangeText={setBairro}
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Endereço"
                                placeholderTextColor="#282828"
                                value={endereco}
                                onChangeText={setEndereco}
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Nº Residencial"
                                placeholderTextColor="#282828"
                                keyboardType="numeric"
                                value={numResidencial}
                                onChangeText={setNumResidencial}
                            />
                            <TextInput 
                                style={styles.campos}
                                placeholder="Complemento"
                                placeholderTextColor="#282828"
                                value={complementoResi}
                                onChangeText={setComplementoResi}
                            />

                            <View style={styles.inputSenha}>
                                <TextInput 
                                    style={styles.camposSenha}
                                    placeholder="Senha"
                                    placeholderTextColor="#282828"
                                    secureTextEntry={viewPass}
                                    value={senha}
                                onChangeText={setSenha}
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
                                    value={confirmarSenha}
                                    onChangeText={setConfirmarSenha}
                                />
                                <Pressable onPress={toggleConfirmPasswordVisibility} style={styles.iconeOlho}> 
                                    {viewConfirmPass ? 
                                        (<Icones name="eye-off" size={25} color="#282828" />) :
                                        (<Icones name="eye" size={25} color="#282828" />)}
                                </Pressable>
                            </View>
                            <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
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
    dataNascimento: {
        justifyContent: 'center',  
    },
    textoDataNascimento: {
        fontSize: 15,             
        color: '#282828',      
        textAlign: 'left',         
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
});
