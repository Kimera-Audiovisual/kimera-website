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
        author: 'Maria Oliveira',
        handle: 'mariaoliveira',
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
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--aegean-900)', marginBottom: 20 }}>
          Rede
        </h1>

        <div
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: 16,
            marginBottom: 20,
            boxShadow: 'var(--shadow-xs)',
          }}
        >
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <Image src="https://i.pravatar.cc/80?img=3" alt="Você" fill sizes="40px" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <textarea
                value={compose}
                onChange={(e) => setCompose(e.target.value)}
                placeholder="O que está criando hoje?"
                rows={3}
                style={{
                  width: '100%',
                  border: 'none',
                  resize: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  color: 'var(--text-body)',
                  outline: 'none',
                  lineHeight: 1.55,
                  background: 'transparent',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: 10,
                  marginTop: 6,
                }}
              >
                <div style={{ display: 'flex', gap: 8, color: 'var(--text-muted)' }}>{IC.upload(18)}</div>
                <Button size="sm" onClick={submit} disabled={!compose.trim()}>Publicar</Button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {posts.map((p) => (
            <PostCard key={p.id} author={p.author} authorHandle={p.handle} content={p.content} timestamp={p.time} likes={p.likes} comments={p.comments} tags={p.tags} liked={p.liked} />
          ))}
        </div>
      </div>
    </div>
  );
}
