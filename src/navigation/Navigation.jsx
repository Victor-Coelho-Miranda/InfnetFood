import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabsRoutes } from "./TabNavigation";

import Login from "../pages/Log/Login";
import Detalhes from "../pages/Detalhes/Detalhes";
import Produtos from "../pages/Produtos/Produtos";
import RestaurantDetails from "../pages/Mapa/RestaurantDetails";


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Tabs" component={TabsRoutes} />
         <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Details" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}