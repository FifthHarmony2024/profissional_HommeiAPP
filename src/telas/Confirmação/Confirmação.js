import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Pressable, toggleConPasswordVisibility } from "react-native";

export default function Confirmação({ navigation }){

    const [viewConfirmPass, setViewConfirmPass] = useState(true);
    const [viewConPass, setViewConPass] = useState(true);

    function togglePasswordVisibility() {
        setViewConfirmPass(!viewConfirmPass);
    }

    function toggleConPasswordVisibility() {
        setViewConPass(!viewConPass);
    }

    return(Confirmação)
}


   
    
  