import '../navBar.scss'

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          {/* Characters */}
          <li><a href="#characters">Characters</a></li>
          {/* spirits */}
          <li><a href="#stages">Stages</a></li>
          {/* stages */}
          <li><a href="#spirits">Spirits</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
