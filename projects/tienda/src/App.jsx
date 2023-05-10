import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import Componente2 from "./Componente2";
import Componente1 from "./Componente1";
import Componente3 from "./Componente3";
import datos from "./Datos";
import { Footer } from "./components/Footer.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import {useFilters} from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart.jsx";




function App() {
  const {filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Componente1 datos={datos} titulo='Lista de datos' />
      <Componente2 datos={datos} titulo='Lista mayores de 24' />
      <Componente3 datos={datos} titulo='Componente3' />

      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
