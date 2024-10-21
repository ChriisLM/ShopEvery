import { Link } from "react-router-dom";
import "../assets/css/Register.css";

export function Register() {
  return (
    <main>
      <header>
        <Link className="header-title" to={"/"}>
          Every
        </Link>{" "}
      </header>
      <section className="register-section">
        <div className="register-container">
          <h1>Registrarse</h1>
          <div className="register-form-container">
            <form action="">
              <div className="register-info register-form-fullname">
                <div>
                  <label htmlFor="">Nombres</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Apellidos</label>
                  <input type="text" />
                </div>
              </div>
              <div className="register-info register-form-contact">
                <div>
                  <label htmlFor="">Correo</label>
                  <input type="email" />
                </div>
                <div>
                  <label htmlFor="">Telefono</label>
                  <input type="number"/>
                </div>
              </div>
              <div className="register-info register-form-password">
                <div>
                  <label htmlFor="">Contraseña</label>
                  <input type="password" />
                </div>
                <div>
                  <label htmlFor="">Confirmar Contraseña</label>
                  <input type="password" />
                </div>
              </div>
              <button className="register-form-button">Ingresar</button>
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
