import './ServicesInAction.css'
import antes01 from '../assets/antes01.jpg'
import depois01 from '../assets/depois01.jpg'
import antes02 from '../assets/antes02.jpg'
import depois02 from '../assets/depois02.jpg'

function ServicesInAction() {
  return (
    <section className="services-in-action" id="servicos">
      <div className="services-container">
        <div className="services-header">
          <h2>Nossos Serviços em Ação</h2>
          <h3>Como Resolvemos Seu Problema?</h3>
          <p>Veja transformações reais dos nossos trabalhos</p>
        </div>

        <div className="transformations">
          <h4>Transformações Reais</h4>
          <div className="before-after-grid">
            
            {/* Primeira Transformação */}
            <div className="transformation-item">
              <div className="before-after">
                <div className="before">
                  <img src={antes01} alt="PC antes do conserto - caso 1" />
                  <div className="label">ANTES</div>
                </div>
                <div className="arrow">→</div>
                <div className="after">
                  <img src={depois01} alt="PC depois do conserto - caso 1" />
                  <div className="label">DEPOIS</div>
                </div>
              </div>
              <div className="transformation-description">
                <h5>Limpeza Completa + Organização</h5>
                <p>PC com anos de poeira e cabos bagunçados. Resultado: performance restaurada e visual profissional!</p>
              </div>
            </div>

            {/* Segunda Transformação */}
            <div className="transformation-item">
              <div className="before-after">
                <div className="before">
                  <img src={antes02} alt="PC antes do conserto - caso 2" />
                  <div className="label">ANTES</div>
                </div>
                <div className="arrow">→</div>
                <div className="after">
                  <img src={depois02} alt="PC depois do conserto - caso 2" />
                  <div className="label">DEPOIS</div>
                </div>
              </div>
              <div className="transformation-description">
                <h5>Upgrade Completo</h5>
                <p>De um PC antigo para uma máquina moderna. Nova vida para o seu equipamento!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h4>Pronto para Transformar seu PC?</h4>
            <p>Diagnóstico gratuito e orçamento sem compromisso</p>
            <a href="https://wa.me/5534999760314" target="_blank" rel="noopener noreferrer" className="services-btn">
              Quero Meu Orçamento Grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesInAction
