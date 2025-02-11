import NavbarStyles from "@/styles/Navbar.module.scss"

import { NavItem } from "./NavItem"


export const Navbar = () => {
  return <>
    <nav className={NavbarStyles.Nav}>
      <ul className={NavbarStyles.NavLinks}>
        <NavItem href="/" linkText="Home" />
        <NavItem href="/characters" linkText="Characters" />
        <NavItem href="/stages" linkText="Stages" />
        <NavItem href="/spirits" linkText="Spirits" />
      </ul>
    </nav>
  </>
}