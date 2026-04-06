import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { Categories } from "../../data/Categorias.js";



export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={Categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate("Produtos", {
                categoriaId: item.id,
                nome: item.nome,
              })
            }
          >
            <Text style={styles.texto}>{item.nome}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  texto: {
    fontSize: 18,
  },
});