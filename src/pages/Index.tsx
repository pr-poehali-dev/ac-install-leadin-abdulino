import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+79878786440";
const PHONE_DISPLAY = "+7 (987) 878-64-40";

const services = [
  { icon: "Wind", title: "Сплит-системы", desc: "Монтаж настенных кондиционеров любой марки — Haier, Daikin, Mitsubishi, LG и другие" },
  { icon: "Building2", title: "Коммерческие", desc: "Установка систем для офисов, магазинов и производственных помещений" },
  { icon: "Wrench", title: "Обслуживание", desc: "Чистка, заправка фреоном, ремонт кондиционеров любых марок" },
  { icon: "Thermometer", title: "Тепловые насосы", desc: "Монтаж систем обогрева/охлаждения — работают даже при -25°C" },
];

const guarantees = [
  { value: "3 года", label: "гарантия на оборудование", icon: "ShieldCheck" },
  { value: "2 года", label: "гарантия на монтажные работы", icon: "Hammer" },
  { value: "1 день", label: "срок установки под ключ", icon: "Clock" },
  { value: "10 лет", label: "опыт работы в Абдулино", icon: "Star" },
];

const faq = [
  { q: "Сколько стоит установка кондиционера?", a: "Стоимость зависит от типа и мощности оборудования. Выезд и замер — бесплатно. Позвоните нам, и мы рассчитаем цену за 5 минут." },
  { q: "Как долго длится установка?", a: "Стандартная установка сплит-системы занимает 2–4 часа. Сложные объекты — до 1 рабочего дня." },
  { q: "Вы работаете в частных домах?", a: "Да, устанавливаем кондиционеры в квартирах, частных домах, офисах и на производстве по всему Абдулино и ближайшим районам." },
  { q: "Входит ли вывоз мусора в стоимость?", a: "Да, мы убираем рабочее место и вывозим всю упаковку после монтажа." },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-body text-white font-medium text-lg hover:bg-white/5 transition-colors"
      >
        <span>{q}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={20} className="shrink-0 ml-4 text-cyan-400" />
      </button>
      {open && (
        <div className="px-6 pb-5 text-white/60 font-body leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function Index() {
  const services2 = useInView();
  const guarantees2 = useInView();
  const faq2 = useInView();

  return (
    <div className="min-h-screen font-body" style={{ background: "#060b18" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(6,11,24,0.85)", backdropFilter: "blur(16px)" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)" }}>
            <Icon name="Wind" size={16} className="text-white" />
          </div>
          <span className="font-heading text-white text-xl tracking-wide">ХОЛОД<span className="text-cyan-400">МАСТЕР</span></span>
        </div>
        <a href={`tel:${PHONE}`}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-body transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#fff" }}>
          <Icon name="Phone" size={15} />
          {PHONE_DISPLAY}
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* bg effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)", filter: "blur(80px)" }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #0066ff 0%, transparent 70%)", filter: "blur(80px)" }} />
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Работаем в Абдулино и районе
            </div>

            <h1 className="font-heading text-5xl lg:text-7xl text-white leading-none mb-6 tracking-wide">
              УСТАНОВКА<br />
              <span style={{ background: "linear-gradient(90deg, #00d4ff, #0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                КОНДИЦИОНЕРОВ
              </span><br />
              ПОД КЛЮЧ
            </h1>

            <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-md">
              Монтаж за 1 день. Гарантия <strong className="text-white">3 года</strong> на оборудование и <strong className="text-white">2 года</strong> на работы.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-medium text-lg transition-all hover:scale-105 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", boxShadow: "0 0 40px rgba(0,212,255,0.3)" }}>
                <Icon name="Phone" size={20} />
                Позвонить сейчас
              </a>
              <a href="#services"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
                Наши услуги
                <Icon name="ArrowDown" size={18} />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in hidden lg:block">
            <div className="absolute inset-0 rounded-3xl opacity-50"
              style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,102,255,0.2))", filter: "blur(20px)", transform: "scale(1.05)" }} />
            <img
              src="https://cdn.poehali.dev/projects/893a9675-92f9-4132-9091-301f63c56c20/files/adac0043-4c58-49cc-b5c0-8009166e0458.jpg"
              alt="Установка кондиционера"
              className="relative rounded-3xl w-full object-cover aspect-square"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            />
            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl"
              style={{ background: "rgba(6,11,24,0.9)", border: "1px solid rgba(0,212,255,0.3)", backdropFilter: "blur(12px)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)" }}>
                  <Icon name="ShieldCheck" size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-heading text-xl tracking-wide">3 ГОДА</div>
                  <div className="text-white/50 text-sm">гарантия на оборудование</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative" ref={services2.ref}>
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${services2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-body text-cyan-400 text-sm tracking-widest uppercase mb-3">Что мы делаем</p>
            <h2 className="font-heading text-4xl lg:text-6xl text-white tracking-wide">НАШИ УСЛУГИ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i}
                className={`rounded-2xl p-6 transition-all duration-700 hover:scale-105 cursor-default group`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transitionDelay: `${i * 100}ms`,
                  opacity: services2.inView ? 1 : 0,
                  transform: services2.inView ? "translateY(0)" : "translateY(30px)",
                }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,102,255,0.2))", border: "1px solid rgba(0,212,255,0.2)" }}>
                  <Icon name={s.icon} fallback="Wind" size={22} className="text-cyan-400" />
                </div>
                <h3 className="font-heading text-white text-xl tracking-wide mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-24 relative" ref={guarantees2.ref}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(0,102,255,0.05) 100%)" }} />
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${guarantees2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-body text-cyan-400 text-sm tracking-widest uppercase mb-3">Уверенность в качестве</p>
            <h2 className="font-heading text-4xl lg:text-6xl text-white tracking-wide">НАШИ ГАРАНТИИ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <div key={i}
                className="rounded-2xl p-8 text-center transition-all duration-700"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  transitionDelay: `${i * 100}ms`,
                  opacity: guarantees2.inView ? 1 : 0,
                  transform: guarantees2.inView ? "translateY(0)" : "translateY(30px)",
                }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)" }}>
                  <Icon name={g.icon} fallback="ShieldCheck" size={24} className="text-white" />
                </div>
                <div className="font-heading text-4xl text-white tracking-wide mb-1"
                  style={{ background: "linear-gradient(90deg, #00d4ff, #0066ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {g.value}
                </div>
                <div className="text-white/50 text-sm leading-relaxed">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO BLOCK */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden relative" style={{ maxHeight: 400 }}>
            <img
              src="https://cdn.poehali.dev/projects/893a9675-92f9-4132-9091-301f63c56c20/files/96ba90e4-8035-476e-84b4-8bbf3a531b54.jpg"
              alt="Кондиционер"
              className="w-full object-cover"
              style={{ maxHeight: 400 }}
            />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(6,11,24,0.7), rgba(0,102,255,0.4))" }}>
              <div className="text-center text-white px-6">
                <h3 className="font-heading text-4xl lg:text-6xl tracking-wide mb-4">БЕСПЛАТНЫЙ ВЫЕЗД<br />И ЗАМЕР</h3>
                <p className="text-white/70 text-lg mb-8">Приедем, оценим объём работ и рассчитаем стоимость без обязательств</p>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-medium text-lg transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", boxShadow: "0 0 40px rgba(0,212,255,0.4)" }}>
                  <Icon name="PhoneCall" size={20} />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" ref={faq2.ref}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className={`text-center mb-16 transition-all duration-700 ${faq2.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-body text-cyan-400 text-sm tracking-widest uppercase mb-3">Ответы на вопросы</p>
            <h2 className="font-heading text-4xl lg:text-6xl text-white tracking-wide">FAQ</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACTS */}
      <footer className="py-16 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)" }}>
                  <Icon name="Wind" size={18} className="text-white" />
                </div>
                <span className="font-heading text-white text-2xl tracking-wide">ХОЛОД<span className="text-cyan-400">МАСТЕР</span></span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">Профессиональная установка кондиционеров в Абдулино и Оренбургской области</p>
            </div>

            <div>
              <h4 className="font-heading text-white text-lg tracking-wide mb-4">КОНТАКТЫ</h4>
              <div className="flex flex-col gap-3">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors">
                  <Icon name="Phone" size={16} className="text-cyan-400" />
                  {PHONE_DISPLAY}
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <Icon name="MapPin" size={16} className="text-cyan-400" />
                  г. Абдулино, Оренбургская область
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Icon name="Clock" size={16} className="text-cyan-400" />
                  Пн–Вс: 8:00 — 20:00
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-white text-lg tracking-wide mb-4">ПОЗВОНИТЕ НАМ</h4>
              <p className="text-white/40 text-sm mb-4">Бесплатный выезд и замер. Ответим на все вопросы.</p>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)" }}>
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 text-center text-white/20 text-sm" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            © 2026 ХолодМастер — Абдулино
          </div>
        </div>
      </footer>
    </div>
  );
}