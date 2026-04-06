import { useState } from "react";
import { View, Text,TextInput, Pressable, StyleSheet} from "react-native";

import { users } from  "../../data/Usuario";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    if (!email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      setErro("E-mail inválido");
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.senha === senha
    );

    if (user) {
      setErro("");
      navigation.replace("Tabs");
    } else {
      setErro("E-mail ou senha inválidos");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo </Text>
      <Text style={styles.subtitulo}>Faça seu login</Text>

      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <Pressable style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  erro: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});