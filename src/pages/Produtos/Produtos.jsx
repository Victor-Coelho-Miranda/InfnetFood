import { View, Text, FlatList, Pressable } from "react-native";
import { products } from "../../data/Produtos";

export default function Produtos({ route, navigation }) {
  const { categoriaId, nome } = route?.params || {};

  const filtered = products.filter(
    (item) => item.categoriaId === categoriaId
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{nome}</Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Detalhes", { product: item })
            }
            style={{
              backgroundColor: "#fff",
              padding: 15,
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}