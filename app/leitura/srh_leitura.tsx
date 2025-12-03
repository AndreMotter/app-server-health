import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from '@react-native-picker/picker';
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
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

 const [servidores, setServidores] = useState<any[]>([]); 

 const [leituras, setLeituras] = useState<any[]>([]);
 const [loading, setLoading] = useState(true);

 const [codigoservidor, setCodigoServidor] = useState(0);

  async function ListarServidores() {
    try {
      const token = await AsyncStorage.getItem("token");
      const resp = await fetch(API_BASE_URL + "/srh-servidor/ListarTodos", {
        headers: { Authorization: "Bearer " + token },
      });
      const data = await resp.json();
      setServidores(data);
    } catch {
      Alert.alert("Erro", "Erro ao carregar servidores");
    }
  }

  async function ListarLeituras() {
    try {
      const token = await AsyncStorage.getItem("token");

      const params = new URLSearchParams();
      if (codigoservidor !== 0) params.append("codigoservidor", codigoservidor.toString());

      const resp = await fetch(API_BASE_URL + `/srh-leitura/ListarTodos?${params.toString()}`, {
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
    ListarServidores();
  }, [codigoservidor]);

  return (
    <View style={stylesGlobal.container_leitura}>
      <Text style={stylesGlobal.title_leitura}>Leituras de Servidores</Text>

        <View style={stylesGlobal.inputPicker_geral}>
        <Picker
            selectedValue={codigoservidor}
            onValueChange={(itemValue) => setCodigoServidor(itemValue)}
            dropdownIconColor="#2E7D32"
            style={stylesGlobal.picker_leitura}
        >
            <Picker.Item label="Todos os Servidores" value={0} />
            {servidores.map((s) => (
            <Picker.Item
                key={s.codigoservidor}
                label={`${s.nome} (${s.identificador})`}
                value={s.codigoservidor}
            />
            ))}
        </Picker>
        </View>
        
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
