import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PerfilPrestador({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navTextActive}>Meus Pedidos</Text>
                    <View style={styles.navIndicator} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('PedidoMeus')}>
                    <Text style={styles.navText}>Meus Pedidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}  onPress={() => navigation.navigate('MinhaAgenda')}>
                    <Text style={styles.navText}>Agenda</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <Text style={styles.headerText}>Nome do Usuário</Text>
                <Text style={styles.profissao}>Profissão</Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.adContainer}>
                    <Text style={styles.adTitle}>Meu anúncio</Text>
                    <Text style={styles.adDescription}>Descrição do anúncio aqui</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5', 
    },
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#4E40A2', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navButton: {
        alignItems: 'center',
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
        backgroundColor: '#FF6B00', 
    },
    header: {
        flex: 1, 
        backgroundColor: '#4E40A2', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profissao: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 5,
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        justifyContent: 'center', 
    },
    adContainer: {
        backgroundColor: '#F5F5F5', 
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 30, 
        borderRadius: 15,
        height: 750, 
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
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
});
