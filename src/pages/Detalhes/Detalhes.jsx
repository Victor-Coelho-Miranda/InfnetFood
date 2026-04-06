import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function Detalhes({ route }) {
  const { product } = route.params;

  const [quantidade, setQuantidade] = useState(1);

  function aumentar() {
    setQuantidade(quantidade + 1);
  }

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function adicionarCarrinho() {
    alert(`Adicionado ${quantidade}x ${product.nome} ao carrinho 🛒`);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 20 }}>

      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        {product.nome}
      </Text>

      <Text style={{ marginVertical: 10, color: "#555" }}>
        {product.descricao}
      </Text>

      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#2ecc71" }}>
        R$ {product.preco}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Pressable
          onPress={diminuir}
          style={{
            backgroundColor: quantidade === 1 ? "#ccc" : "#e74c3c",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>-</Text>
        </Pressable>

        <Text style={{ marginHorizontal: 20, fontSize: 20 }}>
          {quantidade}
        </Text>

        <Pressable
          onPress={aumentar}
          style={{
            backgroundColor: "#2ecc71",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>+</Text>
        </Pressable>
      </View>

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Total: <Text style={{ fontWeight: "bold" }}>
          R$ {product.preco * quantidade}
        </Text>
      </Text>

      <Pressable
        onPress={adicionarCarrinho}
        style={{
          marginTop: 40,
          backgroundColor: "#3498db",
          padding: 18,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          🛒 Adicionar ao carrinho
        </Text>
      </Pressable>

    </View>
  );
}