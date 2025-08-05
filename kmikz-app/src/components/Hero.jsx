import './Hero.css'
import backgroundHero from '../assets/backgroundHero.png'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundHero})` }} id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>KMIKZ Informática</h1>
          <h2>Assistência Técnica Especializada e Computadores com o Melhor Custo-Benefício!</h2>
          <p>Da Lan House ao seu PC perfeito – conserto, upgrades e vendas com garantia!</p>
          <a href="https://wa.me/5534999760314" target="_blank" rel="noopener noreferrer" className="hero-btn">CHAMA NO WHATSAPP</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
