import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../pages/Home/Home";
import Carrinho from "../pages/Carrinho/Carrinho";
import ProfileScreen from "../pages/Perfil/ProfileScreen";
import OrdersScreen from "../pages/Pedidos/OrdersScreen";


const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return (
   <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } 
          else if (route.name === "Carrinho") {
            iconName = focused ? "cart" : "cart-outline";
          } 
          else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }
          else if (route.name === "Pedidos") {
           iconName = focused ? "receipt" : "receipt-outline";
}

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#0096c7",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Pedidos" component={OrdersScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}