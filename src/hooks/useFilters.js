import { useState } from "react";

export function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (productos) => {
    return productos.filter(
      (producto) =>
        producto.precio >= filters.minPrice &&
        (producto.categoria == filters.category || filters.category == "all")
    );
  };

  return { filters, filterProducts, setFilters };
}