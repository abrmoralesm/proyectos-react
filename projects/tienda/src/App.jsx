import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import Componente1 from "./Componente1";
import Datos from "./Datos";
import { Footer } from "./components/Footer.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import {useFilters} from "./hooks/useFilters";


function App() {
  const {filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  return (
    <>
      <Header  />
      <Products products={filteredProducts} />

      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;
