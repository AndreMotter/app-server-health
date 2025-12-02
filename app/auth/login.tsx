import { API_BASE_URL } from "@/constants/api";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { stylesGlobal } from "../../styles/global";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  async function handleEntrar() {
    if (!usuario || !senha) {
      Alert.alert("Atenção", "Informe login e senha.");
      return;
    }

    try {
      const resp = await fetch(API_BASE_URL + "/srh-usuario/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login: usuario,
          senha: senha,
        }),
      });

      if (!resp.ok) {
        Alert.alert("Erro", "Usuário ou senha inválidos.");
        return;
      }

      const data = await resp.json();
      await AsyncStorage.setItem("token", data.access_token);
      router.replace("/home" as any);
    } catch (e) {
      Alert.alert("Erro", "Falha ao conectar com o servidor.");
    }
  }

  return (
    <View
      style={[
        stylesGlobal.container_geral,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Image
        source={require("../../assets/images/logo_server_health.png")}
        style={stylesGlobal.logo_home}
      />
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

      <TouchableOpacity
        style={stylesGlobal.button_geral}
        onPress={handleEntrar}
      >
        <FontAwesome name="sign-in" size={18} color="#2E7D32" />
        <Text style={stylesGlobal.buttonText_geral}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
