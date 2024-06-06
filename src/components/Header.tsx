import logo from "./../../public/SVG/Rityta 2.svg";
import Navbar from './Navbar.tsx';

function Header() {
  return <>
    <header className='header'>
      <div className='header__logoCont'>
        <img className='header__logoCont-logo' id='logo' src={logo} alt="name" />
      </div>
      <Navbar />
    </header>
  </>
}

export default Header
