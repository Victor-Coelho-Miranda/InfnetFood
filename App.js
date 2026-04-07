import { StyleSheet} from 'react-native';
import Navigation from './src/navigation/Navigation';
import { CartProvider } from './src/context/CartContext';
import { ThemeProvider } from './src/context/ThemeContext';
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
export default function App() {
   useEffect(() => {
    async function requestPermission() {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status !== "granted") {
        alert("Permissão de notificação negada!");
      }
    }

    requestPermission();
  }, []);

  return (
   <ThemeProvider>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
