import { CarritoIcon, PerfilIcon, SearchIcon } from "../utils/Icons";
import "../assets/css/Header.css";
import { useState } from "react";
import { CarritoFloat } from "./CarritoFloat";
import { SearchInputHeader } from "./SearchInputHeader";
import { useAccess } from "../hooks/useAccess";
import { LoginButton } from "./LoginButton";
import { Link } from "react-router-dom";
import { PerfilMenu } from "./PerfilMenu";

export function Header() {
  const [stateElements, setStateElements] = useState({
    category: false,
    perfil: false,
    search: false,
    cart: false,
  });
  const { isLogin } = useAccess();

  const toogleShowElements = (element) => {
    setStateElements((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  return (
    <header>
      <div className="header-title-container">
        <h1>every</h1>
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Categorias</li>
          <li><Link to={'/nosotros'}>Nosotros</Link></li>
          <li><Link to={'/contacto'}>Contacto</Link></li>
        </ul>
      </nav>
      <div className="icons-container">
        {isLogin ? (
          <PerfilIcon onclick={() => toogleShowElements("perfil")} />
        ) : (
          <Link to={"/login"}>
            <LoginButton/>
          </Link>
        )}
        {stateElements.perfil && <PerfilMenu showElement={toogleShowElements}/>}
        {stateElements.search && (
          <SearchInputHeader active={stateElements.search} />
        )}
        <SearchIcon onclick={() => toogleShowElements("search")} />
        <CarritoIcon onclick={() => toogleShowElements("cart")} />
        {stateElements.cart && <CarritoFloat />}
      </div>
    </header>
  );
}
