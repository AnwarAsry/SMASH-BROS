import NavbarStyles from "@/styles/Navbar.module.scss"


function Navbar() {
  return <>
    <nav className={NavbarStyles.Nav}>
      {/* <Router>
                <Routes>
                  <Route path="/" element={<Fighters />}
                  />
                </Routes>
              </Router> */}
      <ul className={NavbarStyles.NavLinks}>
        <li><a className={NavbarStyles.NavItem} href="/">Home</a></li>
        <li><a className={NavbarStyles.NavItem} href="#characters">Characters</a></li>
        <li><a className={NavbarStyles.NavItem} href="#stages">Stages</a></li>
        <li><a className={NavbarStyles.NavItem} href="#spirits">Spirits</a></li>
      </ul>
      {/* <div className='nav__hamBtn'>
        <img id='menuIcon' src={hamIcon} alt="" />
      </div> */}
    </nav>
  </>
}

export default Navbar
