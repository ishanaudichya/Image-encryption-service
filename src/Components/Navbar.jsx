import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (<>

    <nav className="navbar">
      <div className="navbar-left">
        <span className="website-name">🔒IMGCRYPT</span>
      </div>
      <div className={`navbar-right ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="#">How to Use</a>
        <a href="#">GitHub</a>
        <a href="#">About</a>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
    <style>{`
    .navbar {
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,500&family=Roboto:wght@100;300;400;500;700;900&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #132043;
  color: #fff;
  height:8vh;
}

.navbar-left {
  display: flex;
  align-items: center;
  padding-left:8vw;
  font-family: 'Poppins', sans-serif;
}

.website-name {
  font-size: 24px;
  font-weight: bold;
}

.navbar-right {
  font-family: 'Poppins', sans-serif;
  display: flex;
}

.navbar-right a {
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
}

.mobile-menu-icon {
  display: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar-right {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    padding: 10px;
    transition: transform 0.3s;
    transform: translateX(100%);
  }

  .mobile-menu-open {
    transform: translateX(0);
    display: flex;
  }

  .mobile-menu-icon {
    display: block;
    font-size: 24px;
  }
}
`}</style>
  </>
  );
}

export default Navbar;
