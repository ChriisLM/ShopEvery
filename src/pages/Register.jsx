import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Register.css";
import { useAccess } from "../hooks/useAccess";
import { useState } from "react";

export function Register() {
  const { registerUser } = useAccess();
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    tel: "",
    password: "",
    passwordConfirm: ""
  });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(values);
    navigate('/login')
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <main>
      <header>
        <Link className="header-title" to={"/"}>
          Every
        </Link>
      </header>
      <section className="register-section">
        <div className="register-container">
          <h1>Registrarse</h1>
          <div className="register-form-container">
            <form onSubmit={handleSubmit}>
              <div className="register-info register-form-fullname">
                <div>
                  <label htmlFor="name">Nombres</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Apellidos</label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={values.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="register-info register-form-contact">
                <div>
                  <label htmlFor="email">Correo</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="tel">Telefono</label>
                  <input
                    id="tel"
                    name="tel"
                    type="number"
                    value={values.tel}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="register-info register-form-password">
                <div>
                  <label htmlFor="password">Contraseña</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    onChange={handleChange}
                    value={values.passwordConfirm}
                    required
                  />
                </div>
              </div>
              <button className="register-form-button" type="submit">
                Ingresar
              </button>
            </form>
          </div>
          <div className="login-link-container">
            <p>Ya tienes cuenta?</p>
            <span>
              <Link to={"/login"}>Inicia Sesion</Link>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
