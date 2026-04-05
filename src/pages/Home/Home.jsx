import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Tela Home</Text>
      <Button 
        title="Ir para Login" 
        onPress={() => navigation.navigate("Login")} 
      />
    </View>
  );
}