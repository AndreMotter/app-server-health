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
  },

  item_usuario: {
    backgroundColor: "#eee",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemTitulo_usuario: {
    fontWeight: "bold",
    fontSize: 18,
  },

  itemBotoes_usuario: {
    flexDirection: "row",
    gap: 25,
  },

  input_usuario: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },

  buttonSalvar_usuario: {
    backgroundColor: "#2196F3",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },

  buttonTextSalvar_usuario: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});
