import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider } from './context/CartContext';
import AppRouter from './router/AppRouter';


function App() {

  return (

    <CartProvider>
      <AppRouter />
    </CartProvider>
    
  );
}

export default App;
