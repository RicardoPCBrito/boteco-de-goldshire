"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [compact,setCompact] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll",onScroll,{ passive:true });
    return () => window.removeEventListener("scroll",onScroll);
  },[]);

  return <header className={`site-header${compact ? " is-compact" : ""}`}>
    <div className="wrap nav">
      <a className="brand" href="#inicio" aria-label="Boteco de Goldshire, voltar ao topo">
        <img src="/emblema.png" alt="Boteco de Goldshire"/>
        <span>Boteco de<br/>Goldshire</span>
      </a>
      <nav aria-label="Navegação principal"><a href="#guilda">A guilda</a><a href="#como-funciona">A casa</a><a href="#entrar">Entrar</a></nav>
    </div>
  </header>;
}
