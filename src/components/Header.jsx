import React, { useState, useEffect } from 'react';
import AppointmentModal from './AppointmentModal';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <img src="/img/logoyeni.png" alt="" />
            <h2>Psikolojik Danışman Öykü Çengel</h2>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li><a href="/" onClick={() => scrollToSection('anasayfa')}>Ana Sayfa</a></li>
              <li><a href="/hakkimda" onClick={() => scrollToSection('hakkimda')}>Hakkımda</a></li>
              <li><a href="#hizmetler" onClick={() => scrollToSection('hizmetler')}>Hizmetler</a></li>
              <li><a href="#iletisim" onClick={() => scrollToSection('iletisim')}>İletişim</a></li>
            </ul>
            <button className="cta-button" onClick={() => setIsModalOpen(true)}>
              Randevu Al
            </button>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <AppointmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header; 