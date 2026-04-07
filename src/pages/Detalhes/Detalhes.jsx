import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Detalhes({ route, navigation }) {
  const product = route?.params?.product;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  const { addToCart } = useContext(CartContext);
  const [quantidade, setQuantidade] = useState(1);

  const aumentar = () => setQuantidade((q) => q + 1);
  const diminuir = () => setQuantidade((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantidade);
    alert(`${quantidade} ${product.nome} adicionado(s) ao carrinho 🛒`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{product.nome}</Text>

      <Text style={styles.descricao}>{product.descricao}</Text>

      <Text style={styles.preco}>R$ {product.preco}</Text>

      <View style={styles.quantidadeContainer}>
        <Pressable
          onPress={diminuir}
          style={[
            styles.botaoQuantidade,
            { backgroundColor: quantidade === 1 ? "#ccc" : "#e74c3c" },
          ]}
        >
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>

        <Text style={styles.quantidade}>{quantidade}</Text>

        <Pressable
          onPress={aumentar}
          style={[styles.botaoQuantidade, { backgroundColor: "#2ecc71" }]}
        >
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.total}>
        Total: <Text style={{ fontWeight: "bold" }}>
          R$ {product.preco * quantidade}
        </Text>
      </Text>

      <Pressable style={styles.botaoCarrinho} onPress={handleAddToCart}>
        <Text style={styles.textoCarrinho}>
          🛒 Adicionar ao carrinho
        </Text>
      </Pressable>
      <TouchableOpacity
  style={styles.botaoCheckout}
  onPress={() => navigation.navigate('Checkout')}
>
  <Text style={styles.botaoTexto}>Ir para Checkout</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
  },
  descricao: {
    marginVertical: 10,
    color: "#555",
  },
  preco: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2ecc71",
  },
  quantidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  botaoQuantidade: {
    padding: 15,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantidade: {
    marginHorizontal: 20,
    fontSize: 20,
  },
  total: {
    marginTop: 20,
    fontSize: 18,
  },
  botaoCarrinho: {
    marginTop: 40,
    backgroundColor: "#3498db",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  textoCarrinho: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  botaoTexto:{
    marginTop: 40,
    backgroundColor: "#3498db",
    padding: 18,
    borderRadius: 12,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "800",
  }
});