import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="">Decrypt</a>
        </div>
        <div className="navbar-center">
          <span className="website-name">Imgcrypt</span>
        </div>
        <div className="navbar-right">
          {" "}
          <ul class="nav-links">
            <li>
              <a href="https://github.com/ishanaudichya">GitHub</a>
            </li>
            <li>
              <a href="https://ishanaudichya.netlify.app/">Dev</a>
            </li>
          </ul>
        </div>

        {/* 
      <div className="navbar-left">
        
      </div>
      <div className={`navbar-right ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div> */}
      </nav>
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  
  .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height:8vh;
}

.navbar-left {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: 'Lato', sans-serif;
  }

.navbar-center {
display: flex;
align-items: center;
font-size:3rem;
font-family: 'Lobster', sans-serif;
}

.navbar-right {
  font-family: 'Lato', sans-serif;
  
}
.nav-links{
  display: flex;
  list-style: none;}

.nav-links li {
  padding-left: 2rem;
  font-size: 1.2rem;
}

.navbar a {
  text-decoration: none;
}


`}</style>
    </>
  );
}

export default Navbar;
