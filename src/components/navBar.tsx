import '../navBar.scss'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Home component
// import Fighters from "./fighters";
import logo from "./../../public/SVG/Rityta 2.svg";
import hamIcon from "./../../public/SVG/bars-solid.svg";

// const navNames = ['Characters', 'Stages', 'Spirits']

function Navbar() {
  return (
    <>
      <header>
        <div className='logoCont'>
          <img className='navLogoCont__logo' id='logo' src={logo} alt="name" />
        </div>
        <nav id='nav'>
          {/* <Router>
            <Routes>
              <Route path="/" element={<Fighters />}
              />
            </Routes>
          </Router> */}
          <ul id='navLinks'>
            <li><a href="#Characters">characters</a></li>
            <li><a href="#Characters">stages</a></li>
            <li><a href="#Characters">spirits</a></li>
          </ul>
        </nav>
        <div className='hamBtn'>
          <img id='menuIcon' src={hamIcon} alt="" />
        </div>
      </header>
    </>
  )
}

const menuIcon = document.getElementById("menuIcon");
const navTag = document.getElementById("nav");
menuIcon?.addEventListener("click", () => {
  navTag?.classList.toggle("sideNav")
})

export default Navbar
