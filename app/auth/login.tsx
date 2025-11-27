import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { stylesGlobal } from "../../styles/global";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  async function handleEntrar() {
    router.replace("/home" as any);
  }

  return (
    <View style={[stylesGlobal.container_geral, { justifyContent: "center", alignItems: "center" }]}>
      <Image source={require("../../assets/images/logo_server_health.png")} style={stylesGlobal.logo_home} />
      <Text style={stylesGlobal.title_home}>Server Health</Text>

      <Text style={stylesGlobal.label_login}>Login:</Text>
      <TextInput
        style={stylesGlobal.input_login}
        placeholder="Digite seu login"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={stylesGlobal.label_login}>Senha:</Text>
      <TextInput
        style={stylesGlobal.input_login}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={stylesGlobal.button_geral} onPress={handleEntrar}>
        <FontAwesome name="sign-in" size={18} color="#2E7D32" />
        <Text style={stylesGlobal.buttonText_geral}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
