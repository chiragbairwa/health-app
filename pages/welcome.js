export default function Welcome() {
  return (
    <>
      <header className="header">
        {/* LOGO */}
        <img src="logo.png" alt="logo" />

        {/* Navbar */}
        <nav className="navbar">
          <a href="#" className="nav-btn1">
            Home
          </a>
          <a href="#" className="nav-btn2">
            Diets
          </a>
          <a href="#" className="nav-btn3">
            Contact Us
          </a>
        </nav>
      </header>

      <div className="welcome">
        <pre>
          {`Trust me,
your diet doesn't
have to be Boring.`}
        </pre>

        <a href="#" className="welcome-btn">
          GET STARTED
        </a>
      </div>
    </>
  )
}
