import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home/Home";
import Login from "../pages/Log/Login";
import Detalhes from "../pages/Detalhes/Detalhes";
import Produtos from "../pages/Produtos/Produtos";
import Carrinho from "../pages/Carrinho/Carrinho";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}