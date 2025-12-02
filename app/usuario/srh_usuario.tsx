import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { API_BASE_URL } from "../../constants/api";
import { stylesGlobal } from "../../styles/global";

export default function Usuario() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [modo, setModo] = useState<"lista" | "novo" | "editar">("lista");

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [codigousuario, setCodigousuario] = useState<number | null>(null);

  async function ListarUsuarios() {
    try {
     const token = await AsyncStorage.getItem("token");
      const resp = await fetch(API_BASE_URL + "/srh-usuario/ListarTodos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = await resp.json();
      setUsuarios(data);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar usuários.");
    } finally {
      setLoading(false);
    }
  }

  function AbrirEditarUsuario(item: any) {
    setCodigousuario(item.codigousuario);
    setLogin(item.login ?? "");
    setSenha(item.senha ?? "");
    setModo("editar");
  }

  function AbrirIncluirUsuario() {
    LimparUsuario();
    setModo("novo");
  }

  function LimparUsuario() {
    setCodigousuario(null);
    setLogin("");
    setSenha("");
  }

  async function SalvarUsuario() {
    if (!login.trim()) {
      Alert.alert("Atenção", "O login é obrigatório!");
      return;
    }
    try {
        const token = await AsyncStorage.getItem("token");
      if (modo === "editar") {
        const resp = await fetch(
          API_BASE_URL + `/srh-usuario/Alterar/${codigousuario}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + token  },
            body: JSON.stringify({ login, senha: senha || undefined }),
          }
        );
        if (!resp.ok) {
          Alert.alert("Erro", "Não foi possível alterar o usuário.");
          return;
        }
      } else {
        const resp = await fetch(API_BASE_URL + "/srh-usuario/Salvar", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: "Bearer " + token  },
          body: JSON.stringify({ login, senha }),
        });
        if (!resp.ok) {
          Alert.alert("Erro", "Não foi possível salvar o usuário.");
          return;
        }
      }

      LimparUsuario();
      setModo("lista");
      ListarUsuarios();
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar o usuário.");
    }
  }

  async function ExcluirUsuario(id: number) {
    const token = await AsyncStorage.getItem("token");
    Alert.alert("Excluir", "Tem certeza que deseja excluir este usuário?", [
      { text: "Cancelar" },
      {
        text: "Sim",
        onPress: async () => {
          try {
            const resp = await fetch(API_BASE_URL + `/srh-usuario/Excluir/${id}`, {
              method: "DELETE", headers: { Authorization: "Bearer " + token }, 
            });
            if (!resp.ok) Alert.alert("Erro", "Não foi possível excluir.");
            ListarUsuarios();
          } catch (e) {
            Alert.alert("Erro", "Não foi possível excluir.");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    ListarUsuarios();
  }, []);

  if (modo === "lista")
    return (
      <View style={stylesGlobal.container_usuario}>
        <Text style={stylesGlobal.title_usuario}>Usuários</Text>

        <TouchableOpacity
          style={stylesGlobal.button_geral}
          onPress={AbrirIncluirUsuario}
        >
          <Text style={stylesGlobal.buttonText_geral}>
            <FontAwesome name="plus" size={18} /> Incluir Usuário
          </Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#1976D2" />
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.codigousuario.toString()}
            renderItem={({ item }) => (
              <View style={stylesGlobal.item_usuario}>
                <View>
                  <Text style={stylesGlobal.itemTitulo_usuario}>
                    {item.codigousuario} - {item.login}
                  </Text>
                </View>

                <View style={stylesGlobal.itemBotoes_usuario}>
                  <TouchableOpacity onPress={() => AbrirEditarUsuario(item)}>
                    <FontAwesome name="edit" size={22} color="#1976D2" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => ExcluirUsuario(item.codigousuario)}
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
      <View style={stylesGlobal.container_usuario}>
        <Text style={stylesGlobal.title_usuario}>
          {modo === "editar" ? "Editar" : "Incluir"} Usuário
        </Text>

      <View style={stylesGlobal.content_geral}>
        <TextInput
          style={stylesGlobal.input_usuario}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
        />

        <TextInput
          style={stylesGlobal.input_usuario}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={stylesGlobal.buttonSalvar_usuario}
          onPress={SalvarUsuario}
        >
          <Text style={stylesGlobal.buttonTextSalvar_usuario}>Salvar</Text>
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
