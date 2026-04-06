import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function OrdersScreen() {
  const [orders] = useState([
    {
      id: "1",
      total: 45.9,
      status: "Em preparo",
      items: ["Pizza", "Refrigerante"],
    },
    {
      id: "2",
      total: 29.9,
      status: "Saiu para entrega",
      items: ["Hambúrguer", "Batata"],
    },
    {
      id: "3",
      total: 15.0,
      status: "Entregue",
      items: ["Açaí"],
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>Pedido #{item.id}</Text>

      <Text style={styles.items}>
        Itens: {item.items.join(", ")}
      </Text>

      <Text style={styles.total}>
        Total: R$ {item.total.toFixed(2)}
      </Text>

      <Text style={styles.status}>
        Status: {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Pedidos</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    padding: 20,
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,

    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  items: {
    color: "#555",
    marginBottom: 5,
  },

  total: {
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 5,
  },

  status: {
    fontSize: 13,
    color: "#888",
  },
});