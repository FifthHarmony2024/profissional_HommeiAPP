import React from "react";
import { Text, StyleSheet ,View} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 

export default function TermoUsoPrest(){
    return(
        <View style={styles.container}>
             <Text>Termo de Uso</Text>
             
             <View style={styles.containerProgresso}>
                            <View style={styles.circulo}>
                                <AntDesign name="check" size={20} color="#FFF" />
                            </View>
                            <View style={styles.linha} />
                            <View style={styles.circulo}>
                                <AntDesign name="check" size={20} color="#FFF" />
                            </View>
                            <View style={styles.linhaInativa} />
                            <View style={styles.circuloAtivo}>
                                <View style={styles.circuloInterno} />
                            </View>
             </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4E40A2',
    },
    containerProgresso: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 20,
        justifyContent: 'space-between', 
        width: '80%', 
    },
    circulo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FE914E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circuloAtivo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FE914E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circuloInterno: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: '#FE914E',
    },
    circuloInativo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linha: {
        width: 100, 
        height: 2,
        backgroundColor: '#FE914E',
        marginHorizontal: 10, 
    },
    linhaInativa: {
        width: 100, 
        height: 2,
        backgroundColor: '#FE914E',
        marginHorizontal: 10, 
    },
})
