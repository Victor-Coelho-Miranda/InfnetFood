import { View, Text, Button } from "react-native";

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Tela Login</Text>
      <Button 
        title="Voltar para Home" 
        onPress={() => navigation.navigate("Home")} 
      />
    </View>
  );
}