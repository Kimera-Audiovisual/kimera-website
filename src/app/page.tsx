'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { IC } from '@/components/icons';

const FEATURES = [
  { icon: IC.film(32), title: 'Catálogo', desc: 'Curtas, documentários e obras audiovisuais reunidas em uma plataforma feita para artistas.' },
  { icon: IC.network(32), title: 'Rede', desc: 'Compartilhe ideias, troque referências e conecte-se com a comunidade audiovisual brasileira.' },
  { icon: IC.user(32), title: 'Perfil', desc: 'Apresente seu trabalho e construa sua identidade como artista de forma profissional.' },
] as const;

export default function LandingPage() {
  const router = useRouter();
  const onEnter = () => router.push('/login');
  const onRegister = () => router.push('/home');

  return (
    <div className="min-h-screen bg-aegean-950 overflow-y-auto">
      <header className="flex items-center justify-between px-5 py-4 md:px-12 md:py-5 border-b border-b-[rgba(233,216,166,0.10)]">
        <div>
          <div className="font-display text-[22px] font-black tracking-[0.18em] text-papyrus-400">KIMERA</div>
          <div className="font-sans text-[10px] tracking-[0.16em] text-aegean-300 mt-[2px]">AUDIOVISUAL</div>
        </div>
        <div className="flex gap-[10px]">
          <Button variant="ghost-dark" size="sm" onClick={onEnter}>Entrar</Button>
          <Button variant="secondary" size="sm" onClick={onRegister}>Criar conta</Button>
        </div>
      </header>

      <div className="px-5 pt-10 pb-10 md:px-12 md:pt-20 md:pb-[60px] flex flex-col md:flex-row items-center gap-8 md:gap-[60px] max-w-[1100px] mx-auto">
        <div className="flex-1">
          <div className="font-sans text-[11px] font-bold tracking-[0.2em] text-papyrus-600 mb-4">
            REDE SOCIAL · AUDIOVISUAL
          </div>
          <h1 className="font-display text-[40px] md:text-[64px] font-black tracking-[0.08em] text-papyrus-300 leading-[1.05] mb-5">
            Sua obra<br />merece<br />ser vista.
          </h1>
          <div className="h-[2px] w-20 bg-[linear-gradient(90deg,var(--papyrus-600),transparent)] mb-6" />
          <p className="font-serif italic text-[16px] md:text-[20px] text-ink-400 leading-relaxed mb-9 max-w-[440px]">
            A Kimera Audiovisual é a plataforma onde artistas e estudantes de audiovisual compartilham obras, constroem redes e fazem história.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button size="lg" onClick={onRegister}>Criar conta gratuita</Button>
            <Button variant="outline" size="lg" onClick={onEnter} style={{ borderColor: 'rgba(233,216,166,0.4)', color: 'var(--papyrus-400)' }}>
              Explorar catálogo
            </Button>
          </div>
        </div>

        <div className="shrink-0 w-full md:w-[400px] max-w-[400px] h-[350px] md:h-[450px] rounded-xl overflow-hidden relative bg-[linear-gradient(135deg,var(--aegean-800),var(--aegean-900))]">
          <Image
            src="/assets/quimera.png"
            alt="Kimera"
            fill
            priority
            sizes="360px"
            className="object-contain pt-12 px-14 pb-28 invert opacity-[0.18]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="font-serif italic text-[19px] text-papyrus-400 leading-snug text-center">
              &quot;Assim como a quimera, a arte une o que parecia inconciliável.&quot;
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,transparent,var(--papyrus-600),transparent)]" />
        </div>
      </div>

      <div className="px-5 pb-14 md:px-12 md:pb-20 max-w-[1100px] mx-auto">
        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(233,216,166,0.2),transparent)] mb-9 md:mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white/[0.04] border border-[rgba(233,216,166,0.10)] rounded-xl px-6 py-7">
              <div className="text-papyrus-600 mb-4">{f.icon}</div>
              <div className="font-display font-bold tracking-[0.08em] text-papyrus-300 mb-[10px]">
                {f.title}
              </div>
              <p className="font-sans text-[14px] text-ink-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
