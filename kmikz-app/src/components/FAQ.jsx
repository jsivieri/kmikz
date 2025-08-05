import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqData = [
    {
      question: "Quanto tempo leva para consertar meu PC?",
      answer: "Na maioria dos casos, fazemos diagnóstico grátis em 1 hora e consertamos em até 24h. Problemas complexos podem levar 2-3 dias (avisamos antes!)."
    },
    {
      question: "Vocês dão garantia no conserto?",
      answer: "Sim! Todos os reparos têm garantia de 3 meses para mão de obra e peças. Se o mesmo problema voltar, reparamos sem custo."
    },
    {
      question: "Preciso deixar meu computador na loja?",
      answer: "Pode trazer pessoalmente ou agendar retirada (taxa transporte). Para diagnósticos simples, às vezes resolvemos na sua frente!"
    },
    {
      question: "Quanto custa um orçamento?",
      answer: "O diagnóstico é grátis! Só cobramos se você aprovar o conserto. Antes de começar, explicamos todos os custos."
    },
    {
      question: "Trabalham com peças usadas para reduzir custos?",
      answer: "Sim, mas só usamos peças testadas e com garantia. Você escolhe: nova (mais cara) ou usada (econômica e confiável)."
    }
  ]

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>❓ Quer Saber Mais?</h2>
          <p>Tire suas dúvidas sobre nossos serviços</p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span>{faq.question}</span>
                <svg 
                  className={`faq-icon ${openFAQ === index ? 'rotated' : ''}`}
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z"/>
                </svg>
              </button>
              <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  <p>🔹 {faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Ainda tem dúvidas?</p>
          <a 
            href="https://wa.me/5534999760314?text=Olá! Tenho algumas dúvidas sobre os serviços da KMIKZ."
            target="_blank"
            rel="noopener noreferrer"
            className="faq-whatsapp-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.51 3.488"/>
            </svg>
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
