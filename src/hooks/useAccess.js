import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function useAccess() {
  const context = useContext(UserContext)

  if(context == undefined){
    throw new Error('useAccess esta siendo usando fuera de CartProvider')
  }

  return context
}