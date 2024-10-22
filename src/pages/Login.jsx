import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { useAccess } from "../hooks/useAccess";
import { useState } from "react";

export function Login() {
  const { loginChange, validateUser } = useAccess();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = validateUser(values);
    if (res) {
      loginChange()
      navigate('/')
    }
  };

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <main>
      <header>
        <Link className="header-title" to={"/"}>
          Every
        </Link>
      </header>
      <section className="login-section">
        <div className="login-container">
          <h1>Iniciar Sesion</h1>
          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Usuario</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="usuario@gmail.com"
                value={values.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                required
              />
              <button type="submit" className="login-form-button">
                Ingresar
              </button>
            </form>
          </div>
          <div className="register-link-container">
            <span>
              <Link to={"/register"}>Registrarse</Link>{" "}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
