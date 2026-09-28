import DiscordStats from "./discord-stats";
import SiteHeader from "./site-header";

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero" id="inicio"><div className="wrap hero-inner">
        <p className="eyebrow">Guilda brasileira • Aliança • World of Warcraft</p>
        <h1>Entre, a casa <span>é da Aliança.</span></h1>
        <p className="lead">Depois de cada aventura em Azeroth, tem uma mesa esperando por você no Boteco de Goldshire.</p>
        <div className="actions"><a className="button" href="https://discord.gg/vbMAxspHFe" target="_blank" rel="noopener noreferrer">Entrar no Discord</a><a className="button secondary" href="#guilda">Conheça o Boteco</a></div>
      </div></section>
      <section className="section intro" id="como-funciona"><div className="wrap">
        <div className="section-heading"><p className="eyebrow">Puxe uma cadeira</p><h2>O que tem no Boteco?</h2><p>Um lugar para encontrar gente para jogar e continuar a conversa depois de fechar o jogo.</p></div>
        <div className="cards">
          <article className="card"><span className="number">01</span><h3>Companhia para jogar</h3><p>Converse com a guilda, encontre um grupo e combine a próxima masmorra ou aventura.</p></article>
          <article className="card"><span className="number">02</span><h3>Seu jeito de jogar</h3><p>No Discord, mostre suas classes, sua função e se curte mais PvE ou PvP.</p></article>
          <article className="card"><span className="number">03</span><h3>Histórias para contar</h3><p>Compartilhe conquistas, prints, dicas e os causos que só Azeroth consegue render.</p></article>
        </div>
      </div></section>
      <section className="section" id="guilda"><div className="wrap guild"><img className="crest" src="/emblema.png" alt="Emblema do Boteco de Goldshire, com estalagem e caneca em tons de azul e dourado"/><div><p className="eyebrow">Nossa casa em Azeroth</p><h2>Boteco de Goldshire</h2><p>Somos uma guilda brasileira da Aliança. O Boteco nasceu para reunir quem gosta de jogar WoW com companhia, conversar sem cerimônia e fazer da jornada uma história compartilhada.</p><p className="quote">Todo aventureiro tem uma história. A nossa começa quando a porta do Boteco se abre.</p></div></div></section>
      <section className="section join" id="entrar"><div className="wrap join-inner"><div><p className="eyebrow">A próxima mesa é sua</p><h2>Venha para o Boteco</h2><p>Entre no Discord para conversar com a guilda, combinar grupos e escolher seus cargos de classe, função e preferência de jogo.</p><DiscordStats /></div><a className="button" href="https://discord.gg/vbMAxspHFe" target="_blank" rel="noopener noreferrer">Entrar no Discord</a></div></section>
    </main>
    <footer><div className="wrap"><span>© Boteco de Goldshire</span><span>Feito por aventureiros da Aliança. World of Warcraft pertence à Blizzard Entertainment.</span></div></footer>
  </>;
}
