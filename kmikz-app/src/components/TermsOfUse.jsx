import './Legal.css'

function TermsOfUse() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Termos de Uso</h1>
        <p className="last-updated">Última atualização: Janeiro 2025</p>

        <section className="legal-section">
          <h2>1. Aceite dos Termos</h2>
          <p>
            Ao utilizar os serviços da KMIKZ Informática, você concorda com estes Termos de Uso. 
            Se não concordar com qualquer parte destes termos, não utilize nossos serviços.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Serviços Oferecidos</h2>
          <p>A KMIKZ Informática oferece serviços de:</p>
          <ul>
            <li>Manutenção e reparo de computadores</li>
            <li>Instalação de software e sistemas operacionais</li>
            <li>Consultoria em tecnologia</li>
            <li>Venda de equipamentos e peças de informática</li>
            <li>Suporte técnico especializado</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Responsabilidades do Cliente</h2>
          <ul>
            <li>Fornecer informações precisas sobre os problemas técnicos</li>
            <li>Fazer backup de dados importantes antes da entrega do equipamento</li>
            <li>Informar senhas necessárias para acesso ao sistema</li>
            <li>Retirar o equipamento no prazo acordado</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Garantias</h2>
          <p>
            Oferecemos garantia de 3 meses para serviços de mão de obra e peças instaladas. 
            A garantia não cobre danos causados por mau uso, vírus ou problemas não relacionados ao reparo realizado.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Limitação de Responsabilidade</h2>
          <p>
            A KMIKZ Informática não se responsabiliza por perda de dados, sendo recomendado 
            ao cliente fazer backup antes da entrega do equipamento para manutenção.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Preços e Pagamento</h2>
          <ul>
            <li>Diagnóstico gratuito para todos os equipamentos</li>
            <li>Orçamento válido por 30 dias</li>
            <li>Pagamento à vista ou conforme condições acordadas</li>
            <li>Equipamentos não retirados em 60 dias podem ter taxa de armazenamento</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Contato</h2>
          <p>
            Para dúvidas sobre estes termos, entre em contato:
            <br/>
            Email: lanhousefloriano@gmail.com
            <br/>
            WhatsApp: (34) 99976-0314
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsOfUse
