import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function RestaurantDetails({ route }) {
  const { restaurant } = route.params;

  const abrirMapa = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.nome}>{restaurant.name}</Text>
      <Text style={styles.endereco}>{restaurant.address}</Text>
      <View style={styles.cardapio}>
        <Text style={styles.titulo}>🍽️ Destaque do cardápio</Text>
        <Text style={styles.item}>{restaurant.menuItem}</Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={abrirMapa}>
        <Text style={styles.botaoTexto}>Ver no mapa</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 220,
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
  },

  endereco: {
    fontSize: 16,
    color: "#666",
    marginHorizontal: 15,
  },

  cardapio: {
    margin: 15,
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  item: {
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#E63946",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});