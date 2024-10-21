import { Link } from 'react-router-dom';
import '../assets/css/Login.css'

export function Login () {
  return (
    <main>
      <header><Link className='header-title' to={'/'}>Every</Link> </header>
      <section className='login-section'>
        <div className='login-container'>
          <h1>Iniciar Sesion</h1>
          <div className='login-form-container'>
            <form action="">
              <label htmlFor="">Usuario</label>
              <input type="text" placeholder='usuario@gmail.com' required/>
              <label htmlFor="">Contraseña</label>
              <input type="password" required/>
              <button className='login-form-button'>Ingresar</button>
            </form>
          </div>
          <div className='register-link-container'>
            <span><Link to={'/register'}>Registrarse</Link> </span>
          </div>
        </div>
      </section>
    </main>
  );
};