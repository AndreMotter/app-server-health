import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
  // HOME
  logo_home: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 6,
    resizeMode: "contain",
  },

  title_home: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 15,
  },

  gridContainer_home: {
    gap: 15,
  },

  row_home: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  halfButtonLeft_home: {
    flex: 1,
    marginRight: 7,
  },

  halfButtonRight_home: {
    flex: 1,
    marginLeft: 7,
  },

  fullButton_home: {
    width: "100%",
  },

  // GENÉRICOS
  container_geral: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "space-between",
  },

  content_geral: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },

  button_geral: {
    backgroundColor: "#E8F5E9",
    borderWidth: 1,
    borderColor: "#A5D6A7",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonText_geral: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E7D32",
  },

  logoutButton_geral: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  logoutText_geral: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // LOGIN
  input_login: {
    borderWidth: 1,
    borderColor: "#A5D6A7",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "80%",
    marginBottom: 12,
    backgroundColor: "#F5F5F5",
  },

  label_login: {
    fontWeight: "600",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 4,
    color: "#2E7D32",
  },

  //USUÁRIOS
  container_usuario: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title_usuario: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2E7D32",
  },

  input_usuario: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#F5F5F5",
  },

  buttonSalvar_usuario: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 10,
  },

  buttonTextSalvar_usuario: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  item_usuario: {
    backgroundColor: "#E8F5E9",
    padding: 12,
    marginTop: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#A5D6A7",
    borderWidth: 1,
  },

  itemTitulo_usuario: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2E7D32",
  },

  itemBotoes_usuario: {
    flexDirection: "row",
    gap: 25,
  },

  //SERVIDOR
  container_servidor: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title_servidor: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2E7D32",
  },

  input_servidor: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#F5F5F5",
  },

  buttonSalvar_servidor: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 10,
  },

  buttonTextSalvar_servidor: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  item_servidor: {
    backgroundColor: "#E8F5E9",
    padding: 12,
    marginTop: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#A5D6A7",
    borderWidth: 1,
  },

  itemTitulo_servidor: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2E7D32",
  },

  itemBotoes_servidor: {
    flexDirection: "row",
    gap: 25,
  },

  // LEITURAS
  container_leitura: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title_leitura: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2E7D32",
  },

  item_leitura: {
    backgroundColor: "#E8F5E9",
    padding: 15,
    marginTop: 6,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#A5D6A7",
    borderWidth: 1,
    alignItems: "center",
  },

  itemTitulo_leitura: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  subItem_leitura: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
  },

  valorBox_leitura: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C8E6C9",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 60,
  },

  valor_leitura: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  unidade_leitura: {
    fontSize: 14,
    color: "#2E7D32",
  },

  inputPicker_geral: {
    borderWidth: 1,
    borderColor: "#A5D6A7", 
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 0,
    backgroundColor: "#E8F5E9", 
  },

  picker_leitura: {
    height: 30,
    color: "#2E7D32",
    fontSize: 14,
  },

});
