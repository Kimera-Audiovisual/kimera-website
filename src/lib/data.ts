/* Mock content for the Kimera prototype. */

export const GENRES = [
  'Tudo',
  'Documentário',
  'Curta-Metragem',
  'Drama',
  'Ficção',
  'Experimental',
  'Animação',
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
  { title: 'O Mar de Dentro', genre: 'Documentário', year: '2024', dur: '18 min', rating: '8.7', src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=220&q=80' },
  { title: 'Velas ao Vento', genre: 'Curta-Metragem', year: '2023', dur: '12 min', rating: '7.9', src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=220&q=80' },
  { title: 'Silêncio Fértil', genre: 'Ficção', year: '2024', dur: '24 min', rating: '9.0', src: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=220&q=80' },
  { title: 'Fragmentos', genre: 'Experimental', year: '2023', dur: '8 min', rating: '9.1', src: 'https://images.unsplash.com/photo-1518715303843-586e350560cc?w=220&q=80' },
  { title: 'Luz Própria', genre: 'Drama', year: '2024', dur: '31 min', rating: '8.3', src: 'https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=220&q=80' },
  { title: 'Memória do Vento', genre: 'Documentário', year: '2023', dur: '42 min', rating: '8.5', src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=220&q=80' },
  { title: 'Ritual', genre: 'Curta-Metragem', year: '2024', dur: '14 min', rating: '7.6', src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=220&q=80' },
  { title: 'Deriva', genre: 'Ficção', year: '2024', dur: '19 min', rating: '8.8', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=220&q=80' },
];

export const POSTS: Post[] = [
  { id: 1, author: 'Ana Lima', handle: 'analima', time: 'há 2h', likes: 42, comments: 8, liked: false, tags: ['curta', 'cinema'], content: 'Finalmente terminei meu primeiro curta-metragem! Foram 6 meses de trabalho e muito aprendizado. Está no catálogo agora - quem quiser ver!' },
  { id: 2, author: 'Bruno Costa', handle: 'brunocosta', time: 'há 5h', likes: 15, comments: 22, liked: true, tags: ['documentário', 'luz'], content: 'Alguém tem dicas de iluminação natural para filmagem em ambientes internos? Estou trabalhando num documentário e ainda não consegui o resultado que quero.' },
  { id: 3, author: 'Carla Dias', handle: 'carladias', time: 'há 1d', likes: 88, comments: 14, liked: false, tags: ['animação', 'obra'], content: 'Acabei de chegar da exibição no Festival de Cinema Independente. Ver a reação do público ao meu trabalho foi algo que não consigo descrever com palavras.' },
  { id: 4, author: 'Diego Melo', handle: 'diegomelo', time: 'há 1d', likes: 31, comments: 5, liked: false, tags: ['roteiro'], content: 'Compartilhando o roteiro comentado do meu último curta. Quem quiser trocar referências sobre narrativa não-linear, pode me chamar!' },
];
