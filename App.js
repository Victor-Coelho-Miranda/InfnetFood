import { StyleSheet} from 'react-native';
import Navigation from './src/navigation/Navigation';
import { CartProvider } from './src/context/CartContext';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
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
