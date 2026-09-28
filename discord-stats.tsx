"use client";

import { useEffect, useState } from "react";

type Counts = { online:number; members:number };

export default function DiscordStats() {
  const [counts,setCounts] = useState<Counts | null>(null);
  useEffect(() => {
    let active = true;
    const update = async () => {
      try {
        const response = await fetch("/api/discord-count",{ cache:"no-store" });
        if (!response.ok) return;
        const data:Counts = await response.json();
        if (active) setCounts(data);
      } catch { /* The invitation still works if Discord's count is unavailable. */ }
    };
    update();
    const timer = setInterval(update,120_000);
    return () => { active=false; clearInterval(timer); };
  },[]);

  if (!counts) return null;
  return <div className="discord-stats" aria-label="Comunidade no Discord">
    <span><b className="status-dot" aria-hidden="true"/>{counts.online.toLocaleString("pt-BR")} online</span>
    <span>{counts.members.toLocaleString("pt-BR")} membros</span>
  </div>;
}
