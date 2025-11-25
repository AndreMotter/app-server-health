import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { stylesGlobal } from "../../styles/global";

export default function Home() {

  function Sair() {
    router.replace("/auth/login" as any);
  }

  return (
    <View style={stylesGlobal.container}>

      <Image source={require("../../assets/images/logo_server_health.png")} style={stylesGlobal.logo_home} />
  
      <Text style={stylesGlobal.title_home}>Server Health</Text>

      <View style={stylesGlobal.gridContainer_home}>
        <View style={stylesGlobal.row_home}>
          <TouchableOpacity style={[stylesGlobal.button, stylesGlobal.halfButtonLeft_home]} onPress={() => router.push("usuario/sgr_usuario" as any)}>
            <FontAwesome name="user-circle" size={22} color="#2E7D32" />
            <Text style={stylesGlobal.buttonText}>Usuários</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[stylesGlobal.button, stylesGlobal.halfButtonRight_home]} onPress={() => router.push("cultura/sgr_cultura" as any)}>
            <FontAwesome name="server" size={22} color="#2E7D32" />
            <Text style={stylesGlobal.buttonText}>Servidores</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[stylesGlobal.button, stylesGlobal.fullButton_home]} onPress={() => router.push("/lancamentos" as any)}>
          <FontAwesome name="list-alt" size={22} color="#2E7D32" />
          <Text style={stylesGlobal.buttonText}>Leituras</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={stylesGlobal.logoutButton} onPress={Sair}>
        <FontAwesome name="sign-out" size={18} color="#fff" />
        <Text style={stylesGlobal.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
