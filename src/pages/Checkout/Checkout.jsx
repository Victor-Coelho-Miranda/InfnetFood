import { useState, useRef } from "react";
import {View, Text,StyleSheet,TextInput,TouchableOpacity,ScrollView,Animated,
} from "react-native";

export default function CheckoutScreen() {
  const pedido = [
    { id: "1", nome: "Hambúrguer", preco: 25 },
    { id: "2", nome: "Refrigerante", preco: 8 },
  ];

  const total = pedido.reduce((sum, item) => sum + item.preco, 0);

  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;

  function finalizarPedido() {
    setErro("");

    if (!endereco.trim() || !pagamento) {
      setErro("Preencha todos os campos obrigatórios!");
      return;
    }

    setSucesso(true);

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setSucesso(false);
      scaleAnim.setValue(0);
      setEndereco("");
      setPagamento("");
    }, 3000);
  }

  if (sucesso) {
    return (
      <View style={styles.sucessoContainer}>
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
          }}
        >
          <Text style={styles.icone}>✅</Text>
        </Animated.View>

        <Text style={styles.sucessoTexto}>
          Pedido realizado com sucesso! 🎉
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 Revisar Pedido</Text>

      {pedido.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text>{item.nome}</Text>
          <Text>R$ {item.preco}</Text>
        </View>
      ))}

      <Text style={styles.total}>Total: R$ {total}</Text>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <Text style={styles.label}>Endereço de entrega *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.label}>Forma de pagamento *</Text>

      <TouchableOpacity
        style={[
          styles.option,
          pagamento === "cartao" && styles.selected,
        ]}
        onPress={() => setPagamento("cartao")}
      >
        <Text>Cartão 💳</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          pagamento === "pix" && styles.selected,
        ]}
        onPress={() => setPagamento("pix")}
      >
        <Text>Pix ⚡</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          pagamento === "dinheiro" && styles.selected,
        ]}
        onPress={() => setPagamento("dinheiro")}
      >
        <Text>Dinheiro 💵</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={finalizarPedido}>
        <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  erro: {
    color: "red",
    marginBottom: 10,
    fontWeight: "bold",
  },

  label: {
    marginTop: 15,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },

  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 10,
  },

  selected: {
    backgroundColor: "#d4edda",
    borderColor: "#4CAF50",
  },

  botao: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  sucessoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  icone: {
    fontSize: 80,
  },

  sucessoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
});