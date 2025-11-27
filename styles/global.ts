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
  
});
