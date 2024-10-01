import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons'
import Icones from 'react-native-vector-icons/Feather';

export default function PerfilPrestador({ navigation }) {
    const [imageUri, setImageUri] = useState(null);

    const openGallery = () => {
        const options = {
            mediaType: 'photo',
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de imagem');
            } else if (response.errorCode) {
                console.log('Erro ao selecionar imagem: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
            <Icones
                            style={styles.notificacao}
                            name="notifications"
                            size={40}
                            color='#ffffff'
                           
                />
                <View style={styles.navbar}>
                    <TouchableOpacity style={styles.navButton}>
                        <Text style={styles.navTextActive}>Meu Perfil</Text>
                        <View style={styles.navIndicator} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('PedidoMeus')}>
                        <Text style={styles.navText}>Meus Pedidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MinhaAgenda')}>
                        <Text style={styles.navText}>Agenda</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.userInfoContainer}>
                    <Text style={styles.headerText}>Nome do Usuário</Text>
                    <Text style={styles.profissao}>Profissão</Text>
                </View>

                <View style={styles.adContainer}>
                    <TouchableOpacity onPress={openGallery}>
                        {imageUri ? (
                            <Image source={{ uri: imageUri }} style={styles.profileImage} />
                        ) : (
                            <View style={styles.defaultImage}>
                                <Text style={styles.addImageText}>Adicionar Imagem</Text>
                            </View>
                        )}
                    </TouchableOpacity>

                    <View style={styles.anuncioContainer}>
                        <Text style={styles.adTitle}>Meu anúncio</Text>
                        <Text style={styles.adDescription}>Descrição do anúncio aqui</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#4E40A2', 
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 380,
        paddingBottom: 30, 
    },
    navButton: {
        alignItems: 'center',
        marginTop:-680
    },
    navText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    navTextActive: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navIndicator: {
        marginTop: 5,
        width: '100%',
        height: 3,
        backgroundColor: '#FE914E',
    },
    userInfoContainer: {
        alignItems: 'center',
        marginTop: -300, 
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF', 
    },
    profissao: {
        fontSize: 16,
        color: '#FFFFFF', 
        marginBottom: 10,
    },
    adContainer: {
        backgroundColor: '#F5F5F5',
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 30,
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        alignItems: 'center',
        marginTop: 55, 
    },
    anuncioContainer: {
        marginTop: 20,
        height:500
    },
    adTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    adDescription: {
        fontSize: 14,
        color: '#666',
    },
    profileImage: {
        width: 150, 
        height: 150, 
        borderRadius: 75, 
        borderWidth: 2,
        borderColor: '#4E40A2',
        marginTop: -90,
    },
    defaultImage: {
        width: 150, 
        height: 150, 
        borderRadius: 75, 
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#D4D1E4', 
        marginTop: -90,
    },
    addImageText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
});
