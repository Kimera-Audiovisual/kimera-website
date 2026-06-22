'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import PostCard from '@/components/ui/PostCard';
import { IC } from '@/components/icons';
import { POSTS, type Post } from '@/lib/data';

export default function RedePage() {
  const [compose, setCompose] = useState('');
  const [posts, setPosts] = useState<Post[]>(POSTS);

  const submit = () => {
    if (!compose.trim()) return;
    setPosts([
      {
        id: Date.now(),
        author: 'Marina Martins',
        handle: 'marinamartins',
        time: 'agora',
        likes: 0,
        comments: 0,
        liked: false,
        tags: [],
        content: compose,
      },
      ...posts,
    ]);
    setCompose('');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-page">
      <div className="max-w-[640px] mx-auto px-4 py-6 md:px-6 md:py-8">
        <h1 className="font-display text-[26px] font-bold tracking-[0.06em] text-aegean-900 mb-5">Rede</h1>

        <div className="bg-white border border-subtle rounded-card p-4 mb-5 shadow-xs">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative">
              <Image src="/assets/perfil.png" alt="Você" fill sizes="40px" className="object-cover" />
            </div>
            <div className="flex-1">
              <textarea
                value={compose}
                onChange={(e) => setCompose(e.target.value)}
                placeholder="O que está criando hoje?"
                rows={3}
                className="w-full border-0 resize-none font-sans text-[15px] text-body outline-none leading-[1.55] bg-transparent"
              />
              <div className="flex justify-between items-center border-t border-subtle pt-[10px] mt-[6px]">
                <div className="flex gap-2 text-muted">{IC.upload(18)}</div>
                <Button size="sm" onClick={submit} disabled={!compose.trim()}>Publicar</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {posts.map((p) => (
            <PostCard key={p.id} author={p.author} authorHandle={p.handle} content={p.content} timestamp={p.time} likes={p.likes} comments={p.comments} tags={p.tags} liked={p.liked} />
          ))}
        </div>
      </div>
    </div>
  );
}
