# Boteco de Goldshire

Código do site da guilda, preparado para hospedagem própria na Cloudflare Workers. O site não usa assinatura, conta ou API do ChatGPT/OpenAI.

## Executar localmente

Requer Node.js 22.13 ou superior e pnpm 11.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Publicar pela sua conta Cloudflare

1. Crie um repositório GitHub e envie **o conteúdo desta pasta** (sem `node_modules` ou `dist`).
2. Faça login na Cloudflare com `pnpm exec wrangler login` no computador em que irá publicar.
3. Execute `pnpm deploy`. O comando compila e envia o Worker. A Cloudflare poderá pedir que ative o subdomínio `workers.dev`.
4. Para atualizações automáticas via GitHub, conecte o repositório em **Workers & Pages → Create → Import a repository** e configure o comando de implantação `pnpm install --frozen-lockfile && pnpm deploy`. Vincule a conta/repositório conforme as instruções da Cloudflare.

O nome do Worker está em `wrangler.jsonc`. O domínio personalizado, se desejado, é configurado na sua conta Cloudflare.

## Componentes

- `app/`: páginas, estilos e API de contagem de membros do Discord.
- `public/`: emblema e imagem da taverna.
- `vite.config.ts` e `wrangler.jsonc`: compilação Vinext/Vite e publicação na Cloudflare.

A contagem de membros usa o convite `vbMAxspHFe` na API pública do Discord. Se o convite for alterado ou revogado, atualize `app/api/discord-count/route.ts` e os links em `app/page.tsx`.

O GitHub e a hospedagem que você contratar ou configurar continuam independentes do ChatGPT. O endereço de prévia `*.chatgpt.site` pertence à publicação feita aqui e não é o endereço da sua hospedagem própria.
