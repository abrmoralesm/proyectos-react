import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import Componente1 from "./Componente1";
import Datos from "./Datos";
import { Footer } from "./components/Footer.jsx";
import { IS_DEVELOPMENT } from "./config.js";




function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return {filters, filterProducts, setFilters };
}

function App() {
  const [products] = useState(initialProducts);
  const { filters,filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Componente1 datos={Datos} titulo={"HOLA"} />

      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
