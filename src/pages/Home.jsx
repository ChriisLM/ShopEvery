import { CardProducto } from "../components/CardProducto";
import products from "../data/productos.json";
import "../assets/css/Home.css";
import { useState } from "react";
import { FilterSection } from "../components/FiltersSection";
import { TitleSection } from "../components/TitleSection";
import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/useFilters";
import { Header } from "../components/Header";

export function Home() {
  const [productos, setProductos] = useState(products);
  const { filters, filterProducts, setFilters } = useFilters();
  const { cart } = useCart();

  const checkProduct = (product) => {
    return cart.some((item) => item.id == product.id);
  };

  const filteredProducts = filterProducts(productos);

  return (
    <>
      <Header />
      <div className="container">
        <TitleSection title="Productos" />
        <FilterSection filters={setFilters} />
        <section className="productos-container">
          {filteredProducts.slice(0, 9).map((productoInfo) => {
            const isProductInCart = checkProduct(productoInfo);
            return (
              <CardProducto
                key={productoInfo.id}
                producto={productoInfo}
                productInCart={isProductInCart}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
