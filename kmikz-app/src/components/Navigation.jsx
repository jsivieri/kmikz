import { useState, useEffect } from 'react'
import './Navigation.css'
import kmikzLogo from '../assets/kmikz.png'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={kmikzLogo} alt="KMIKZ Informática" className="logo-image" />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#solucoes" className="nav-link" onClick={closeMenu}>Soluções</a>
          </li>
          <li className="nav-item">
            <a href="#servicos" className="nav-link" onClick={closeMenu}>Serviços</a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-link" onClick={closeMenu}>Contato</a>
          </li>
          <li className="nav-item mobile-whatsapp">
            <a 
              href="https://wa.me/5534999760314" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link whatsapp-mobile"
              onClick={closeMenu}
            >
              📱 WhatsApp
            </a>
          </li>
        </ul>
        <a href="https://wa.me/5534999760314" target="_blank" rel="noopener noreferrer" className="nav-cta">
          WhatsApp
        </a>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
