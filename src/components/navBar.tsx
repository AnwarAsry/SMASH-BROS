import '../scss/navBar.scss'
import hamIcon from "./../../public/SVG/bars-solid.svg";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

function Navbar() {
  return <>
        <nav id='nav' className='nav'>
            {/* <Router>
                <Routes>
                  <Route path="/" element={<Fighters />}
                  />
                </Routes>
              </Router> */}
            <ul id='navLinks' className='nav__list'>
                <li className='nav__item'><a href="#Characters">characters</a></li>
                <li className='nav__item'><a href="#Characters">stages</a></li>
                <li className='nav__item'><a href="#Characters">spirits</a></li>
            </ul>
            <div className='nav__hamBtn'>
                <img id='menuIcon' src={hamIcon} alt="" />
            </div>
        </nav>
    </>
}

export default Navbar
