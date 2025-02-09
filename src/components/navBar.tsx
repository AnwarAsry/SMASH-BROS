import NavbarStyles from "@/styles/Navbar.module.scss"

import { Link } from "react-router-dom"


export const Navbar = () => {
  return <>
    <nav className={NavbarStyles.Nav}>
      <ul className={NavbarStyles.NavLinks}>
        <li><Link className={NavbarStyles.NavItem} to="/">Home</Link></li>
        <li><Link className={NavbarStyles.NavItem} to="/characters">Characters</Link></li>
        <li><Link className={NavbarStyles.NavItem} to="/stages">Stages</Link></li>
        <li><Link className={NavbarStyles.NavItem} to="/spirits">Spirits</Link></li>
      </ul>
    </nav>
  </>
}