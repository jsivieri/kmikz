import './Solutions.css'

function Solutions() {
  return (
    <section className="solutions" id="solucoes">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2>Soluções Rápidas</h2>
          <p>Há mais de 20 anos resolvendo seus problemas de informática</p>
        </div>

        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3>Conserto no Mesmo Dia</h3>
            <p>Seu PC quebrou? Diagnóstico grátis e reparo em até 24h para problemas comuns.</p>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
              </svg>
            </div>
            <h3>Computadores e Notebooks com Super Desconto</h3>
            <p>PCs e notebooks revisados semi-novos e usados, prontos para trabalho ou jogos</p>
          </div>

          <div className="solution-card heritage">
            <div className="solution-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3>Herdeiros da Era Lan House</h3>
            <p className="heritage-text">
              <em>"Há + de 20 anos no mercado, sabemos tudo sobre hardware e performance – seja para consertar ou montar seu PC gamer!"</em>
            </p>
          </div>
        </div>

        <div className="problems-solutions">
          <h3>Problemas Comuns e Nossas Soluções</h3>
          <div className="problems-grid">
            <div className="problem-item">
              <div className="problem">
                <h4>Problema</h4>
                <p>"Meu PC está lento/travando"</p>
              </div>
              <div className="arrow">→</div>
              <div className="solution">
                <h4>Solução KMIKZ</h4>
                <p>Limpeza técnica + upgrade de SSD</p>
              </div>
            </div>

            <div className="problem-item">
              <div className="problem">
                <h4>Problema</h4>
                <p>"Não tenho grana pra PC novo"</p>
              </div>
              <div className="arrow">→</div>
              <div className="solution">
                <h4>Solução KMIKZ</h4>
                <p>PCs usados revisados com garantia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="solutions-cta">
          <a href="https://wa.me/5534999760314" target="_blank" rel="noopener noreferrer" className="solutions-btn">
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solutions
