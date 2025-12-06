import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { API_BASE_URL } from "../../constants/api";
import { stylesGlobal } from "../../styles/global";

export default function Servidor() {
  const [servidores, setServidores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [modo, setModo] = useState<"lista" | "novo" | "editar">("lista");

  const [nome, setNome] = useState("");
  const [identificador, setIdentificador] = useState("");
  const [codigoservidor, setCodigoservidor] = useState<number | null>(null);

  async function ListarServidores() {
    try {
      const token = await AsyncStorage.getItem("token");
      const resp = await fetch(API_BASE_URL + "/srh-servidor/ListarTodos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = await resp.json();
      setServidores(data);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar os servidores.");
    } finally {
      setLoading(false);
    }
  }

  function AbrirEditarServidor(item: any) {
    setCodigoservidor(item.codigoservidor);
    setNome(item.nome ?? "");
    setIdentificador(item.identificador ?? "");
    setModo("editar");
  }

  function AbrirIncluirServidor() {
    LimparServidor();
    setModo("novo");
  }

  function LimparServidor() {
    setCodigoservidor(null);
    setNome("");
    setIdentificador("");
  }

  async function SalvarServidor() {
    if (!nome.trim()) {
      Alert.alert("Atenção", "O nome é obrigatório!");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("token");
      if (modo === "editar") {
        const resp = await fetch(
          API_BASE_URL + `/srh-servidor/Alterar/${codigoservidor}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
            body: JSON.stringify({ nome, identificador }),
          }
        );
        if (!resp.ok) {
          Alert.alert("Erro", "Não foi possível alterar o servidor.");
          return;
        }
      } else {
        const resp = await fetch(API_BASE_URL + "/srh-servidor/Salvar", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
          body: JSON.stringify({ nome, identificador }),
        });
        if (!resp.ok) {
          Alert.alert("Erro", "Não foi possível salvar o servidor.");
          return;
        }
      }

      LimparServidor();
      setModo("lista");
      ListarServidores();
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar o servidor.");
    }
  }

  async function ExcluirServidor(id: number) {
    const token = await AsyncStorage.getItem("token");
    try {
      const resp = await fetch(API_BASE_URL + `/srh-servidor/Excluir/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      if (!resp.ok) {
        Alert.alert("Erro", "Não foi possível excluir.");
      }
      ListarServidores();
    } catch (e) {
      Alert.alert("Erro", "Erro ao excluir.");
    }
  }

  useEffect(() => {
    ListarServidores();
  }, []);

  if (modo === "lista")
    return (
      <View style={stylesGlobal.container_servidor}>
        <Text style={stylesGlobal.title_servidor}>Servidores</Text>

        <TouchableOpacity
          style={stylesGlobal.button_geral}
          onPress={AbrirIncluirServidor}
        >
          <Text style={stylesGlobal.buttonText_geral}>
            <FontAwesome name="plus" size={18} /> Incluir Servidor
          </Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#2E7D32" />
        ) : (
          <FlatList
            data={servidores}
            keyExtractor={(item) => item.codigoservidor.toString()}
            renderItem={({ item }) => (
              <View style={stylesGlobal.item_servidor}>
                <View>
                  <Text style={stylesGlobal.itemTitulo_servidor}>
                    {item.codigoservidor} - {item.nome}
                  </Text>
                  <Text>{item.identificador}</Text>
                </View>

                <View style={stylesGlobal.itemBotoes_servidor}>
                  <TouchableOpacity onPress={() => AbrirEditarServidor(item)}>
                    <FontAwesome name="edit" size={22} color="#1976D2" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => ExcluirServidor(item.codigoservidor)}
                  >
                    <FontAwesome name="trash" size={22} color="#D32F2F" />
                  </TouchableOpacity>
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

  if (modo === "novo" || modo === "editar")
    return (
      <View style={stylesGlobal.container_servidor}>
        <Text style={stylesGlobal.title_servidor}>
          {modo === "editar" ? "Editar" : "Incluir"} Servidor
        </Text>

        <View style={stylesGlobal.content_geral}>
          <TextInput
            style={stylesGlobal.input_servidor}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={stylesGlobal.input_servidor}
            placeholder="Identificador"
            value={identificador}
            onChangeText={setIdentificador}
          />

          <TouchableOpacity
            style={stylesGlobal.buttonSalvar_servidor}
            onPress={SalvarServidor}
          >
            <Text style={stylesGlobal.buttonTextSalvar_servidor}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={stylesGlobal.logoutButton_geral}
          onPress={() => setModo("lista")}
        >
          <FontAwesome name="arrow-left" size={18} color="#fff" />
          <Text style={stylesGlobal.logoutText_geral}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
}
