import HeaderStyles from "@/styles/Header.module.scss"

import Navbar from './Navbar.tsx';

function Header() {
  return <>
    <header className={HeaderStyles.Header}>
      <Navbar />
    </header>
  </>
}

export default Header
