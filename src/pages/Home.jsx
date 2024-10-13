import { CardProducto } from "../components/CardProducto";
import products from "../data/productos.json";
import '../assets/css/Home.css'
import { useState } from "react";
import { FilterSection } from "../components/FiltersSection";
import { TitleSection } from "../components/TitleSection";

function useFilters(){
  const [filters,setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (productos) =>{
    return productos.filter(producto =>
      producto.precio >= filters.minPrice && (
        producto.categoria == filters.category || filters.category == 'all'
      )
    )
  }

  return {filters,filterProducts,setFilters}
}

export function Home() {
  const [productos,setProductos] = useState(products);
  const {filters,filterProducts,setFilters} = useFilters();

  const filteredProducts = filterProducts(productos);

  return (
    <div className="container">
      <TitleSection title='Productos'/>
      <FilterSection filters={setFilters}/>
      <section className="productos-container">
        {filteredProducts.slice(0,9).map((productoInfo) => (
          <CardProducto key={productoInfo.id} producto={productoInfo} />
        ))}

      </section>
    </div>
  );
}
