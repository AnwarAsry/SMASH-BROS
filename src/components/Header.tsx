import HeaderStyles from "@/styles/Header.module.scss"

import { Navbar } from './Navbar.tsx';

export const Header = () => {
  return <>
    <header className={HeaderStyles.Header}>
      <Navbar />
    </header>
  </>
}