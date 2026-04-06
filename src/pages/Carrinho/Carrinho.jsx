import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Carrinho() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.preco * item.quantidade,
    0
  );

  const handlePagar = () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio 🛒");
      return;
    }

    alert("Pagamento realizado com sucesso 💳✅");
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seu Carrinho 🛒</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ marginTop: 20 }}>Carrinho vazio</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>
                {item.quantidade}x - R$ {item.preco}
              </Text>
            </View>

            <Pressable
              onPress={() => removeFromCart(item.id)}
              style={styles.remover}
            >
              <Text style={{ color: "#fff" }}>Remover</Text>
            </Pressable>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: R$ {total.toFixed(2)}
        </Text>

        <Pressable style={styles.botaoPagar} onPress={handlePagar}>
          <Text style={styles.textoBotao}>Pagar</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  remover: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 8,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 15,
    marginTop: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botaoPagar: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});