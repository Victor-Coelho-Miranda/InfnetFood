import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabsRoutes } from "./TabNavigation";

import Login from "../pages/Log/Login";
import Detalhes from "../pages/Detalhes/Detalhes";
import Produtos from "../pages/Produtos/Produtos";
import RestaurantDetails from "../pages/Mapa/RestaurantDetails";
import CheckoutScreen from "../pages/Checkout/Checkout";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {usuarioLogado ? (
          <>
            <Stack.Screen name="Tabs">
              {(props) => (
                <TabsRoutes
                  {...props}
                  usuario={usuarioLogado}
                  setUsuarioLogado={setUsuarioLogado}
                />
              )}
            </Stack.Screen>

            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
            <Stack.Screen name="Details" component={RestaurantDetails} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
          </>
        ) : (
          <Stack.Screen name="Login">
            {(props) => (
              <Login
                {...props}
                setUsuarioLogado={setUsuarioLogado}
              />
            )}
          </Stack.Screen>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}