import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
    <header className={`header ${isNavOpen ? 'expanded' : ''}`}>
   
        <img  src={require('./images/logo.png')} alt="logo" className='logo'/>

       
       
      <div className={`menu-icon ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
      <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <a
        
          className={selectedLink === 'home' ? 'selected' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </a>
        <a
          
          className={selectedLink === 'Why Us' ? 'selected' : ''}
          onClick={() => handleLinkClick('Why Us')}
        >
          Why Us
        </a>

        <a
      
          className={selectedLink === 'Courses' ? 'selected' : ''}
          onClick={() => handleLinkClick('Courses')}
        >
          Courses
        </a>

        <a
          
          className={selectedLink === ' Mentors' ? 'selected' : ''}
          onClick={() => handleLinkClick(' Mentors')}
        >
          Mentors
        </a>

        <a
          className={selectedLink === 'Contact Us' ? 'selected' : ''}
          onClick={() => handleLinkClick('Contact Us')}
        >
          Contact Us
        </a>
       
      </nav>

    </header>
     <img  src={require('./images/3frame.png')} alt="frame" className='frame'/>
     </div>
  );
};

export default Header;
