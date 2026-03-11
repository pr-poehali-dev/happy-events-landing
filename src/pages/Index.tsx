import { useState } from "react";
import Icon from "@/components/ui/icon";

const TG = "https://t.me/Sergeevich_103";

/* ── Праздничный анимированный фон ── */
const PARTICLES = [
  { x: 8, y: 15, size: 18, delay: 0, shape: "circle", color: "#f59e0b" },
  { x: 20, y: 70, size: 12, delay: 0.6, shape: "star", color: "#a855f7" },
  { x: 35, y: 25, size: 22, delay: 1.2, shape: "circle", color: "#ec4899" },
  { x: 50, y: 80, size: 10, delay: 0.3, shape: "diamond", color: "#f59e0b" },
  { x: 65, y: 10, size: 16, delay: 0.9, shape: "star", color: "#a855f7" },
  { x: 75, y: 60, size: 20, delay: 1.5, shape: "circle", color: "#ec4899" },
  { x: 88, y: 30, size: 14, delay: 0.4, shape: "diamond", color: "#f59e0b" },
  { x: 92, y: 75, size: 18, delay: 1.1, shape: "star", color: "#a855f7" },
  { x: 45, y: 45, size: 8, delay: 0.7, shape: "circle", color: "#ec4899" },
  { x: 15, y: 50, size: 11, delay: 1.8, shape: "diamond", color: "#f59e0b" },
  { x: 55, y: 55, size: 14, delay: 2.1, shape: "star", color: "#a855f7" },
  { x: 82, y: 18, size: 9, delay: 0.5, shape: "circle", color: "#ec4899" },
];

function ParticleShape({ shape, color, size }: { shape: string; color: string; size: number }) {
  if (shape === "star") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
  if (shape === "diamond") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="12,2 22,12 12,22 2,12" />
    </svg>
  );
  return <div style={{ width: size, height: size, borderRadius: "50%", background: color }} />;
}

function FestiveBg() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden>
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-[0.12]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${p.delay}s`, animationDuration: `${3 + (i % 3)}s` }}
        >
          <ParticleShape shape={p.shape} color={p.color} size={p.size} />
        </div>
      ))}
      {/* Twinkling dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full animate-pulse opacity-[0.08]"
          style={{
            left: `${(i * 17 + 3) % 100}%`,
            top: `${(i * 11 + 7) % 100}%`,
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            background: i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#a855f7" : "#ec4899",
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Иллюстрации-иконки ── */
function IlluKey() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <circle cx="24" cy="24" r="14" stroke="#a855f7" strokeWidth="4" fill="#f3e8ff"/>
      <circle cx="24" cy="24" r="7" fill="#a855f7"/>
      <rect x="34" y="22" width="20" height="6" rx="3" fill="#f59e0b"/>
      <rect x="48" y="28" width="6" height="8" rx="2" fill="#f59e0b"/>
      <rect x="40" y="28" width="5" height="6" rx="2" fill="#f59e0b"/>
      <circle cx="24" cy="24" r="3" fill="white"/>
    </svg>
  );
}
function IlluScroll() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <rect x="10" y="8" width="44" height="48" rx="6" fill="#f3e8ff" stroke="#a855f7" strokeWidth="3"/>
      <path d="M18 20h28M18 30h28M18 40h18" stroke="#a855f7" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="48" cy="48" r="10" fill="#f59e0b"/>
      <path d="M44 48l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IlluMic() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <rect x="22" y="6" width="20" height="32" rx="10" fill="#a855f7"/>
      <rect x="26" y="10" width="12" height="4" rx="2" fill="#f3e8ff" opacity="0.5"/>
      <path d="M14 30c0 9.94 8.06 18 18 18s18-8.06 18-18" stroke="#a855f7" strokeWidth="4" strokeLinecap="round"/>
      <line x1="32" y1="48" x2="32" y2="58" stroke="#a855f7" strokeWidth="4" strokeLinecap="round"/>
      <line x1="22" y1="58" x2="42" y2="58" stroke="#a855f7" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="48" cy="14" r="8" fill="#f59e0b"/>
      <path d="M45 14l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IlluPalette() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 6C17.64 6 6 17.64 6 32c0 8.84 7.16 16 16 16 2.21 0 4-1.79 4-4 0-1.01-.38-1.93-1-2.64-.59-.68-.97-1.57-.97-2.36C24 37.79 25.79 36 28 36h6c8.84 0 16-7.16 16-16C50 14.27 42 6 32 6z" fill="#f3e8ff" stroke="#a855f7" strokeWidth="3"/>
      <circle cx="20" cy="26" r="4" fill="#ec4899"/>
      <circle cx="28" cy="16" r="4" fill="#f59e0b"/>
      <circle cx="40" cy="18" r="4" fill="#a855f7"/>
      <circle cx="46" cy="28" r="4" fill="#10b981"/>
      <circle cx="31" cy="46" r="4" fill="#a855f7"/>
    </svg>
  );
}
function IlluMasks() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <ellipse cx="22" cy="32" rx="16" ry="20" fill="#f3e8ff" stroke="#a855f7" strokeWidth="3"/>
      <path d="M14 28c2-2 6-2 8 0M18 36h8" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="18" cy="24" r="2" fill="#a855f7"/>
      <ellipse cx="42" cy="32" rx="16" ry="20" fill="#fff3cd" stroke="#f59e0b" strokeWidth="3"/>
      <path d="M34 36c2 2 6 2 8 0M38 28h8" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="42" cy="24" r="2" fill="#f59e0b"/>
    </svg>
  );
}
function IlluHeart() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 54S8 40 8 22c0-7.73 6.27-14 14-14 4.19 0 7.95 1.84 10.53 4.76L32 12l-.47-.24C34.05 9.84 37.81 8 42 8c7.73 0 14 6.27 14 14C56 40 32 54 32 54z" fill="#fce7f3" stroke="#ec4899" strokeWidth="3"/>
      <path d="M20 26c0 4 3 8 7 10" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="48" cy="14" r="7" fill="#f59e0b"/>
      <path d="M45 14l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IlluBuilding() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <rect x="8" y="20" width="48" height="36" rx="4" fill="#ede9fe" stroke="#a855f7" strokeWidth="3"/>
      <rect x="20" y="36" width="10" height="20" rx="2" fill="#a855f7"/>
      <rect x="34" y="36" width="10" height="12" rx="2" fill="#a855f7" opacity="0.5"/>
      <rect x="14" y="28" width="8" height="6" rx="1" fill="#f59e0b"/>
      <rect x="28" y="28" width="8" height="6" rx="1" fill="#f59e0b"/>
      <rect x="42" y="28" width="8" height="6" rx="1" fill="#f59e0b"/>
      <path d="M4 20L32 6l28 14" stroke="#a855f7" strokeWidth="3" strokeLinejoin="round"/>
      <circle cx="50" cy="14" r="8" fill="#ec4899"/>
      <path d="M47 14l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IlluShield() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 6L10 16v18c0 13.25 9.37 25.65 22 29 12.63-3.35 22-15.75 22-29V16L32 6z" fill="#f3e8ff" stroke="#a855f7" strokeWidth="3"/>
      <path d="M22 32l7 7 13-14" stroke="#a855f7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="12" r="8" fill="#f59e0b"/>
      <path d="M47 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Иллюстрации услуг ── */
function IlluWedding() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="28" cy="32" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.5"/>
      <circle cx="52" cy="32" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.5"/>
      <path d="M40 20C40 20 36 10 28 10s-12 6-12 6M40 20C40 20 44 10 52 10s12 6 12 6" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 50s4 10 18 10 18-10 18-10" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="40" cy="32" r="6" fill="#ec4899"/>
      <path d="M37 32l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="64" cy="16" r="8" fill="#f59e0b"/>
      <text x="60" y="20" fontSize="10" fill="white">💍</text>
    </svg>
  );
}
function IlluCorp() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <rect x="10" y="30" width="60" height="40" rx="6" fill="#ede9fe" stroke="#a855f7" strokeWidth="2.5"/>
      <rect x="22" y="44" width="12" height="26" rx="2" fill="#a855f7"/>
      <rect x="46" y="44" width="12" height="26" rx="2" fill="#a855f7" opacity="0.6"/>
      <rect x="16" y="38" width="10" height="6" rx="1" fill="#f59e0b"/>
      <rect x="35" y="38" width="10" height="6" rx="1" fill="#f59e0b"/>
      <rect x="54" y="38" width="10" height="6" rx="1" fill="#f59e0b"/>
      <path d="M6 30L40 10l34 20" stroke="#a855f7" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="63" cy="19" r="10" fill="#ec4899"/>
      <text x="58" y="23" fontSize="12" fill="white">🎉</text>
    </svg>
  );
}
function IlluBirthday() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <rect x="14" y="46" width="52" height="26" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5"/>
      <path d="M20 46V36a4 4 0 018 0v10M36 46V36a4 4 0 018 0v10M52 46V36a4 4 0 018 0v10" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="24" cy="34" rx="4" ry="6" fill="#ec4899"/>
      <ellipse cx="40" cy="34" rx="4" ry="6" fill="#a855f7"/>
      <ellipse cx="56" cy="34" rx="4" ry="6" fill="#f59e0b"/>
      <circle cx="24" cy="28" r="3" fill="#f59e0b"/>
      <circle cx="40" cy="28" r="3" fill="#ec4899"/>
      <circle cx="56" cy="28" r="3" fill="#a855f7"/>
      <path d="M20 58h40" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
      <circle cx="64" cy="14" r="10" fill="#a855f7"/>
      <text x="59" y="18" fontSize="12" fill="white">🎂</text>
    </svg>
  );
}
function IlluKids() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="28" r="18" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5"/>
      <circle cx="34" cy="24" r="3" fill="#10b981"/>
      <circle cx="46" cy="24" r="3" fill="#10b981"/>
      <path d="M33 34c0 0 3 5 7 5s7-5 7-5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="22" cy="28" rx="4" ry="6" fill="#f59e0b"/>
      <ellipse cx="58" cy="28" rx="4" ry="6" fill="#ec4899"/>
      <path d="M28 60c0-7 6-12 12-12s12 5 12 12" fill="#d1fae5" stroke="#10b981" strokeWidth="2.5"/>
      <path d="M20 64h40" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="63" cy="14" r="10" fill="#f59e0b"/>
      <text x="58" y="18" fontSize="12" fill="white">🎈</text>
    </svg>
  );
}
function IlluParty() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <path d="M40 14L14 66h52L40 14z" fill="#ede9fe" stroke="#a855f7" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M40 14L14 66" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M40 14L66 66" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M22 50h36" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="40" cy="14" r="5" fill="#f59e0b"/>
      <circle cx="14" cy="66" r="5" fill="#ec4899"/>
      <circle cx="66" cy="66" r="5" fill="#a855f7"/>
      <circle cx="64" cy="14" r="10" fill="#10b981"/>
      <text x="59" y="18" fontSize="12" fill="white">🎭</text>
    </svg>
  );
}
function IlluShow() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <ellipse cx="40" cy="50" rx="28" ry="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
      <rect x="16" y="20" width="48" height="30" rx="4" fill="#fff" stroke="#f59e0b" strokeWidth="2.5"/>
      <circle cx="40" cy="35" r="10" fill="#f59e0b"/>
      <path d="M36 35l3 3 5-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 20L40 8l24 12" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="40" cy="8" r="4" fill="#ec4899"/>
      <circle cx="63" cy="14" r="10" fill="#a855f7"/>
      <text x="58" y="18" fontSize="12" fill="white">🎤</text>
    </svg>
  );
}

/* ── Nav ── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#process", label: "Как работаем" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
            <circle cx="16" cy="16" r="14" fill="#a855f7"/>
            <path d="M10 22s2-8 6-8 6 8 6 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="10" r="3" fill="#f59e0b"/>
            <path d="M8 14c2-3 5-2 8 0 3-2 6-3 8 0" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="font-display text-lg font-bold text-white leading-tight hidden sm:block">Студия Счастливых Событий</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">{l.label}</a>
          ))}
          <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-gold px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            Написать
          </a>
        </div>
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/90 font-medium" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-gold px-5 py-3 rounded-full text-center font-semibold" onClick={() => setOpen(false)}>
            Написать в Telegram
          </a>
        </div>
      )}
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,180,50,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_80%,rgba(168,85,247,0.15),transparent_55%)]" />
        {/* Animated sparkles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute animate-float opacity-30"
            style={{ left: `${(i * 14 + 5) % 95}%`, top: `${(i * 11 + 8) % 80}%`, animationDelay: `${i * 0.5}s` }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill={i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#ec4899" : "#a855f7"}>
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          </div>
        ))}
      </div>
      <div className="container relative z-10 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-white/90 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            Более 500 счастливых мероприятий
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
            Организуем праздник,<br />
            который{" "}
            <span className="text-gradient-gold italic">запомнится</span>
            <br />на всю жизнь
          </h1>
          <p className="text-xl text-white/75 mb-10 max-w-2xl animate-fade-up delay-200">
            Организация свадеб, корпоративов, дней рождения и детских праздников под ключ. Авторские сценарии, профессиональные ведущие, дизайнерское оформление.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-300">
            <a href={TG} target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-full text-lg font-semibold text-center flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
              Заказать праздник
            </a>
            <a href="#calculator" className="glass border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-white/20 transition-all">
              Рассчитать стоимость
            </a>
          </div>
          <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
            {[
              { num: "500+", label: "мероприятий" },
              { num: "8 лет", label: "опыта" },
              { num: "98%", label: "довольных клиентов" },
              { num: "24/7", label: "поддержка" },
            ].map(s => (
              <div key={s.num} className="text-center">
                <div className="font-display text-3xl font-bold text-brand-gold">{s.num}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ── Advantages ── */
const ADVANTAGES = [
  { Icon: IlluKey, title: "Организация под ключ", desc: "Берём на себя всё — от идеи до финального салюта" },
  { Icon: IlluScroll, title: "Авторские сценарии", desc: "Каждый праздник уникален, создаём концепцию с нуля" },
  { Icon: IlluMic, title: "Профессиональные ведущие", desc: "Опытные ведущие, которые зажигают любую аудиторию" },
  { Icon: IlluPalette, title: "Дизайнерское оформление", desc: "Декор, который создаёт неповторимую атмосферу" },
  { Icon: IlluMasks, title: "Шоу и артисты", desc: "Живая музыка, фокусники, акробаты и многое другое" },
  { Icon: IlluHeart, title: "Индивидуальный подход", desc: "Слушаем, понимаем и воплощаем именно ваши мечты" },
  { Icon: IlluBuilding, title: "Помощь с площадкой", desc: "Подберём идеальное место под любой бюджет" },
  { Icon: IlluShield, title: "Полный контроль", desc: "Вы отдыхаете, мы контролируем каждую деталь" },
];

function Advantages() {
  return (
    <section className="py-24 relative z-10">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Почему выбирают <span className="text-gradient-purple">нас</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">8 лет опыта и 500+ счастливых клиентов — наша лучшая рекомендация</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((a, i) => (
            <div key={i} className="card-hover bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl hover:border-brand-purple/30">
              <div className="mb-4"><a.Icon /></div>
              <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
const SERVICES = [
  { IlluComp: IlluWedding, title: "Свадьбы", desc: "Создаём свадьбу мечты: от интимной церемонии до грандиозного торжества. Авторский декор, координация и полное сопровождение.", color: "from-rose-100 to-pink-50", accent: "text-rose-600" },
  { IlluComp: IlluCorp, title: "Корпоративы", desc: "Укрепляем командный дух и создаём атмосферу праздника для вашей компании. Тимбилдинги, награждения, юбилеи.", color: "from-purple-100 to-indigo-50", accent: "text-purple-600" },
  { IlluComp: IlluBirthday, title: "Дни рождения", desc: "Незабываемый праздник для любого возраста. Тематические вечеринки, сюрпризы, шоу-программа под ключ.", color: "from-amber-100 to-yellow-50", accent: "text-amber-600" },
  { IlluComp: IlluKids, title: "Детские праздники", desc: "Волшебный мир для ваших детей: аниматоры, квесты, мастер-классы и яркое шоу. Безопасно и незабываемо.", color: "from-green-100 to-emerald-50", accent: "text-emerald-600" },
  { IlluComp: IlluParty, title: "Тематические вечеринки", desc: "Гэтсби, Гарри Поттер, 80-е, Голливуд — создаём полное погружение в любую эпоху или мир.", color: "from-blue-100 to-cyan-50", accent: "text-blue-600" },
  { IlluComp: IlluShow, title: "Шоу-программы", desc: "Живые выступления, музыканты, фокусники, акробаты, файер-шоу — яркое зрелище для ваших гостей.", color: "from-orange-100 to-red-50", accent: "text-orange-600" },
];

function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-purple mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Наши <span className="text-gradient-gold">услуги</span></h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Организуем любой праздник — от камерного ужина до масштабного торжества</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className={`card-hover rounded-2xl p-8 bg-gradient-to-br ${s.color} border border-white/80`}>
              <div className="mb-4"><s.IlluComp /></div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href={TG} target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold ${s.accent} flex items-center gap-1 hover:gap-2 transition-all`}>
                Обсудить <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Portfolio ── */
const PORTFOLIO = [
  { color: "from-rose-400 to-pink-500", title: "Свадьба Дарьи и Михаила", type: "Свадьба в стиле Прованс", guests: "120 гостей", concept: "Лавандовые поля, белоснежные драпировки, живые цветы", result: "Пара получила свадьбу мечты, фото разошлись по соцсетям", IlluComp: IlluWedding },
  { color: "from-purple-400 to-indigo-500", title: "Юбилей компании TechCorp", type: "Корпоратив 10-летие", guests: "250 сотрудников", concept: "Гала-ужин + тимбилдинг + живой концерт", result: "Укрепили командный дух, получили 5★ от руководства", IlluComp: IlluCorp },
  { color: "from-amber-400 to-orange-500", title: "День рождения Анны, 30 лет", type: "Тематическая вечеринка", guests: "60 гостей", concept: "Великий Гэтсби: джаз, перья, золото и шампанское", result: "Гости танцевали до утра, именинница в восторге", IlluComp: IlluParty },
  { color: "from-green-400 to-emerald-500", title: "День рождения Максима, 7 лет", type: "Детский праздник", guests: "30 детей", concept: "Мир супергероев с квестом и сюрпризами", result: "Дети в восторге, родители уже бронируют снова", IlluComp: IlluKids },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
              <polyline points="21,15 16,10 5,21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Примеры наших <span className="text-gradient-purple">работ</span></h2>
          <p className="text-muted-foreground text-lg">Реальные истории счастливых клиентов</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO.map((p, i) => (
            <div key={i} className="card-hover rounded-2xl overflow-hidden border border-border shadow-sm bg-white">
              <div className={`bg-gradient-to-br ${p.color} h-48 flex items-center justify-center`}>
                <div className="scale-[2.5] opacity-90"><p.IlluComp /></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">{p.type}</span>
                  <span className="text-xs text-muted-foreground">{p.guests}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Концепция:</strong> {p.concept}</p>
                <p className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                  <Icon name="CheckCircle" size={14} />{p.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ── */
const STEPS = [
  { num: "01", title: "Заявка", desc: "Пишете в Telegram. Отвечаем в течение 15 минут.",
    Illu: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#ede9fe"/>
        <path d="M14 30l5-10 5 5 5-8 5 13" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="34" cy="16" r="5" fill="#f59e0b"/>
        <path d="M32 16l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { num: "02", title: "Консультация", desc: "Обсуждаем идею, пожелания, бюджет и дату.",
    Illu: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#fce7f3"/>
        <rect x="10" y="14" width="18" height="14" rx="3" fill="#ec4899" opacity="0.3" stroke="#ec4899" strokeWidth="2"/>
        <path d="M10 25l3 5h15" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="20" y="20" width="18" height="12" rx="3" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2"/>
        <path d="M20 29l3 4h15" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { num: "03", title: "Сценарий", desc: "Создаём уникальный сценарий специально для вас.",
    Illu: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#fef3c7"/>
        <rect x="12" y="10" width="24" height="30" rx="3" fill="white" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M17 18h14M17 23h14M17 28h9" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="12" r="6" fill="#a855f7"/>
        <path d="M31 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { num: "04", title: "Подготовка", desc: "Организуем всё: площадку, декор, артистов, технику.",
    Illu: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#d1fae5"/>
        <path d="M16 28a8 8 0 1116 0" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="18" y="28" width="12" height="8" rx="2" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2"/>
        <path d="M20 20l4-8 4 8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="12" r="3" fill="#f59e0b"/>
      </svg>
    )
  },
  { num: "05", title: "Праздник!", desc: "Проводим мероприятие, вы наслаждаетесь каждым моментом.",
    Illu: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#f3e8ff"/>
        <circle cx="24" cy="24" r="10" fill="#a855f7" opacity="0.2"/>
        <path d="M24 14v3M24 31v3M14 24h3M31 24h3M17 17l2 2M29 29l2 2M17 31l2-2M29 19l2-2" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="#f59e0b"/>
      </svg>
    )
  },
];

function Process() {
  return (
    <section id="process" className="py-24 relative z-10 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Как мы <span className="text-gradient-gold">работаем</span></h2>
          <p className="text-muted-foreground text-lg">5 простых шагов к вашему идеальному празднику</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple via-brand-gold to-brand-rose mx-32" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-28 h-28 rounded-full bg-white border-2 border-brand-purple/20 flex items-center justify-center mb-4 shadow-lg relative z-10">
                  <s.Illu />
                </div>
                <div className="text-xs font-bold text-brand-gold mb-1">{s.num}</div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Calculator ── */
const EVENT_TYPES = [
  { value: "wedding", label: "Свадьба", base: 150000 },
  { value: "corporate", label: "Корпоратив", base: 80000 },
  { value: "birthday", label: "День рождения", base: 50000 },
  { value: "kids", label: "Детский праздник", base: 30000 },
  { value: "party", label: "Тематическая вечеринка", base: 40000 },
];

function Calculator() {
  const [eventType, setEventType] = useState("wedding");
  const [guests, setGuests] = useState(50);
  const [withHost, setWithHost] = useState(false);
  const [withShow, setWithShow] = useState(false);
  const [withDecor, setWithDecor] = useState(false);
  const [withPhoto, setWithPhoto] = useState(false);
  const base = EVENT_TYPES.find(e => e.value === eventType)?.base || 50000;
  const total = base + guests * 800 + (withHost ? 25000 : 0) + (withShow ? 35000 : 0) + (withDecor ? 40000 : 0) + (withPhoto ? 30000 : 0);

  return (
    <section id="calculator" className="py-24 relative z-10">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
              <rect x="4" y="2" width="16" height="20" rx="2" stroke="white" strokeWidth="2"/>
              <line x1="8" y1="10" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="14" x2="16" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="18" x2="12" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 6h1M12 6h1M16 6h1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Рассчитайте <span className="text-gradient-gold">стоимость</span></h2>
          <p className="text-muted-foreground text-lg">Примерный расчёт за несколько секунд</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-border p-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-3">Тип мероприятия</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {EVENT_TYPES.map(e => (
                <button key={e.value} onClick={() => setEventType(e.value)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium border-2 transition-all ${eventType === e.value ? "border-brand-purple bg-brand-purple text-white" : "border-border text-foreground hover:border-brand-purple/50"}`}>
                  {e.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Количество гостей: <span className="text-brand-purple">{guests}</span>
            </label>
            <input type="range" min={10} max={500} step={10} value={guests} onChange={e => setGuests(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-brand-purple"/>
            <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>10</span><span>500</span></div>
          </div>
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { state: withHost, set: setWithHost, label: "🎤 Ведущий", price: "+25 000 ₽" },
              { state: withShow, set: setWithShow, label: "🎭 Шоу-программа", price: "+35 000 ₽" },
              { state: withDecor, set: setWithDecor, label: "🌸 Декор", price: "+40 000 ₽" },
              { state: withPhoto, set: setWithPhoto, label: "📸 Фото и видео", price: "+30 000 ₽" },
            ].map((opt, i) => (
              <label key={i} className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${opt.state ? "border-brand-purple bg-brand-purple/5" : "border-border hover:border-brand-purple/30"}`}>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={opt.state} onChange={e => opt.set(e.target.checked)} className="accent-brand-purple w-4 h-4"/>
                  <span className="text-sm font-medium text-foreground">{opt.label}</span>
                </div>
                <span className="text-xs text-muted-foreground">{opt.price}</span>
              </label>
            ))}
          </div>
          <div className="bg-gradient-to-r from-brand-purple/10 to-brand-rose/10 rounded-2xl p-6 text-center mb-6">
            <p className="text-sm text-muted-foreground mb-1">Примерная стоимость</p>
            <p className="font-display text-5xl font-bold text-brand-purple">от {total.toLocaleString("ru-RU")} ₽</p>
            <p className="text-xs text-muted-foreground mt-2">*точная стоимость рассчитывается после консультации</p>
          </div>
          <a href={TG} target="_blank" rel="noopener noreferrer"
            className="btn-purple w-full py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-lg">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
            Получить точный расчёт в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Reviews ── */
const REVIEWS = [
  { name: "Анастасия К.", event: "Свадьба", text: "Студия организовала нашу свадьбу просто идеально! Каждая деталь была продумана до мелочей. Гости до сих пор вспоминают этот вечер. Огромное спасибо!", stars: 5, IlluComp: IlluWedding },
  { name: "Дмитрий В.", event: "Корпоратив", text: "Организовали корпоратив на 200 человек. Ни одного сбоя, все строго по плану и даже лучше. Сотрудники в восторге, будем обращаться снова!", stars: 5, IlluComp: IlluCorp },
  { name: "Мария Л.", event: "Детский праздник", text: "Заказали детский праздник для дочки 8 лет. Дети были в полном восторге! Аниматоры профессионалы, игры, конкурсы — всё на высшем уровне.", stars: 5, IlluComp: IlluKids },
  { name: "Алексей П.", event: "Юбилей 40 лет", text: "Отмечал юбилей и хотел что-то особенное. Студия превзошла все ожидания: тематика Гэтсби, живой джаз, невероятный декор. Лучший праздник в жизни!", stars: 5, IlluComp: IlluParty },
  { name: "Елена С.", event: "Свадьба", text: "Доверились полностью и не пожалели. Команда взяла на себя всё. Я наслаждалась праздником, не думая ни о чём. Это бесценно!", stars: 5, IlluComp: IlluWedding },
  { name: "Сергей М.", event: "Новогодний корпоратив", text: "Новогодний корпоратив удался на славу! Шоу-программа, живая музыка, фееричное оформление зала. Коллеги были в восторге весь вечер.", stars: 5, IlluComp: IlluShow },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 relative z-10 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-300 mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Отзывы <span className="text-gradient-purple">клиентов</span></h2>
          <div className="flex justify-center items-center gap-1 mb-2">
            {[1,2,3,4,5].map(s => <span key={s} className="text-brand-gold text-2xl">★</span>)}
            <span className="font-bold text-foreground ml-2">5.0</span>
            <span className="text-muted-foreground ml-1">· 200+ отзывов</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card-hover bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-purple/10 to-brand-rose/10 flex items-center justify-center border border-brand-purple/20">
                  <r.IlluComp />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.event}</p>
                </div>
              </div>
              <div className="flex mb-3">{[...Array(r.stars)].map((_, si) => <span key={si} className="text-brand-gold">★</span>)}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Offers ── */
const OFFERS = [
  { title: "Скидка 10%", desc: "При бронировании за 3+ месяца до даты события", badge: "Раннее бронирование", color: "from-purple-500 to-indigo-600",
    Illu: () => <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10"><circle cx="20" cy="20" r="16" fill="white" fillOpacity="0.2"/><path d="M12 28l16-16M14 16a2 2 0 100-4 2 2 0 000 4zM26 28a2 2 0 100-4 2 2 0 000 4z" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg> },
  { title: "Консультация", desc: "Разработаем концепцию и смету без обязательств — бесплатно", badge: "Бесплатно", color: "from-amber-500 to-orange-500",
    Illu: () => <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10"><circle cx="20" cy="20" r="16" fill="white" fillOpacity="0.2"/><path d="M12 16h16M12 21h10M20 28l6-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Сюрприз имениннику", desc: "При заказе дня рождения — специальный сюрприз в подарок", badge: "Подарок", color: "from-rose-500 to-pink-600",
    Illu: () => <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10"><circle cx="20" cy="20" r="16" fill="white" fillOpacity="0.2"/><rect x="12" y="20" width="16" height="12" rx="2" stroke="white" strokeWidth="2"/><path d="M20 20v-6M12 20h16" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M20 14c0 0-2-4-4-3s-1 3 4 3zM20 14c0 0 2-4 4-3s1 3-4 3z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { title: "Шоу-программа", desc: "При свадьбе на 100+ гостей включаем шоу бесплатно", badge: "Бонус", color: "from-emerald-500 to-teal-600",
    Illu: () => <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10"><circle cx="20" cy="20" r="16" fill="white" fillOpacity="0.2"/><polygon points="16,13 28,20 16,27" fill="white"/></svg> },
];

function Offers() {
  return (
    <section className="py-24 relative z-10">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Специальные <span className="text-gradient-gold">предложения</span></h2>
          <p className="text-muted-foreground text-lg">Ограниченные офферы для наших клиентов</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERS.map((o, i) => (
            <div key={i} className={`card-hover rounded-2xl p-6 bg-gradient-to-br ${o.color} text-white`}>
              <span className="text-xs font-bold bg-white/20 rounded-full px-3 py-1 inline-block mb-4">{o.badge}</span>
              <div className="mb-3"><o.Illu /></div>
              <h3 className="font-bold text-lg mb-2">{o.title}</h3>
              <p className="text-sm opacity-85 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Emotions ── */
function Emotions() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden z-10">
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute animate-float opacity-20"
            style={{ left: `${(i * 9 + 3) % 95}%`, top: `${(i * 7 + 5) % 85}%`, animationDelay: `${i * 0.4}s` }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill={i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#ec4899" : "white"}>
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          </div>
        ))}
      </div>
      <div className="container relative z-10 text-center">
        <div className="w-20 h-20 mx-auto mb-8 animate-float">
          <svg viewBox="0 0 80 80" fill="none">
            <path d="M40 68S10 50 10 28c0-10 8.18-18 18-18 5.35 0 10.13 2.38 13.5 6.16L40 16l-1.5-1.84C42.37 12.38 47.15 10 52.5 10c9.82 0 18 8 18 18C70 50 40 68 40 68z" fill="#f59e0b"/>
            <path d="M25 32c0 5 4 10 9 13" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Мы создаём не просто праздники.<br />
          <span className="text-gradient-gold italic">Мы создаём эмоции,</span>
        </h2>
        <p className="text-xl text-white/75 max-w-2xl mx-auto mb-10">
          которые остаются в памяти на всю жизнь. Каждый смех, каждая слеза радости, каждый момент восторга — это наша работа.
        </p>
        <a href={TG} target="_blank" rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold shadow-2xl">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
          Написать нам в Telegram
        </a>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const FAQ_ITEMS = [
  { q: "Сколько стоит организация мероприятия?", a: "Стоимость зависит от типа мероприятия, количества гостей и набора услуг. Воспользуйтесь нашим калькулятором для примерного расчёта или напишите нам в Telegram — рассчитаем точную смету бесплатно." },
  { q: "За сколько времени нужно бронировать?", a: "Рекомендуем бронировать за 2-3 месяца. Для свадеб лучше за 6+ месяцев. При раннем бронировании действует скидка 10%. Принимаем заявки и за 2-3 недели при наличии дат." },
  { q: "Что входит в организацию «под ключ»?", a: "Разработка концепции, сценарий, выбор площадки, декор, ведущий, артисты, кейтеринг, фото/видео, координация в день события. Вы просто приезжаете и наслаждаетесь праздником." },
  { q: "Можно ли заказать только часть услуг?", a: "Да, конечно! Мы гибко подходим к каждому запросу. Можно заказать только ведущего, только декор или только помощь в организации. Обсудим ваши потребности на консультации." },
  { q: "Работаете ли вы с небольшим бюджетом?", a: "Да, мы умеем создавать праздники любого масштаба. Расскажите нам ваш бюджет в Telegram — предложим лучшее решение в ваших рамках." },
  { q: "Как быстро вы отвечаете?", a: "Обычно в течение 15 минут в рабочее время. Напишите нам в Telegram @Sergeevich_103 — мы всегда на связи и готовы обсудить вашу идею." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 relative z-10 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-500 mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Частые <span className="text-gradient-gold">вопросы</span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-foreground hover:bg-muted/30 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <Icon name={open === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-brand-purple flex-shrink-0"/>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contacts ── */
function Contacts() {
  return (
    <section id="contacts" className="py-24 relative z-10">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-purple mb-4 shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-purple">Свяжитесь</span> с нами
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            {[
              { title: "Telegram", val: "@Sergeevich_103", sub: "Пишите — ответим за 15 минут", href: TG,
                Illu: () => (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <circle cx="20" cy="20" r="18" fill="#229ED9"/>
                    <path d="M28.7 12.3l-2.8 13.2c-.2.9-.76 1.13-1.54.7l-4.27-3.15-2.06 1.98c-.23.23-.42.42-.86.42l.3-4.34 7.91-7.15c.34-.3-.07-.47-.53-.17l-9.77 6.15-4.21-1.31c-.91-.29-.93-.91.19-1.35l16.45-6.34c.76-.28 1.43.19 1.18 1.34z" fill="white"/>
                  </svg>
                )
              },
              { title: "WhatsApp", val: "+7 (999) 000-00-00", sub: "Напишите нам прямо сейчас", href: "#",
                Illu: () => (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <circle cx="20" cy="20" r="18" fill="#25D366"/>
                    <path d="M28 21.9c-.4-.2-2.35-1.16-2.71-1.29-.37-.13-.63-.2-.9.2-.26.39-1.03 1.29-1.26 1.56-.23.26-.47.29-.87.1-.4-.2-1.69-.62-3.22-1.99-1.19-1.06-1.99-2.37-2.22-2.77-.23-.4-.02-.61.17-.81.18-.18.4-.47.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68-.23-.01-.5-.02-.76-.02-.27 0-.7.1-1.06.5-.37.4-1.4 1.37-1.4 3.33 0 1.97 1.43 3.87 1.63 4.14.2.26 2.82 4.3 6.84 6.03 4.01 1.73 4.01 1.15 4.73 1.08.72-.07 2.35-.96 2.68-1.89.33-.92.33-1.72.23-1.88-.1-.17-.37-.27-.77-.47z" fill="white"/>
                  </svg>
                )
              },
              { title: "Instagram", val: "@studio_happy_events", sub: "Следите за нашими работами", href: "#",
                Illu: () => (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <circle cx="20" cy="20" r="18" fill="url(#ig)"/>
                    <defs>
                      <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433"/>
                        <stop offset="25%" stopColor="#e6683c"/>
                        <stop offset="50%" stopColor="#dc2743"/>
                        <stop offset="75%" stopColor="#cc2366"/>
                        <stop offset="100%" stopColor="#bc1888"/>
                      </linearGradient>
                    </defs>
                    <rect x="11" y="11" width="18" height="18" rx="5" stroke="white" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="2"/>
                    <circle cx="26" cy="14" r="1.5" fill="white"/>
                  </svg>
                )
              },
              { title: "Офис", val: "г. Москва, ул. Праздничная, 1", sub: "Пн–Пт: 10:00–19:00", href: "#",
                Illu: () => (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <circle cx="20" cy="20" r="18" fill="#f3e8ff"/>
                    <path d="M20 10a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" fill="#a855f7"/>
                    <circle cx="20" cy="17" r="3" fill="white"/>
                  </svg>
                )
              },
            ].map((c, i) => (
              <a key={i} href={c.href} target={c.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-border hover:border-brand-purple/30 hover:shadow-md transition-all">
                <div className="flex-shrink-0"><c.Illu /></div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{c.title}</p>
                  <p className="font-bold text-foreground">{c.val}</p>
                  <p className="text-xs text-muted-foreground">{c.sub}</p>
                </div>
                {c.href !== "#" && <Icon name="ExternalLink" size={14} className="ml-auto text-muted-foreground flex-shrink-0"/>}
              </a>
            ))}
          </div>
          <div className="bg-gradient-to-br from-brand-purple/10 to-brand-rose/10 rounded-3xl p-8 border border-brand-purple/20 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-6">
              <svg viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" fill="#f3e8ff"/>
                <path d="M32 52S14 40 14 28c0-9.94 8.06-18 18-18 5.35 0 10.13 2.38 13.5 6.16L32 20l-6.5-3.84C28.37 14.38 33.15 12 38.5 12c9.82 0 18 8 18 18C50 40 32 52 32 52z" fill="#a855f7"/>
                <circle cx="32" cy="26" r="6" fill="#f59e0b"/>
              </svg>
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4 text-center">Создадим ваш праздник вместе</h3>
            <p className="text-muted-foreground mb-6 text-center">Напишите нам в Telegram — обсудим идею и предложим лучшее решение уже сегодня.</p>
            <a href={TG} target="_blank" rel="noopener noreferrer"
              className="btn-purple flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold w-full">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
              Написать @Sergeevich_103
            </a>
            <div className="mt-6 pt-6 border-t border-brand-purple/20 flex gap-3 justify-center flex-wrap">
              {["💜", "✨", "🎊", "🌟", "🎉"].map((e, i) => (
                <span key={i} className="text-2xl animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden z-10">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute animate-float opacity-20"
            style={{ left: `${(i * 11 + 4) % 94}%`, top: `${(i * 9 + 6) % 84}%`, animationDelay: `${i * 0.5}s` }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill={i % 2 === 0 ? "#f59e0b" : "#ec4899"}>
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          </div>
        ))}
      </div>
      <div className="container relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Давайте создадим ваш<br />
          <span className="text-gradient-gold italic">идеальный праздник</span>
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">500+ счастливых событий уже состоялось. Следующий праздник — ваш!</p>
        <a href={TG} target="_blank" rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-3 px-12 py-5 rounded-full text-xl font-bold shadow-2xl">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
          🎉 Заказать мероприятие
        </a>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-10 relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
              <circle cx="16" cy="16" r="14" fill="#a855f7"/>
              <path d="M10 22s2-8 6-8 6 8 6 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="10" r="3" fill="#f59e0b"/>
            </svg>
            <span className="font-display text-lg font-bold text-white">Студия Счастливых Событий</span>
          </div>
          <p className="text-sm">© 2024 Все права защищены</p>
          <div className="flex gap-4 text-sm items-center">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href={TG} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Root ── */
export default function Index() {
  return (
    <div className="min-h-screen font-body relative bg-white">
      <FestiveBg />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Advantages />
        <Services />
        <Portfolio />
        <Process />
        <Calculator />
        <Reviews />
        <Offers />
        <Emotions />
        <FAQ />
        <Contacts />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
