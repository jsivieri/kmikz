import './Legal.css'

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidade</h1>
        <p className="last-updated">Última atualização: Janeiro 2025</p>

        <section className="legal-section">
          <h2>1. Informações que Coletamos</h2>
          <p>A KMIKZ Informática coleta as seguintes informações:</p>
          <ul>
            <li><strong>Dados pessoais:</strong> Nome, telefone, email, endereço</li>
            <li><strong>Dados técnicos:</strong> Informações sobre equipamentos e problemas relatados</li>
            <li><strong>Dados de navegação:</strong> Informações sobre o uso do nosso site</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. Como Usamos suas Informações</h2>
          <p>Utilizamos seus dados para:</p>
          <ul>
            <li>Prestar serviços técnicos solicitados</li>
            <li>Entrar em contato sobre orçamentos e serviços</li>
            <li>Enviar atualizações sobre o status do reparo</li>
            <li>Melhorar nossos serviços e atendimento</li>
            <li>Cumprir obrigações legais e contratuais</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Compartilhamento de Dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, 
            exceto quando necessário para prestação do serviço ou por exigência legal.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger 
            seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Seus Direitos (LGPD)</h2>
          <p>Conforme a Lei Geral de Proteção de Dados, você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
            <li>Solicitar portabilidade dos dados</li>
            <li>Revogar consentimento</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Retenção de Dados</h2>
          <p>
            Mantemos seus dados pelo período necessário para prestação do serviço 
            e cumprimento de obrigações legais, geralmente por até 5 anos após o último contato.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Cookies e Tecnologias Similares</h2>
          <p>
            Nosso site pode utilizar cookies para melhorar a experiência do usuário. 
            Você pode desabilitar cookies nas configurações do seu navegador.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Alterações nesta Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos revisar 
            regularmente para se manter informado sobre nossas práticas de privacidade.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Contato - Encarregado de Dados</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
            <br/>
            Email: lanhousefloriano@gmail.com
            <br/>
            WhatsApp: (34) 99976-0314
            <br/>
            Endereço: Av. Floriano Peixoto, nº 1780 - Bairro N. Sra. Aparecida - Uberlândia/MG
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
