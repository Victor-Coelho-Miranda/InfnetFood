import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen({ usuario, setUsuarioLogado }) {

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/fotos-gratis/retrato-do-homem-de-negocios-feliz-com-tabuleta-digital_1262-12831.jpg",
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>
        {usuario?.name || "Usuário"}
      </Text>
      <Text style={styles.email}>
        {usuario?.email}
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setUsuarioLogado(null)}
      >
        <Text style={styles.botaoTexto}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  email: {
    fontSize: 16,
    color: "gray",
  },

  botao: {
    marginTop: 30,
    backgroundColor: "#e63946",
    padding: 12,
    borderRadius: 8,
    width: "60%",
    alignItems: "center",
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});