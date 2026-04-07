import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";

export default function Restaurantes({ navigation })  {
  const restaurantes = [
    {
    id: "1",
    nome: "Confeitaria Colombo",
    imagem: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
  },
  {
    id: "2",
    nome: "Xian Rio",
    imagem: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
  },
  {
    id: "3",
    nome: "Lilia",
    imagem: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "4",
    nome: "Amarelinho da Cinelândia",
    imagem: "https://images.unsplash.com/photo-1552566626-52f8b828add9"
  },
  {
    id: "5",
    nome: "Sobrado da Cidade",
    imagem: "https://images.unsplash.com/photo-1541542684-4a3c2a9f8c9f"
  },
  {
    id: "6",
    nome: "Dois de Fevereiro",
    imagem: "https://images.unsplash.com/photo-1551218808-94e220e084d2"
  },
  {
    id: "7",
    nome: "Orla 21 Rooftop",
    imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
  {
    id: "8",
    nome: "Bar do Joia",
    imagem: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c"
  },
  {
    id: "9",
    nome: "Angu do Gomes",
    imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    id: "10",
    nome: "Rio Scenarium",
    imagem: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  }
];

  const abrirMapa = () => {
    Linking.openURL(
      "https://www.google.com/maps/search/restaurantes+centro+rio+de+janeiro"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurantes no Centro do RJ</Text>

      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
       renderItem={({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() =>
      navigation.navigate('Details', {
        restaurant: {
          name: item.nome,
          address: "Centro, Rio de Janeiro",
          image: item.imagem,
          menuItem: "Prato especial da casa"
        }
      })
    }
  >
    <Image source={{ uri: item.imagem }} style={styles.image} />
    <Text style={styles.nome}>{item.nome}</Text>
  </TouchableOpacity>
)}
      />
      <TouchableOpacity style={styles.botao} onPress={abrirMapa}>
        <Text style={styles.botaoTexto}>Ver no mapa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },

  nome: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
  },

  botao: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#4CAF50",
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