# Kimera Audiovisual

Rede social do audiovisual brasileiro — onde artistas e estudantes compartilham obras,
constroem redes e fazem história. Tema visual **"Cinematic Antiquity"** (azul Egeu, dourado
papiro, terracota, preto cinema).

Implementado em **Next.js (App Router) + React**, a partir do design system Kimera.

## Stack

- **Next.js 14** (App Router, JavaScript)
- **React 18**
- **next/font** (Cinzel, Cormorant Garamond, Mulish)
- Design tokens em CSS custom properties (`src/app/globals.css`)

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Estrutura

```
src/
├─ app/
│  ├─ layout.js            # html, fontes, metadata
│  ├─ globals.css          # design tokens + resets
│  ├─ page.js              # Landing  (/)
│  ├─ login/page.js        # Login    (/login)
│  └─ (app)/               # área autenticada (shell com Sidebar)
│     ├─ layout.js
│     ├─ home/page.js      # /home
│     ├─ catalogo/page.js  # /catalogo
│     ├─ rede/page.js      # /rede
│     └─ perfil/page.js    # /perfil
├─ components/
│  ├─ Sidebar.jsx          # navegação (route-aware)
│  ├─ icons.jsx            # conjunto de ícones SVG
│  └─ ui/                  # biblioteca de componentes
│     ├─ Button.jsx  Badge.jsx  Input.jsx  Checkbox.jsx
│     ├─ Tabs.jsx    PosterCard.jsx  PostCard.jsx
└─ lib/
   └─ data.js              # dados mock (catálogo, feed, gêneros)
```

## Notas

- Roteamento real por URL substitui o roteamento por estado do protótipo original.
- O fluxo de auth é apenas de demonstração (sem backend): Login/Cadastro levam a `/home`,
  e "Sair" volta à landing.
- Imagens decorativas em `public/assets/`.
