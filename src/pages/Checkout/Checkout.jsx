import { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Animated, Platform, Alert } from "react-native";
import * as Notifications from "expo-notifications";

const buscarEndereco = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) return null;
    return data;
  } catch (err) {
    console.log("Erro ao buscar CEP:", err);
    return null;
  }
};

export default function CheckoutScreen() {
  const pedido = [
    { id: "1", nome: "Hambúrguer", preco: 25 },
    { id: "2", nome: "Refrigerante", preco: 8 },
  ];

  const total = pedido.reduce((sum, item) => sum + item.preco, 0);

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;

  async function enviarNotificacao(titulo, mensagem) {
    if (Platform.OS === "web") {
      Alert.alert(titulo, mensagem);
      return;
    }
    await Notifications.scheduleNotificationAsync({
      content: { title: titulo, body: mensagem },
      trigger: null,
    });
  }

  const consultarCep = async () => {
    if (!cep) return;
    const data = await buscarEndereco(cep);
    if (data) {
      setLogradouro(data.logradouro || "");
      setBairro(data.bairro || "");
      setCidade(data.localidade || "");
      setUf(data.uf || "");
    } else {
      Alert.alert("CEP inválido", "Digite um CEP válido!");
    }
  };

  async function finalizarPedido() {
    setErro("");
    if (!logradouro || !bairro || !cidade || !uf || !pagamento) {
      setErro("Preencha todos os campos obrigatórios!");
      return;
    }

    setSucesso(true);

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();

    await enviarNotificacao("Pedido confirmado ✅", "Recebemos seu pedido!");

    setTimeout(() => enviarNotificacao("Em preparo 🍳", "Seu pedido está sendo preparado"), 3000);
    setTimeout(() => enviarNotificacao("Saiu para entrega 🛵", "Seu pedido está a caminho!"), 6000);
    setTimeout(() => enviarNotificacao("Pedido entregue 🎉", "Aproveite sua refeição!"), 9000);

    setTimeout(() => {
      setSucesso(false);
      scaleAnim.setValue(0);
      setCep(""); setLogradouro(""); setBairro(""); setCidade(""); setUf(""); setPagamento("");
    }, 3000);
  }

  if (sucesso) {
    return (
      <View style={styles.sucessoContainer}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Text style={styles.icone}>✅</Text>
        </Animated.View>
        <Text style={styles.sucessoTexto}>Pedido realizado com sucesso! 🎉</Text>
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

      <Text style={styles.label}>CEP *</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Digite o CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={consultarCep} style={{ marginLeft: 10, padding: 10, backgroundColor: "#4CAF50", borderRadius: 8 }}>
          <Text style={{ color: "#fff" }}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Endereço *</Text>
      <TextInput style={styles.input} placeholder="Logradouro" value={logradouro} onChangeText={setLogradouro} />
      <TextInput style={styles.input} placeholder="Bairro" value={bairro} onChangeText={setBairro} />
      <TextInput style={styles.input} placeholder="Cidade" value={cidade} onChangeText={setCidade} />
      <TextInput style={styles.input} placeholder="UF" value={uf} onChangeText={setUf} />

      <Text style={styles.label}>Forma de pagamento *</Text>

      <TouchableOpacity style={[styles.option, pagamento === "cartao" && styles.selected]} onPress={() => setPagamento("cartao")}>
        <Text>Cartão 💳</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, pagamento === "pix" && styles.selected]} onPress={() => setPagamento("pix")}>
        <Text>Pix ⚡</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, pagamento === "dinheiro" && styles.selected]} onPress={() => setPagamento("dinheiro")}>
        <Text>Dinheiro 💵</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={finalizarPedido}>
        <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  item: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8, padding: 10, backgroundColor: "#f5f5f5", borderRadius: 8 },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  erro: { color: "red", marginBottom: 10, fontWeight: "bold" },
  label: { marginTop: 15, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginTop: 5 },
  option: { padding: 12, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginTop: 10 },
  selected: { backgroundColor: "#d4edda", borderColor: "#4CAF50" },
  botao: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  botaoTexto: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  sucessoContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  icone: { fontSize: 80 },
  sucessoTexto: { fontSize: 18, fontWeight: "bold", marginTop: 15 },
});