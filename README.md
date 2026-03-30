# Ruan Espindola — Portfólio Pessoal

Portfólio pessoal desenvolvido com **Next.js 16**, **TypeScript**, **Tailwind CSS** e **Three.js**.

## 🌟 Visão geral

Esta aplicação apresenta o perfil de desenvolvedor de Ruan Espindola com animações, seção de projetos, tecnologias utilizadas e um formulário de contato com botões para e-mail e WhatsApp.

- Design responsivo e moderno
- Área de projetos e stack técnica em destaque
- Integração com WhatsApp para contato rápido
- Performance otimizada com Next.js App Router

## 🚀 Tecnologias principais

- **Next.js 16** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Three.js** / **@react-three/fiber** / **@react-three/drei**
- **Framer Motion**
- **Lucide React**

## 📥 Como usar

```bash
# Clone o repositório
git clone https://github.com/Ruan-Init/portfolio-ruan.git
cd portfolio-ruan

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

Abra `http://localhost:3000` no navegador.

## 🧪 Scripts disponíveis

- `npm run dev` — executa o servidor em modo de desenvolvimento
- `npm run build` — cria o build de produção
- `npm start` — executa o build de produção
- `npm run lint` — checa o código com ESLint

## ⚙️ Estrutura do projeto

```text
portfolio-ruan/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ParticleBackground.tsx
│   ├── Projects.tsx
│   └── Technologies.tsx
├── public/
│   └── robots.txt
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 💡 Recursos implementados

- Seção de apresentação com animações
- Bloco "Sobre mim" com descrição e habilidades
- Lista de tecnologias usadas
- Cards de projetos com links
- Contato por e-mail e WhatsApp
- Layout responsivo para desktop e mobile

## 📌 Observações

- Atualize as informações pessoais e links caso necessário.
- Verifique o `metadataBase` em `app/layout.tsx` antes de fazer deploy em produção.
- Garanta que o número do WhatsApp esteja correto no `components/Contact.tsx`.

## 🚀 Deploy

Recomendo fazer deploy em plataformas como **Vercel** ou **Netlify**.

### Deploy no Vercel

1. Faça login em [vercel.com](https://vercel.com)
2. Importe o repositório do GitHub
3. Defina a branch principal (`main` ou `master`)
4. Ajuste o domínio personalizado, se desejar

## 📞 Contato

- **Email:** ruan.espindola17@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/ruanespindola/
- **GitHub:** https://github.com/Ruan-Init

## 📝 Licença

Este projeto é privado / pessoal. Use conforme necessário ou adapte para o seu próprio portfólio.
