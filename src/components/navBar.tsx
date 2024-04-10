import '../navBar.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Home component
import Fighters from "./fighters";
import logo from "./../../public/SVG/Rityta 2.svg";

const navNames = ['Characters', 'Stages', 'Spirits']

function Navbar() {
  // navLinksHtml('navLinks')
  return (
    <>
      <header>
        <div className='logoCont'>
          <img className='navLogoCont__logo' id='logo' src={logo} alt="name" />
        </div>
        <nav>
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
      </header>
    </>
  )
}

// function navLinksHtml(listID: string) {
//   navNames.forEach(name => {
//     const list = document.getElementById(listID)
//     const li = document.createElement('li');
//     const link = document.createElement('a');
//     link.innerHTML = name;
//     li.appendChild(link);
//     list?.appendChild(li)
//   })
// }

export default Navbar
