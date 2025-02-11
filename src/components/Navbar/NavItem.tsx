import NavbarStyles from "@/styles/Navbar.module.scss"

import { NavLink } from "react-router-dom"


interface NavItemProps {
    href: string
    linkText: string
}

export const NavItem = ({ href, linkText }: NavItemProps) => {

    // const location = useLocation();

    // const isActive = location.pathname === href;

    return <>
        <li>
            <NavLink
                className={({ isActive }) => isActive ? NavbarStyles.ActiveNavItem : NavbarStyles.NavItem}
                to={href}
            >
                {linkText}
            </NavLink>
        </li>
    </>
}