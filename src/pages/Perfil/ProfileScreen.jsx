import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {

  const user = {
    name: "Victor Coelho",
    email: "vitinho@gmail.com",
    avatar: "https://img.freepik.com/fotos-gratis/retrato-do-homem-de-negocios-feliz-com-tabuleta-digital_1262-12831.jpg",
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
});