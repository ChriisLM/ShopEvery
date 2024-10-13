import { HeaderIcons } from '../utils/Icons'
import '../assets/css/Header.css'

export function Header () {
  return (
    <header>
      <div className='header-title-container'>
        <h1>every</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='icons-container'>
        <HeaderIcons/>
      </div>
    </header>
  );
};