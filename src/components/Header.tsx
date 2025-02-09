import HeaderStyles from "@/styles/Header.module.scss"

import { Navbar } from "./navBar"


export const Header = () => {
  return <>
    <header className={HeaderStyles.Header}>
      <Navbar />
    </header>
  </>
}