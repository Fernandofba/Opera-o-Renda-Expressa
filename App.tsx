
import React from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { CheckIcon, XIcon, LockClosedIcon, StarIcon, ArrowDownIcon, DollarSignIcon, SmartphoneIcon, PackageIcon, BriefcaseIcon, UsersIcon, ChartBarIcon, MoneyBagIcon, ShieldCheckIcon } from './components/icons';
import {
  PAIN_POINTS,
  METRICS,
  HOW_IT_WORKS_STEPS,
  FAQ_ITEMS,
  VALUE_STACK,
  FOR_YOU_ITEMS,
  NOT_FOR_YOU_ITEMS
} from './constants';

const CallToActionButton: React.FC<{ children: React.ReactNode; className?: string, href?: string }> = ({ children, className, href = '#pricing' }) => (
  <a
    href={href}
    className={`block w-full max-w-md mx-auto text-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-black py-4 px-8 rounded-lg text-xl md:text-2xl shadow-[0_0_40px_hsl(var(--primary)/0.7)] transform hover:scale-105 transition-transform duration-300 ${className}`}
  >
    {children}
  </a>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className, id }) => (
  <section id={id} className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <h2 className={`text-3xl md:text-5xl font-black text-center text-[hsl(var(--foreground))] leading-tight ${className}`}>
        {children}
    </h2>
);

const HeroSection = () => (
  <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 overflow-hidden animated-gradient-bg">
     <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <div className="relative max-w-4xl mx-auto z-10">
      <div className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] font-bold text-sm md:text-base px-4 py-1 rounded-full inline-block mb-4 animate-pulse">
        NÃO FECHE ESTA PÁGINA.
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[hsl(var(--foreground))] leading-tight mb-4" style={{textShadow: '0 0 25px hsl(var(--primary) / 0.7)'}}>
        Pare de Enriquecer os Outros. <span className="text-[hsl(var(--primary))]">Use Este Sistema</span> Para Ser Pago Pelas Gigantes da Tecnologia.
      </h1>
      <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-8">
        Um método desconhecido transforma 1 hora ociosa no seu celular em uma fonte de renda de R$500 a R$1.500/mês. Em dólar. Sem vender, sem indicar, sem criar conteúdo. Apenas executando tarefas simples.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-8 text-[hsl(var(--primary))]">
        <div className="flex items-center gap-2 text-sm md:text-base"><SmartphoneIcon className="w-6 h-6"/>À Prova de Preguiçosos</div>
        <div className="flex items-center gap-2 text-sm md:text-base"><PackageIcon className="w-6 h-6"/>Sem Vendas, Sem Pirâmide</div>
        <div className="flex items-center gap-2 text-sm md:text-base"><DollarSignIcon className="w-6 h-6"/>Pagamentos em DÓLAR</div>
      </div>

      <CallToActionButton href="#pricing">
        QUERO O SISTEMA
      </CallToActionButton>
      <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">↓ Acesso vitalício por um pagamento único de R$37</p>
    </div>
    <ArrowDownIcon className="w-8 h-8 text-[hsl(var(--muted))] absolute bottom-8 animate-bounce z-10" />
  </div>
);

const PainPointsSection = () => (
    <Section>
        <SectionTitle>Seu Salário é uma Piada de Mau Gosto.</SectionTitle>
        <p className="text-center text-[hsl(var(--muted-foreground))] mt-4 mb-12 text-lg">Se alguma destas frases te causa um calafrio, você está no lugar certo.</p>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PAIN_POINTS.map((point) => (
                <div key={point} className="break-inside-avoid flex items-start space-x-4 p-5 bg-[hsl(var(--card)/0.5)] rounded-lg border border-[hsl(var(--border))] backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--card))]">
                    <XIcon className="w-7 h-7 text-[hsl(var(--destructive))] flex-shrink-0 mt-1" />
                    <p className="text-[hsl(var(--card-foreground))]" dangerouslySetInnerHTML={{ __html: point.replace(/\*(.*?)\*/g, '<span class="text-[hsl(var(--primary))] font-bold">$1</span>') }}></p>
                </div>
            ))}
        </div>
    </Section>
);

const SolutionSection = () => (
    <Section className="text-center">
        <SectionTitle>Os 'Gurus' Rezam Para Você <span className="text-[hsl(var(--primary))]">NÃO Descobrir Isso.</span></SectionTitle>
        <p className="text-[hsl(var(--muted-foreground))] text-lg mt-6 max-w-3xl mx-auto">
            Enquanto eles te vendem cursos de R$2.000 sobre dropshipping e marketing digital, existe uma economia paralela. Um "mercado B" onde empresas como Google, Netflix e Amazon pagam pessoas comuns para realizar micro-tarefas. Não é marketing. É trabalho. E nós criamos o mapa para você saquear esse mercado.
        </p>
    </Section>
);

const AudienceSection = () => (
  <Section>
    <SectionTitle>Este Sistema Serve Para Você?</SectionTitle>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-[hsl(var(--card)/0.5)] border border-green-500/30 rounded-lg p-6 transition-all duration-300 hover:border-green-500/70 hover:shadow-lg">
        <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">SIM. É para você se...</h3>
        <ul className="space-y-3">
          {FOR_YOU_ITEMS.map((item) => (
            <li key={item} className="flex items-start">
              <CheckIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-[hsl(var(--muted-foreground))]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[hsl(var(--card)/0.5)] border border-red-500/30 rounded-lg p-6 transition-all duration-300 hover:border-red-500/70 hover:shadow-lg">
        <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">NÃO. Fuja daqui se...</h3>
        <ul className="space-y-3">
          {NOT_FOR_YOU_ITEMS.map((item) => (
            <li key={item} className="flex items-start">
              <XIcon className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-[hsl(var(--muted-foreground))]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

const ProductRevealSection = () => (
    <Section className="bg-[hsl(var(--background)/0.5)]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="text-center mb-12 relative">
            <p className="text-[hsl(var(--primary))] font-bold mb-2">O Sistema:</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[hsl(var(--foreground))] leading-tight my-4" style={{textShadow: '0 0 25px hsl(var(--primary) / 0.7)'}}>
                OPERAÇÃO RENDA EXPRESSA
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg mt-4 max-w-3xl mx-auto">
                Um app-guia que te arma com as ferramentas e o direcionamento para extrair de R$500 a R$1.500/mês do mercado de micro-tarefas internacionais.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-[hsl(var(--card)/0.5)] p-6 rounded-lg border border-[hsl(var(--border))] text-center backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 hover:border-[hsl(var(--primary)/0.5)]">
                <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-3">O MAPA</h3>
                <p className="text-[hsl(var(--muted-foreground))]">As 5 plataformas secretas que pagam até $15/hora e que 99% dos brasileiros não conhecem.</p>
            </div>
            <div className="bg-[hsl(var(--card)/0.8)] p-6 rounded-lg border-2 border-[hsl(var(--primary)/0.8)] text-center backdrop-blur-sm shadow-[0_0_30px_hsl(var(--primary)/0.3)] transform md:scale-105 animate-float">
                <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-3">A CHAVE-MESTRA</h3>
                <p className="text-[hsl(var(--muted-foreground))]">O passo a passo para criar um perfil "Executor Nível 5", que te dá acesso preferencial às tarefas mais bem pagas.</p>
            </div>
            <div className="bg-[hsl(var(--card)/0.5)] p-6 rounded-lg border border-[hsl(var(--border))] text-center backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 hover:border-[hsl(var(--primary)/0.5)]">
                <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-3">O PLANO DE ATAQUE</h3>
                <p className="text-[hsl(var(--muted-foreground))]">Um checklist diário no app: "faça isso, depois isso". Do primeiro login ao primeiro saque em dólar em 7 dias.</p>
            </div>
        </div>
    </Section>
);

const VideoTestimonial: React.FC<{ videoId: string; padding: string; title: string }> = ({ videoId, padding, title }) => (
    <div className="w-full shadow-[0_0_20px_hsl(var(--primary)/0.1)] rounded-lg overflow-hidden border border-[hsl(var(--border))] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:border-[hsl(var(--primary)/0.5)] transform hover:scale-105">
        <div className="wistia_responsive_padding" style={{ padding, position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                <iframe
                    src={`https://fast.wistia.net/embed/iframe/${videoId}?web_component=true&seo=true`}
                    title={title}
                    allow="autoplay; fullscreen"
                    allowTransparency={true}
                    frameBorder="0"
                    scrolling="no"
                    className="wistia_embed"
                    name="wistia_embed"
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        </div>
    </div>
);

const videoTestimonials = [
  { id: 'su14qf81dx', padding: '181.67% 0 0 0', title: 'Depoimento em Vídeo 1' },
  { id: 'o8bm9ein9q', padding: '181.67% 0 0 0', title: 'Depoimento em Vídeo 2' },
  { id: 'jla2ftyb2q', padding: '181.82% 0 0 0', title: 'Depoimento em Vídeo 3' },
  { id: 'uxhfijdesu', padding: '181.67% 0 0 0', title: 'Depoimento em Vídeo 4' },
];

const TestimonialsSection = () => (
    <Section>
        <SectionTitle>Prova Social é Para Amadores. <span className="text-[hsl(var(--primary))]">Isto é Prova de Saque.</span></SectionTitle>
        <p className="text-center text-[hsl(var(--muted-foreground))] mt-4 mb-12 text-lg">Pessoas reais. Resultados reais. Dinheiro real.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map(video => (
                <VideoTestimonial key={video.id} videoId={video.id} padding={video.padding} title={video.title} />
            ))}
        </div>
    </Section>
);

const MetricsSection = () => {
    const icons = [<UsersIcon />, <ChartBarIcon />, <BriefcaseIcon />, <MoneyBagIcon />];
    return (
        <div className="bg-black/20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4 text-center">
                {METRICS.map((metric, index) => (
                    <div key={metric.label} className="flex flex-col items-center">
                        <div className="text-[hsl(var(--primary))] mb-2">{React.cloneElement(icons[index], { className: 'w-10 h-10' })}</div>
                        <p className="text-4xl md:text-5xl font-black text-[hsl(var(--foreground))]" style={{textShadow: '0 0 10px hsl(var(--foreground)/0.3)'}}>{metric.value}</p>
                        <p className="text-sm md:text-base font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mt-1">{metric.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HowItWorksSection = () => (
    <Section>
        <SectionTitle>O Protocolo de 3 Fases. <span className="text-[hsl(var(--primary))]">À Prova de Falhas.</span></SectionTitle>
        <div className="mt-12 max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[hsl(var(--border))]"></div>
            {HOW_IT_WORKS_STEPS.map((step) => (
                <div key={step.step} className="flex items-start space-x-6 relative mb-12 last:mb-0">
                    <div className="z-10 flex-shrink-0 w-16 h-16 bg-[hsl(var(--card))] text-[hsl(var(--primary))] text-3xl font-black flex items-center justify-center rounded-full border-2 border-[hsl(var(--primary))]">{step.step}</div>
                    <div>
                        <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-1">{step.title}</h3>
                        <p className="text-[hsl(var(--muted-foreground))]">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <p className="text-center text-[hsl(var(--muted-foreground))/0.7] italic mt-12 max-w-2xl mx-auto">A escolha é simples: continuar perdendo tempo e dinheiro no Instagram, ou usar esse mesmo tempo para ser PAGO em dólar.</p>
    </Section>
);

const FaqSection = () => (
    <Section className="bg-[hsl(var(--background)/0.5)]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <SectionTitle>Suas Desculpas, Nossas Respostas.</SectionTitle>
        <div className="mt-12 max-w-3xl mx-auto space-y-4 relative">
            {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="bg-[hsl(var(--card)/0.5)] border border-[hsl(var(--border))] rounded-lg group transition-all duration-300 hover:border-[hsl(var(--primary)/0.5)] backdrop-blur-sm">
                    <summary className="font-bold text-lg text-[hsl(var(--foreground))] list-none flex justify-between items-center p-5 cursor-pointer">
                        {item.question}
                        <span className="text-[hsl(var(--primary))] faq-arrow text-3xl font-light transform group-hover:rotate-45">+</span>
                    </summary>
                    <p className="text-[hsl(var(--muted-foreground))] p-5 pt-0">{item.answer}</p>
                </details>
            ))}
        </div>
    </Section>
);

const OfferSection = () => {
    const totalValue = VALUE_STACK.reduce((sum, item) => sum + item.value, 0);

    return (
        <Section id="pricing">
            <SectionTitle>A Oferta Mais Ridícula Que Você Verá Hoje.</SectionTitle>
            <p className="text-center text-[hsl(var(--muted-foreground))] mt-4 mb-12 text-lg max-w-3xl mx-auto">Você não está comprando um curso. Você está adquirindo um sistema de renda. Aqui está tudo que você leva hoje:</p>
            
            <div className="max-w-3xl mx-auto bg-[hsl(var(--card))] border-2 border-[hsl(var(--primary))] rounded-lg shadow-[0_0_60px_hsl(var(--primary)/0.4)] p-8">
                <div className="space-y-6">
                    {VALUE_STACK.map((item) => (
                        <div key={item.name} className="flex items-start justify-between pb-4 border-b border-[hsl(var(--border))] last:border-b-0">
                            <div>
                                <h3 className="text-lg font-bold text-[hsl(var(--foreground))]">{item.name}</h3>
                                <p className="text-sm text-[hsl(var(--muted-foreground))]">{item.description}</p>
                            </div>
                            <p className="text-lg font-bold text-[hsl(var(--primary))] flex-shrink-0 ml-4">R${item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 pt-6 border-t-2 border-dashed border-[hsl(var(--border))]">
                    <p className="text-xl text-[hsl(var(--muted-foreground))]">Valor Total:</p>
                    <p className="text-5xl font-black text-[hsl(var(--destructive))] line-through">R${totalValue},00</p>
                    <p className="text-xl text-[hsl(var(--muted-foreground))] mt-4">Seu Acesso Hoje Por Apenas:</p>
                    <p className="text-6xl font-black text-[hsl(var(--primary))] my-2">12x de R$ 3,89</p>
                    <p className="text-lg text-[hsl(var(--muted-foreground))]">ou R$37 à vista no PIX</p>
                    
                    <CallToActionButton href="https://www.ggcheckout.com/checkout/v2/IFNQjYPB0nSwM5xdB1yG" className="mt-8">
                      🔥 QUERO ESSE ABSURDO AGORA 🔥
                    </CallToActionButton>

                    <div className="mt-6 bg-[hsl(var(--secondary)/0.1)] border border-[hsl(var(--secondary)/0.5)] text-[hsl(var(--secondary))] p-3 rounded-md">
                        <p className="font-bold text-sm">Esta oferta expira em:</p>
                        <CountdownTimer initialHours={5} initialMinutes={47} initialSeconds={23} />
                        <p className="mt-2 text-xs font-bold bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-full px-3 py-1 inline-block">As vagas no Grupo VIP estão acabando.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};


const GuaranteeSection = () => (
    <Section className="text-center !py-0 md:!py-0">
        <div className="max-w-3xl mx-auto bg-[hsl(var(--card)/0.5)] border-2 border-[hsl(var(--primary)/0.5)] rounded-lg p-8 md:p-12 shadow-[0_0_40px_hsl(var(--primary)/0.2)] backdrop-blur-sm transition-all duration-300 hover:border-[hsl(var(--primary))] hover:shadow-[0_0_50px_hsl(var(--primary)/0.3)] transform hover:-translate-y-2">
            <ShieldCheckIcon className="w-20 h-20 text-[hsl(var(--primary))] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-[hsl(var(--foreground))] mb-4">A Garantia "Você Lucra ou Eu Te Pago"</h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg mb-8">
                É simples. Você entra. Aplica o sistema. Se em 7 dias você não tiver a clareza ABSOLUTA de que este é o caminho para fazer no mínimo 10x o valor do seu investimento, eu não quero seu dinheiro. Mande um e-mail. Devolvemos 100% do valor na hora. Sem perguntas, sem ressentimentos. O risco é 100% meu. Você literalmente não tem como perder.
            </p>
            <CallToActionButton href="https://www.ggcheckout.com/checkout/v2/IFNQjYPB0nSwM5xdB1yG">
                QUERO ENTRAR COM RISCO ZERO
            </CallToActionButton>
             <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">O acesso é liberado no segundo que seu pagamento for confirmado.</p>
        </div>
    </Section>
);


const Footer = () => (
  <footer className="bg-black/20 text-center py-8 px-4 border-t border-[hsl(var(--border))] mt-20 md:mt-28">
    <div className="max-w-5xl mx-auto text-[hsl(var(--muted-foreground))]">
      <p className="text-sm">
        © {new Date().getFullYear()} Operação Renda Expressa. Todos os direitos reservados.
      </p>
      <p className="text-xs mt-4">
        Este site não é afiliado ao Facebook, Google, ou qualquer uma de suas entidades. Os resultados apresentados aqui não são típicos e dependem exclusivamente do seu esforço, dedicação e aplicação do método. Não garantimos resultados financeiros. Use por sua conta e risco. Todas as informações são baseadas em nossa experiência e servem para fins educacionais.
      </p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <AudienceSection />
      <ProductRevealSection />
      <TestimonialsSection />
      <MetricsSection />
      <HowItWorksSection />
      <OfferSection />
      <FaqSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
}

export default App;