# Kimera Audiovisual

Rede social do audiovisual brasileiro - onde artistas e estudantes compartilham obras,
constroem redes e fazem história. Tema visual **"Cinematic Antiquity"** (azul Egeu, dourado
papiro, terracota, preto cinema).

Implementado em **Next.js (App Router) + React + TypeScript**, a partir do design system Kimera.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **React 18**
- **next/image** para imagens locais e remotas otimizadas
- **next/font** (Cinzel, Cormorant Garamond, Mulish)
- Design tokens em CSS custom properties (`src/app/globals.css`)

## Scripts

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm run check      # lint + typecheck + build
npm run start
```

## Deploy na Vercel

A Vercel detecta o projeto Next.js automaticamente. Use o build command padrão:

```bash
npm run build
```

O projeto declara Node `>=18.18.0`, compatível com Next.js 14.

## Estrutura

```text
src/
├─ app/
│  ├─ layout.tsx            # html, fontes, metadata
│  ├─ globals.css           # design tokens + resets
│  ├─ page.tsx              # Landing  (/)
│  ├─ login/page.tsx        # Login    (/login)
│  └─ (app)/                # área autenticada (shell com Sidebar)
│     ├─ layout.tsx
│     ├─ home/page.tsx      # /home
│     ├─ catalogo/page.tsx  # /catalogo
│     ├─ rede/page.tsx      # /rede
│     └─ perfil/page.tsx    # /perfil
├─ components/
│  ├─ Sidebar.tsx           # navegação (route-aware)
│  ├─ icons.tsx             # conjunto de ícones SVG
│  └─ ui/                   # biblioteca de componentes
│     ├─ Button.tsx  Badge.tsx  Input.tsx  Checkbox.tsx
│     ├─ Tabs.tsx    PosterCard.tsx  PostCard.tsx
└─ lib/
   └─ data.ts               # dados mock tipados (catálogo, feed, gêneros)
```

## Notas

- Roteamento real por URL substitui o roteamento por estado do protótipo original.
- O fluxo de auth é apenas de demonstração (sem backend): Login/Cadastro levam a `/home`,
  e "Sair" volta à landing.
- Imagens decorativas em `public/assets/`.
