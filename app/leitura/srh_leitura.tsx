import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { API_BASE_URL } from "../../constants/api";
import { stylesGlobal } from "../../styles/global";

export default function Leitura() {
  const [leituras, setLeituras] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function ListarLeituras() {
    try {
      const token = await AsyncStorage.getItem("token");
      const resp = await fetch(API_BASE_URL + "/srh-leitura/ListarTodos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const data = await resp.json();
      setLeituras(data);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar as leituras.");
    } finally {
      setLoading(false);
    }
  }

  function formatarData(dataIso: string) {
    const d = new Date(dataIso);
    return (
      d.toLocaleDateString("pt-BR") +
      " " +
      d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  }

  useEffect(() => {
    ListarLeituras();
  }, []);

  return (
    <View style={stylesGlobal.container_leitura}>
      <Text style={stylesGlobal.title_leitura}>Leituras de Servidores</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#2E7D32" />
      ) : (
        <FlatList
          data={leituras}
          keyExtractor={(item) => item.codigoleitura.toString()}
          renderItem={({ item }) => (
            <View style={stylesGlobal.item_leitura}>
              <View style={{ flex: 1 }}>
                <Text style={stylesGlobal.itemTitulo_leitura}>
                  {item.servidor.nome}
                </Text>
                <Text style={stylesGlobal.subItem_leitura}>
                  Identificador: {item.servidor.identificador}
                </Text>

                <Text style={stylesGlobal.subItem_leitura}>
                  {formatarData(item.datahora)}
                </Text>
              </View>

              <View style={stylesGlobal.valorBox_leitura}>
                <Text style={stylesGlobal.valor_leitura}>{item.valor}</Text>
                <Text style={stylesGlobal.unidade_leitura}>{item.unidade}</Text>
              </View>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={stylesGlobal.logoutButton_geral}
        onPress={() => router.replace("/home" as any)}
      >
        <FontAwesome name="arrow-left" size={18} color="#fff" />
        <Text style={stylesGlobal.logoutText_geral}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
