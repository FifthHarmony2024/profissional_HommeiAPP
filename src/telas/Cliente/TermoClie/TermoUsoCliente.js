import React from "react";
import { Text, StyleSheet ,View} from "react-native";


export default function TermoUsoCliente(){
    return(
        <View style={styles.container}>

             <Text> TERMO DE USO Cliente</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
})
