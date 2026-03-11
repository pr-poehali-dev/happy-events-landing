import { useState } from "react";
import Icon from "@/components/ui/icon";

const CONFETTI_ITEMS = ["🎊", "🎉", "✨", "🌟", "💫", "🎈", "🎀", "🥂"];

function ConfettiDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {CONFETTI_ITEMS.map((item, i) => (
        <span
          key={i}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${(i * 13 + 5) % 100}%`,
            top: `${(i * 17 + 10) % 80}%`,
            animationDelay: `${i * 0.4}s`,
            fontSize: `${1 + (i % 3) * 0.5}rem`,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

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
          <span className="text-2xl">🎉</span>
          <span className="font-display text-lg font-bold text-white leading-tight">Студия Счастливых Событий</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact-form" className="btn-gold px-5 py-2 rounded-full text-sm font-semibold">
            Заказать праздник
          </a>
        </div>
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/90 font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact-form" className="btn-gold px-5 py-3 rounded-full text-center font-semibold" onClick={() => setOpen(false)}>
            Заказать праздник
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden pt-16">
      <ConfettiDecor />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,180,50,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(220,100,180,0.15),transparent_60%)]" />
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
            <a href="#contact-form" className="btn-gold px-8 py-4 rounded-full text-lg font-semibold text-center">
              🎉 Заказать праздник
            </a>
            <a href="#calculator" className="glass border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-white/20 transition-all">
              Получить консультацию
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

const ADVANTAGES = [
  { emoji: "⭐", title: "Организация под ключ", desc: "Берём на себя всё — от идеи до финального салюта" },
  { emoji: "📝", title: "Авторские сценарии", desc: "Каждый праздник уникален, создаём концепцию с нуля" },
  { emoji: "🎤", title: "Профессиональные ведущие", desc: "Опытные ведущие, которые зажигают любую аудиторию" },
  { emoji: "🎨", title: "Дизайнерское оформление", desc: "Декор, который создаёт неповторимую атмосферу" },
  { emoji: "🎭", title: "Шоу и артисты", desc: "Живая музыка, фокусники, акробаты и многое другое" },
  { emoji: "💜", title: "Индивидуальный подход", desc: "Слушаем, понимаем и воплощаем именно ваши мечты" },
  { emoji: "🏛️", title: "Помощь с площадкой", desc: "Подберём идеальное место под любой бюджет" },
  { emoji: "🛡️", title: "Полный контроль", desc: "Вы отдыхаете, мы контролируем каждую деталь" },
];

function Advantages() {
  return (
    <section className="py-24 confetti-bg">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">✨</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Почему выбирают{" "}
            <span className="text-gradient-purple">нас</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            8 лет опыта и 500+ счастливых клиентов — наша лучшая рекомендация
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((a, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl hover:border-brand-purple/30">
              <div className="text-3xl mb-3">{a.emoji}</div>
              <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { emoji: "💍", title: "Свадьбы", desc: "Создаём свадьбу мечты: от интимной церемонии до грандиозного торжества. Авторский декор, координация и полное сопровождение.", color: "from-rose-100 to-pink-50", accent: "text-rose-600" },
  { emoji: "🏢", title: "Корпоративы", desc: "Укрепляем командный дух и создаём атмосферу праздника для вашей компании. Тимбилдинги, награждения, юбилеи.", color: "from-purple-100 to-indigo-50", accent: "text-purple-600" },
  { emoji: "🎂", title: "Дни рождения", desc: "Незабываемый праздник для любого возраста. Тематические вечеринки, сюрпризы, шоу-программа под ключ.", color: "from-amber-100 to-yellow-50", accent: "text-amber-600" },
  { emoji: "🎈", title: "Детские праздники", desc: "Волшебный мир для ваших детей: аниматоры, квесты, мастер-классы и яркое шоу. Безопасно и незабываемо.", color: "from-green-100 to-emerald-50", accent: "text-emerald-600" },
  { emoji: "🎭", title: "Тематические вечеринки", desc: "Гэтсби, Гарри Поттер, 80-е, Голливуд — создаём полное погружение в любую эпоху или мир.", color: "from-blue-100 to-cyan-50", accent: "text-blue-600" },
  { emoji: "🎤", title: "Шоу-программы", desc: "Живые выступления, музыканты, фокусники, акробаты, файер-шоу — яркое зрелище для ваших гостей.", color: "from-orange-100 to-red-50", accent: "text-orange-600" },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🎪</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-gradient-gold">услуги</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Организуем любой праздник — от камерного ужина до масштабного торжества
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className={`card-hover rounded-2xl p-8 bg-gradient-to-br ${s.color} border border-white`}>
              <div className="text-5xl mb-4">{s.emoji}</div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href="#contact-form" className={`text-sm font-semibold ${s.accent} flex items-center gap-1 hover:gap-2 transition-all`}>
                Подробнее <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PORTFOLIO = [
  { emoji: "💍", title: "Свадьба Дарьи и Михаила", type: "Свадьба в стиле Прованс", guests: "120 гостей", concept: "Лавандовые поля, белоснежные драпировки, живые цветы", result: "Пара получила свадьбу мечты, фото разошлись по соцсетям", color: "from-rose-400 to-pink-500" },
  { emoji: "🏢", title: "Юбилей компании TechCorp", type: "Корпоратив 10-летие", guests: "250 сотрудников", concept: "Гала-ужин + тимбилдинг + живой концерт", result: "Укрепили командный дух, получили 5★ от руководства", color: "from-purple-400 to-indigo-500" },
  { emoji: "🎂", title: "День рождения Анны, 30 лет", type: "Тематическая вечеринка", guests: "60 гостей", concept: "Великий Гэтсби: джаз, перья, золото и шампанское", result: "Гости танцевали до утра, именинница в восторге", color: "from-amber-400 to-orange-500" },
  { emoji: "🎈", title: "День рождения Максима, 7 лет", type: "Детский праздник", guests: "30 детей", concept: "Мир супергероев с квестом и сюрпризами", result: "Дети в восторге, родители уже бронируют снова", color: "from-green-400 to-emerald-500" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">📸</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Примеры наших <span className="text-gradient-purple">работ</span>
          </h2>
          <p className="text-muted-foreground text-lg">Реальные истории счастливых клиентов</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO.map((p, i) => (
            <div key={i} className="card-hover rounded-2xl overflow-hidden border border-border shadow-sm">
              <div className={`bg-gradient-to-br ${p.color} h-48 flex items-center justify-center`}>
                <span className="text-8xl">{p.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">{p.type}</span>
                  <span className="text-xs text-muted-foreground">{p.guests}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong className="text-foreground">Концепция:</strong> {p.concept}
                </p>
                <p className="text-sm text-emerald-600 font-medium flex items-center gap-1">
                  <Icon name="CheckCircle" size={14} />
                  {p.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { num: "01", emoji: "📋", title: "Заявка", desc: "Оставляете заявку на сайте или звоните нам. Отвечаем в течение 15 минут." },
  { num: "02", emoji: "💬", title: "Консультация", desc: "Обсуждаем вашу идею, пожелания, бюджет и дату мероприятия." },
  { num: "03", emoji: "✏️", title: "Разработка сценария", desc: "Создаём уникальный сценарий и концепцию специально для вас." },
  { num: "04", emoji: "🔧", title: "Подготовка", desc: "Организуем всё: площадку, декор, артистов, кейтеринг и технику." },
  { num: "05", emoji: "🎉", title: "Праздник!", desc: "Проводим мероприятие, вы наслаждаетесь каждым моментом." },
];

function Process() {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🗺️</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Как мы <span className="text-gradient-gold">работаем</span>
          </h2>
          <p className="text-muted-foreground text-lg">5 простых шагов к вашему идеальному празднику</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple via-brand-gold to-brand-rose mx-32" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 rounded-full gradient-purple flex items-center justify-center text-4xl mb-4 shadow-lg relative z-10">
                  {s.emoji}
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
    <section id="calculator" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🧮</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Рассчитайте <span className="text-gradient-gold">стоимость</span>
          </h2>
          <p className="text-muted-foreground text-lg">Примерный расчёт за несколько секунд</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-border p-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-3">Тип мероприятия</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {EVENT_TYPES.map(e => (
                <button
                  key={e.value}
                  onClick={() => setEventType(e.value)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium border-2 transition-all ${eventType === e.value ? "border-brand-purple bg-brand-purple text-white" : "border-border text-foreground hover:border-brand-purple/50"}`}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              Количество гостей: <span className="text-brand-purple">{guests}</span>
            </label>
            <input
              type="range" min={10} max={500} step={10} value={guests}
              onChange={e => setGuests(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-brand-purple"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>10</span><span>500</span>
            </div>
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
                  <input type="checkbox" checked={opt.state} onChange={e => opt.set(e.target.checked)} className="accent-brand-purple w-4 h-4" />
                  <span className="text-sm font-medium text-foreground">{opt.label}</span>
                </div>
                <span className="text-xs text-muted-foreground">{opt.price}</span>
              </label>
            ))}
          </div>
          <div className="bg-gradient-to-r from-brand-purple/10 to-brand-rose/10 rounded-2xl p-6 text-center mb-6">
            <p className="text-sm text-muted-foreground mb-1">Примерная стоимость</p>
            <p className="font-display text-5xl font-bold text-brand-purple">
              от {total.toLocaleString("ru-RU")} ₽
            </p>
            <p className="text-xs text-muted-foreground mt-2">*точная стоимость рассчитывается после консультации</p>
          </div>
          <a href="#contact-form" className="btn-purple w-full py-4 rounded-xl block text-center text-white font-semibold text-lg">
            Получить точный расчёт
          </a>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: "Анастасия К.", event: "Свадьба", text: "Студия организовала нашу свадьбу просто идеально! Каждая деталь была продумана до мелочей. Гости до сих пор вспоминают этот вечер. Огромное спасибо всей команде!", stars: 5, emoji: "💍" },
  { name: "Дмитрий В.", event: "Корпоратив", text: "Организовали корпоратив на 200 человек. Ни одного сбоя, все строго по плану и даже лучше. Сотрудники в восторге, будем обращаться снова!", stars: 5, emoji: "🏢" },
  { name: "Мария Л.", event: "День рождения дочки", text: "Заказали детский праздник для дочки 8 лет. Дети были в полном восторге! Аниматоры профессионалы, игры, конкурсы — всё на высшем уровне.", stars: 5, emoji: "🎈" },
  { name: "Алексей П.", event: "Юбилей 40 лет", text: "Отмечал юбилей и хотел что-то особенное. Студия превзошла все ожидания: тематика Гэтсби, живой джаз, невероятный декор. Лучший праздник в моей жизни!", stars: 5, emoji: "🎂" },
  { name: "Елена С.", event: "Свадьба", text: "Доверились полностью и не пожалели. Команда взяла на себя всё. Я наслаждалась праздником, не думая ни о чём. Это бесценно!", stars: 5, emoji: "💜" },
  { name: "Сергей М.", event: "Новогодний корпоратив", text: "Новогодний корпоратив удался на славу! Шоу-программа, живая музыка, фееричное оформление зала. Коллеги были в восторге весь вечер.", stars: 5, emoji: "🎄" },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">⭐</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Отзывы <span className="text-gradient-purple">клиентов</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1,2,3,4,5].map(s => <span key={s} className="text-brand-gold text-2xl">★</span>)}
            <span className="font-bold text-foreground ml-2">5.0</span>
            <span className="text-muted-foreground">· 200+ отзывов</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center text-2xl">
                  {r.emoji}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.event}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(r.stars)].map((_, si) => <span key={si} className="text-brand-gold">★</span>)}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OFFERS = [
  { emoji: "⏰", badge: "Раннее бронирование", title: "Скидка 10% на любое мероприятие", desc: "При бронировании за 3+ месяца до даты события", color: "from-purple-500 to-indigo-600" },
  { emoji: "🎁", badge: "Бесплатно", title: "Консультация с менеджером", desc: "Разработаем концепцию и примерный бюджет без обязательств", color: "from-amber-500 to-orange-500" },
  { emoji: "🎂", badge: "Подарок", title: "Сюрприз для именинника", desc: "При заказе дня рождения — специальный сюрприз в подарок", color: "from-rose-500 to-pink-600" },
  { emoji: "🎭", badge: "Бонус", title: "Бесплатная шоу-программа", desc: "При заказе свадьбы на 100+ гостей включаем шоу бесплатно", color: "from-emerald-500 to-teal-600" },
];

function Offers() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🎁</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Специальные <span className="text-gradient-gold">предложения</span>
          </h2>
          <p className="text-muted-foreground text-lg">Ограниченные офферы для наших клиентов</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERS.map((o, i) => (
            <div key={i} className={`card-hover rounded-2xl p-6 bg-gradient-to-br ${o.color} text-white`}>
              <span className="text-xs font-bold bg-white/20 rounded-full px-3 py-1 inline-block mb-4">{o.badge}</span>
              <div className="text-4xl mb-3">{o.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{o.title}</h3>
              <p className="text-sm opacity-85 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Emotions() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <ConfettiDecor />
      <div className="container relative z-10 text-center">
        <span className="text-6xl block mb-8 animate-float">💜</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Мы создаём не просто праздники.<br />
          <span className="text-gradient-gold italic">Мы создаём эмоции,</span>
        </h2>
        <p className="text-xl text-white/75 max-w-2xl mx-auto mb-10">
          которые остаются в памяти на всю жизнь. Каждый смех, каждая слеза радости, каждый момент восторга — это наша работа.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {"💃🕺🎆🥂🎊💋🌹🎵".split("").map((e, i) => (
            <span key={i} className="text-4xl animate-float" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", event: "", date: "", guests: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="py-24 confetti-bg">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">📬</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Оставьте <span className="text-gradient-purple">заявку</span>
            </h2>
            <p className="text-muted-foreground text-lg">Ответим в течение 15 минут в рабочее время</p>
          </div>
          {submitted ? (
            <div className="bg-white rounded-3xl shadow-xl border border-border p-12 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-3">Заявка отправлена!</h3>
              <p className="text-muted-foreground">Наш менеджер свяжется с вами в течение 15 минут. Готовимся создать ваш идеальный праздник!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-border p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Ваше имя *</label>
                  <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Мария" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-brand-purple focus:outline-none transition-colors text-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Телефон *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+7 (999) 000-00-00" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-brand-purple focus:outline-none transition-colors text-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Тип мероприятия</label>
                  <select value={form.event} onChange={e => setForm({...form, event: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-brand-purple focus:outline-none transition-colors text-foreground bg-white">
                    <option value="">Выберите...</option>
                    <option>Свадьба</option>
                    <option>Корпоратив</option>
                    <option>День рождения</option>
                    <option>Детский праздник</option>
                    <option>Тематическая вечеринка</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Дата события</label>
                  <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-brand-purple focus:outline-none transition-colors text-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Количество гостей</label>
                  <input type="number" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} placeholder="50" className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-brand-purple focus:outline-none transition-colors text-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Ваши пожелания</label>
                  <textarea rows={1} value={form.comment} onChange={e => setForm({...form, comment: e.target.value})} placeholder="Расскажите о вашей идее..." className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-brand-purple focus:outline-none transition-colors text-foreground resize-none" />
                </div>
              </div>
              <button type="submit" className="btn-purple w-full py-4 rounded-xl text-white font-semibold text-lg">
                🎉 Получить предложение
              </button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                🔒 Гарантируем конфиденциальность ваших данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  { q: "Сколько стоит организация мероприятия?", a: "Стоимость зависит от типа мероприятия, количества гостей и набора услуг. Воспользуйтесь нашим калькулятором для примерного расчёта или оставьте заявку — рассчитаем точную смету бесплатно." },
  { q: "За сколько времени нужно бронировать?", a: "Рекомендуем бронировать за 2-3 месяца. Для свадеб лучше за 6+ месяцев. При раннем бронировании действует скидка 10%. Принимаем заявки и за 2-3 недели при наличии дат." },
  { q: "Что входит в организацию «под ключ»?", a: "Разработка концепции, сценарий, выбор площадки, декор, ведущий, артисты, кейтеринг, фото/видео, координация в день события. Вы просто приезжаете и наслаждаетесь праздником." },
  { q: "Можно ли заказать только часть услуг?", a: "Да, конечно! Мы гибко подходим к каждому запросу. Можно заказать только ведущего, только декор или только помощь в организации. Обсудим ваши потребности на консультации." },
  { q: "Работаете ли вы с небольшим бюджетом?", a: "Да, мы умеем создавать праздники любого масштаба. Расскажите нам ваш бюджет на консультации — предложим лучшее решение в ваших рамках." },
  { q: "Как проходит первая встреча?", a: "Онлайн или офлайн — как вам удобно. За 30-60 минут обсуждаем идеи, пожелания, бюджет. Уходите с примерным планом. Совершенно бесплатно." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">❓</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Частые <span className="text-gradient-gold">вопросы</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-foreground hover:bg-muted/30 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <Icon name={open === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-brand-purple flex-shrink-0" />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">📍</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-purple">Свяжитесь</span> с нами
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              { emoji: "📞", title: "Телефон", val: "+7 (999) 000-00-00", sub: "Звоните в любое время" },
              { emoji: "💬", title: "WhatsApp / Telegram", val: "+7 (999) 000-00-00", sub: "Напишите нам прямо сейчас" },
              { emoji: "📸", title: "Instagram", val: "@studio_happy_events", sub: "Следите за нашими работами" },
              { emoji: "📍", title: "Офис", val: "г. Москва, ул. Праздничная, 1", sub: "Пн–Пт: 10:00–19:00" },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border hover:border-brand-purple/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center text-xl flex-shrink-0">
                  {c.emoji}
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{c.title}</p>
                  <p className="font-bold text-foreground">{c.val}</p>
                  <p className="text-xs text-muted-foreground">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-brand-purple/10 to-brand-rose/10 rounded-3xl p-8 border border-brand-purple/20">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">Давайте создадим ваш идеальный праздник</h3>
            <p className="text-muted-foreground mb-6">Оставьте заявку или позвоните нам — обсудим вашу идею и предложим лучшее решение.</p>
            <a href="#contact-form" className="btn-purple inline-block px-8 py-4 rounded-xl text-white font-semibold text-center w-full">
              🎉 Заказать мероприятие
            </a>
            <div className="mt-6 pt-6 border-t border-brand-purple/20 flex gap-4 justify-center">
              {["💜", "✨", "🎊", "🌟"].map((e, i) => (
                <span key={i} className="text-2xl animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <ConfettiDecor />
      <div className="container relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Давайте создадим ваш<br />
          <span className="text-gradient-gold italic">идеальный праздник</span>
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
          500+ счастливых событий уже состоялось. Следующий праздник — ваш!
        </p>
        <a href="#contact-form" className="btn-gold inline-block px-12 py-5 rounded-full text-xl font-bold shadow-2xl">
          🎉 Заказать мероприятие
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎉</span>
            <span className="font-display text-lg font-bold text-white">Студия Счастливых Событий</span>
          </div>
          <p className="text-sm">© 2024 Все права защищены</p>
          <div className="flex gap-4 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href="#contact-form" className="hover:text-white transition-colors">Заявка</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen font-body">
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
      <ContactForm />
      <FAQ />
      <Contacts />
      <FinalCTA />
      <Footer />
    </div>
  );
}
