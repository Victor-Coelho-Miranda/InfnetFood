import { useState } from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView} from "react-native";

export default function CheckoutScreen() {
  const pedido = [
    { id: "1", nome: "Hambúrguer", preco: 25 },
    { id: "2", nome: "Refrigerante", preco: 8 }
  ];

  const total = pedido.reduce((sum, item) => sum + item.preco, 0);

  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [erroEndereco, setErroEndereco] = useState("");
  const [erroPagamento, setErroPagamento] = useState("");
  const [sucesso, setSucesso] = useState("");

  const validarCampos = () => {
    let valido = true;

    if (!endereco.trim()) {
      setErroEndereco("Endereço obrigatório!");
      valido = false;
    } else {
      setErroEndereco("");
    }

    if (!pagamento) {
      setErroPagamento("Selecione uma forma de pagamento!");
      valido = false;
    } else {
      setErroPagamento("");
    }

    return valido;
  };

  const finalizarPedido = () => {
  if (validarCampos()) {
    console.log("Pedido finalizado!", { pedido, endereco, pagamento });
    setSucesso("✅ Pedido realizado com sucesso!");
    setEndereco("");
    setPagamento("");
    setErroEndereco("");
    setErroPagamento("");
    setTimeout(() => {
      setSucesso("");
    }, 3000); 
  } else {
    setSucesso(""); 
  }
};
  const handleEnderecoChange = (text) => {
    setEndereco(text);
    setSucesso("");
  };

  const handlePagamentoChange = (valor) => {
    setPagamento(valor);
    setSucesso("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 Revisar Pedido</Text>

      {sucesso ? <Text style={styles.sucesso}>{sucesso}</Text> : null}
      {pedido.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text>{item.nome}</Text>
          <Text>R$ {item.preco}</Text>
        </View>
      ))}

      <Text style={styles.total}>Total: R$ {total}</Text>
      <Text style={styles.label}>Endereço de entrega *</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={endereco}
        onChangeText={handleEnderecoChange}
      />
      {erroEndereco ? <Text style={styles.erro}>{erroEndereco}</Text> : null}
      <Text style={styles.label}>Forma de pagamento *</Text>
      <TouchableOpacity
        style={[styles.option, pagamento === "cartao" && styles.selected]}
        onPress={() => handlePagamentoChange("cartao")}
      >
        <Text>Cartão 💳</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, pagamento === "pix" && styles.selected]}
        onPress={() => handlePagamentoChange("pix")}
      >
        <Text>Pix ⚡</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, pagamento === "dinheiro" && styles.selected]}
        onPress={() => handlePagamentoChange("dinheiro")}
      >
        <Text>Dinheiro 💵</Text>
      </TouchableOpacity>
      {erroPagamento ? <Text style={styles.erro}>{erroPagamento}</Text> : null}
      <TouchableOpacity style={styles.botao} onPress={finalizarPedido}>
        <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor: "#fff" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
    sucesso: {
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 16
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8
  },
    total: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
    label: { marginTop: 15, fontWeight: "bold" },
    input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5
  },
    option: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 10
  },
    selected: { backgroundColor: "#d4edda", borderColor: "#4CAF50" },
    erro: { color: "red", marginTop: 5 },
    botao: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
    botaoTexto: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});