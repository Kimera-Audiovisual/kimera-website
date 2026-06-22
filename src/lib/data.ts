/* Mock content for the Kimera prototype. */

export const GENRES = [
  'Tudo',
  'Terror',
  'Terror Psicológico',
  'Drama',
  'Ficção, Sci-fi e Terror',
  'Experimental e Romance',
  'Horror',
] as const;

export type Genre = (typeof GENRES)[number];
export type PosterGenre = Exclude<Genre, 'Tudo'>;

export type Poster = {
  title: string;
  genre: PosterGenre;
  year: string;
  dur: string;
  rating: string;
  src: string;
};

export type Post = {
  id: number;
  author: string;
  handle: string;
  time: string;
  likes: number;
  comments: number;
  liked: boolean;
  tags: string[];
  content: string;
};

export const POSTERS: Poster[] = [
  { title: 'Por Favor, Goste de Mim', genre: 'Terror', year: '2025', dur: '1.49 min', rating: '8.7', src: '/assets/curta1.png' },
  { title: 'Olho por olho', genre: 'Ficção, Sci-fi e Terror', year: '2025', dur: '4.40 min', rating: '9.4', src: '/assets/curta2.png' },
  { title: 'PRESENTE', genre: 'Experimental e Romance', year: '2026', dur: '1.30 min', rating: '9.0', src: '/assets/curta3.png' },
  { title: 'Mors Desiderat', genre: 'Horror', year: '2026', dur: '1 min', rating: '9.1', src: '/assets/curta4.png' },
  { title: 'FAMINTA', genre: 'Terror Psicológico', year: '2026', dur: '1 min', rating: '8.3', src: '/assets/curta5.png' },
  { title: 'Ruína', genre: 'Drama', year: '2026', dur: '1 min', rating: '8.6', src: '/assets/curta6.png' },
];

export const POSTS: Post[] = [
  { id: 1, author: 'Ana Lima', handle: 'analima', time: 'há 2h', likes: 42, comments: 8, liked: false, tags: ['curta', 'cinema'], content: 'Finalmente terminei meu primeiro curta-metragem! Foram 6 meses de trabalho e muito aprendizado. Está no catálogo agora - quem quiser ver!' },
  { id: 2, author: 'Bruno Costa', handle: 'brunocosta', time: 'há 5h', likes: 15, comments: 22, liked: true, tags: ['documentário', 'luz'], content: 'Alguém tem dicas de iluminação natural para filmagem em ambientes internos? Estou trabalhando num documentário e ainda não consegui o resultado que quero.' },
  { id: 3, author: 'Carla Dias', handle: 'carladias', time: 'há 1d', likes: 88, comments: 14, liked: false, tags: ['animação', 'obra'], content: 'Acabei de chegar da exibição no Festival de Cinema Independente. Ver a reação do público ao meu trabalho foi algo que não consigo descrever com palavras.' },
  { id: 4, author: 'Diego Melo', handle: 'diegomelo', time: 'há 1d', likes: 31, comments: 5, liked: false, tags: ['roteiro'], content: 'Compartilhando o roteiro comentado do meu último curta. Quem quiser trocar referências sobre narrativa não-linear, pode me chamar!' },
];
