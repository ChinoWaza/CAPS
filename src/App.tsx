/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Users, 
  Gamepad2, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  ArrowLeft,
  Calendar,
  Newspaper,
  Play,
  CircleDot,
  Rocket
} from 'lucide-react';
import { 
  HAXBALL_ROSTER, 
  ROCKET_LEAGUE_ROSTER, 
  HAXBALL_TITLES, 
  ROCKET_LEAGUE_TITLES,
  SOCIAL_LINKS
} from './constants';

const NEWS_ITEMS = [
  {
    id: 1,
    title: "CAPS anuncia nueva indumentaria para la temporada 2026",
    date: "28/03/2026",
    category: "Club",
    content: "El club presenta su nueva piel inspirada en los colores del Río Negro y la naturaleza de Palmar. El diseño incorpora un patrón sutil que representa el flujo del agua de la represa, manteniendo el verde oscuro y azul marino característicos. Esta indumentaria será utilizada en todas las competencias oficiales a partir del próximo mes.",
    image: "https://i.ibb.co/3YLK59N4/image.png"
  },
  {
    id: 2,
    title: "Palmar Soriano se prepara para el torneo sudamericano de Haxball",
    date: "25/03/2026",
    category: "Haxball",
    content: "El equipo titular intensifica sus entrenamientos de cara al próximo gran desafío continental. Tras la reciente victoria en la Primera División, el plantel se siente con confianza plena. 'Estamos enfocados en traer otra copa a Palmar', declaró Praiz durante la sesión de entrenamiento matutina en el complejo digital del club.",
    image: "https://i.ibb.co/5XgWSsvk/palmarri.png"
  },
  {
    id: 3,
    title: "Entrevista exclusiva con Praiz: 'Queremos llevar a Palmar a lo más alto'",
    date: "20/03/2026",
    category: "Entrevista",
    content: "El capitán del equipo de Haxball habla sobre el crecimiento del club y los objetivos para este año. Destacó la importancia de la unión del grupo y el apoyo constante de la comunidad de Palmar. 'No somos solo un equipo de eSports, somos una representación de nuestro pueblo en el mundo digital', afirmó con orgullo.",
    image: "https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png"
  },
  {
    id: 4,
    title: "Mark se une al equipo titular de Rocket League",
    date: "15/03/2026",
    category: "Rocket League",
    content: "Tras una serie de pruebas exitosas, Mark se consolida como pieza clave para la Liga Sorianista. Su habilidad técnica y visión de juego han impresionado al cuerpo técnico. Mark, proveniente de Perú, se integra perfectamente a la dinámica del equipo junto a Coco e Infinithy para buscar nuevos títulos este fin de semana.",
    image: "https://i.ibb.co/3YLK59N4/image.png"
  }
];

const LEAGUE_ITEMS = [
  {
    game: "Haxball",
    leagues: [
      { name: "Hax365 League" },
      { name: "IPF" },
      { name: "AAF" }
    ],
    icon: <CircleDot className="w-8 h-8 text-accent" />
  },
  {
    game: "Rocket League",
    leagues: [
      { name: "Liga Sorianista" },
      { name: "Liga Turbo" },
      { name: "Liga Sudamericana" },
      { name: "Liga Zero Gravity" },
      { name: "Latam Nitro League" },
      { name: "URU Championship" }
    ],
    icon: <Rocket className="w-8 h-8 text-blue-400" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'news', or 'leagues'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Historia', href: '#historia' },
    { name: 'HaxBall', href: '#haxball' },
    { name: 'Rocket League', href: '#rocket-league' },
    { name: 'Títulos', href: '#titulos' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (currentView === 'news') {
    return (
      <div className="min-h-screen bg-secondary text-white font-sans selection:bg-accent selection:text-secondary">
        {/* News Header */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-secondary/90 backdrop-blur-md border-b border-white/5 py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button 
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-2 text-accent hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al Inicio
            </button>
            <div className="flex items-center gap-3">
              <img src="https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png" alt="CAPS" className="w-8 h-8 object-contain" />
              <span className="font-black italic tracking-tighter">NOTICIAS CAPS</span>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <header className="mb-16 text-center">
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 uppercase">Centro de Noticias</h1>
              <p className="text-gray-400 max-w-2xl mx-auto">Mantente al día con todas las novedades del Club Atlético Palmar Soriano, desde fichajes hasta resultados de torneos.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
              {NEWS_ITEMS.map((news) => (
                <motion.article 
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden relative">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-secondary text-[10px] font-black uppercase tracking-widest rounded-sm">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                      <Calendar className="w-3 h-3" /> {news.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-accent leading-tight">{news.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{news.content}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </main>

        <footer className="py-12 bg-secondary border-t border-white/5 text-center">
          <img src="https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png" alt="CAPS" className="w-12 h-12 mx-auto mb-4 object-contain opacity-50" />
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">© 2026 Club Atlético Palmar Soriano</p>
        </footer>
      </div>
    );
  }

  if (currentView === 'leagues') {
    return (
      <div className="min-h-screen bg-secondary text-white font-sans selection:bg-accent selection:text-secondary">
        {/* Leagues Header */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-secondary/90 backdrop-blur-md border-b border-white/5 py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button 
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-2 text-accent hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al Inicio
            </button>
            <div className="flex items-center gap-3">
              <img src="https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png" alt="CAPS" className="w-8 h-8 object-contain" />
              <span className="font-black italic tracking-tighter">LIGAS CAPS</span>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <header className="mb-16 text-center">
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 uppercase">Nuestras Ligas</h1>
              <p className="text-gray-400 max-w-2xl mx-auto">Conoce las competencias donde el Club Atlético Palmar Soriano deja su huella.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-12">
              {LEAGUE_ITEMS.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass p-8 rounded-3xl border border-white/10"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                        {item.icon}
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <h2 className="text-3xl font-black italic tracking-tighter uppercase">{item.game}</h2>
                        <span className="text-[10px] font-black bg-accent/20 text-accent px-2 py-1 rounded-full uppercase tracking-widest">
                          {item.leagues.length} Ligas
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.leagues.map((league, j) => (
                        <motion.div 
                          key={j} 
                          whileHover={{ scale: 1.02 }}
                          className="p-4 bg-secondary/40 backdrop-blur-md rounded-xl border border-white/5 hover:border-accent/30 transition-all group/item flex items-center gap-3"
                        >
                          <span className="text-[10px] font-mono text-white/20 group-hover/item:text-accent/50 transition-colors">
                            {String(j + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-lg font-bold text-accent/80 group-hover/item:text-accent transition-colors">{league.name}</h3>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <footer className="py-12 bg-secondary border-t border-white/5 text-center">
          <img src="https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png" alt="CAPS" className="w-12 h-12 mx-auto mb-4 object-contain opacity-50" />
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">© 2026 Club Atlético Palmar Soriano</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-accent selection:text-secondary">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-lg py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png" 
              alt="CAPS Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-base md:text-lg tracking-tighter hidden sm:block">PALMAR SORIANO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-secondary flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/3YLK59N4/image.png" 
            alt="Palmar Soriano"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/80 to-secondary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <img 
              src="https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png" 
              alt="CAPS Logo" 
              className="w-32 h-32 md:w-48 md:h-48 mb-8 object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              referrerPolicy="no-referrer"
            />
            <span className="inline-block px-4 py-1 bg-primary/30 border border-accent/30 rounded-full text-accent text-[10px] md:text-xs font-bold tracking-[0.2em] mb-6 uppercase">
              Club Amateur de eSports Uruguayo
            </span>
            <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter italic leading-none">
              CLUB ATLÉTICO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400 uppercase pr-4">Palmar Soriano</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light px-4">
              Club fundado con el unico proposito de representar a la localidad mas bella de Soriano
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#haxball" className="px-8 py-4 bg-primary hover:bg-emerald-800 text-white font-bold rounded-sm transition-all flex items-center gap-2 group border-b-4 border-emerald-950">
                VER EQUIPOS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="px-8 py-4 glass rounded-sm font-bold flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" /> 7 TÍTULOS TOTALES
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Match Section */}
      <section className="relative -mt-16 z-20 px-6">
        <div className="max-w-4xl mx-auto glass p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2">Último Partido</span>
            <div className="px-4 py-2 border border-accent/30 rounded text-accent text-xs font-bold uppercase tracking-widest">
              Victoria
            </div>
          </div>
          
          <div className="flex items-center gap-6 md:gap-12">
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-sm">PALMAR</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black italic tracking-tighter flex items-center gap-4">
                <span>2</span>
                <span className="text-accent text-2xl">-</span>
                <span>1</span>
              </div>
              <span className="text-[10px] text-gray-500 font-bold uppercase mt-2">Finalizado</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-sm uppercase">INTER MILAN</span>
            </div>
          </div>
          
          <a 
            href="https://www.youtube.com/watch?v=GIBgtoGc8pA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-48 aspect-video bg-black/40 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center group cursor-pointer relative"
          >
            <img src="https://img.youtube.com/vi/GIBgtoGc8pA/maxresdefault.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform" />
            <div className="relative z-10 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/40">
              <Play className="w-6 h-6 text-secondary ml-1 fill-current" />
            </div>
            <span className="absolute bottom-2 left-2 text-[8px] font-bold uppercase tracking-widest bg-black/60 px-2 py-1 rounded">Resumen</span>
          </a>
        </div>
      </section>

      {/* Navigation Shortcuts Section */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => setCurrentView('news')}
            className="px-10 py-5 glass hover:bg-accent hover:text-secondary transition-all rounded-sm font-black italic tracking-tighter text-2xl uppercase flex items-center gap-4 group"
          >
            Noticias <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <button 
            onClick={() => setCurrentView('leagues')}
            className="px-10 py-5 glass hover:bg-accent hover:text-secondary transition-all rounded-sm font-black italic tracking-tighter text-2xl uppercase flex items-center gap-4 group"
          >
            Ligas que jugamos <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="historia" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-8 italic tracking-tight gaming-border pb-4 uppercase">¿Qué es Palmar?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                Palmar es una localidad al noreste del departamento de <span className="text-white font-bold">Soriano (Uruguay)</span>. Su fundación se debe a la represa que se construyó en los años 80 para aprovechar la energía hidroeléctrica que ofrece el <span className="text-accent font-bold">Río Negro</span>.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                Es conocida más que nada por pescadores debido a su ubicación que incita esta actividad en la zona; junto al turismo, que, con la tranquilidad que ofrece el lugar (posee <span className="text-white">300 habitantes</span> según el censo 2023), se hace muy buen destino en vacaciones para despejarse.
              </p>

              <h2 className="text-3xl md:text-4xl font-black mb-8 italic tracking-tight gaming-border pb-4 uppercase">Club de eSports</h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                A inicios de 2025, uno de los admiradores que tiene la zona decidió fundar un club de eSports que la represente. Entonces, el <span className="text-accent font-bold">9 de marzo</span> se funda el <span className="text-white font-bold">Club Atlético Palmar Soriano</span>, equipo que hasta el momento juega dos juegos: Rocket League y Haxball.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                En <span className="text-white font-bold">Rocket League</span>, el equipo tiene dos títulos, y lo curioso es que los ganó el mismo fin de semana: la Liga Uruguaya el sábado 24/1/26 y la Liga Turbo el domingo 25. Además de una gran plantilla y buena dirigencia, con figuras como <span className="text-accent">Coco, Infinithy, Mark</span> entre otros.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                Mientras que en <span className="text-white font-bold">Haxball</span> (su primer juego), ya ha campeonado varias veces. Tiene cinco títulos hasta la fecha: cuatro en la liga <span className="italic">“Hax365 League”</span> y uno en la Liga Sorianista.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20"
            >
              <img 
                src="https://i.ibb.co/5XgWSsvk/palmarri.png" 
                alt="Palmar Landscape"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HaxBall Section */}
      <section id="haxball" className="py-24 bg-primary/10 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: `url(https://i.ibb.co/YmZzsY5/Untitled-image-44.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter">HAXBALL</h2>
            </div>
            <div className="flex gap-2">
              {HAXBALL_TITLES.map((title, i) => (
                <div key={i} className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center" title={`${title.name} (${title.date})`}>
                  <Trophy className="w-4 h-4 text-accent" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Roster */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {HAXBALL_ROSTER.map((player, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 glass rounded-lg flex items-center justify-between group hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-accent border border-accent/30">
                      {player.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{player.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">{player.country}</p>
                    </div>
                  </div>
                  <Users className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
                </motion.div>
              ))}
            </div>

            {/* Titles Card */}
            <div className="p-8 bg-secondary rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 italic">
                  <Trophy className="text-accent" /> PALMARÉS
                </h3>
                <ul className="space-y-4">
                  {HAXBALL_TITLES.map((title, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-medium">{title.name}</span>
                        <span className="text-[10px] text-gray-500 uppercase">{title.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="text-4xl font-black italic text-accent">5</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Títulos de HaxBall</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rocket League Section */}
      <section id="rocket-league" className="py-24 bg-secondary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: `url(https://i.ibb.co/7dCNmnq7/Untitled-image-45.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter">ROCKET LEAGUE</h2>
            </div>
            <div className="flex gap-2">
              {ROCKET_LEAGUE_TITLES.map((title, i) => (
                <div key={i} className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center" title={`${title.name} (${title.date})`}>
                  <Trophy className="w-4 h-4 text-blue-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Titles Card */}
            <div className="p-8 bg-primary/20 rounded-2xl border border-white/10 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 italic">
                  <Trophy className="text-blue-400" /> PALMARÉS
                </h3>
                <ul className="space-y-4">
                  {ROCKET_LEAGUE_TITLES.map((title, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-medium">{title.name}</span>
                        <span className="text-[10px] text-gray-500 uppercase">{title.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="text-4xl font-black italic text-blue-400">2</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Títulos de Rocket League</div>
              </div>
            </div>

            {/* Roster */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 order-1 lg:order-2">
              {ROCKET_LEAGUE_ROSTER.map((player, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 glass rounded-lg flex items-center justify-between group hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center font-bold text-blue-400 border border-blue-400/30">
                      {player.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{player.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">{player.country}</p>
                    </div>
                  </div>
                  <Gamepad2 className="w-5 h-5 text-white/20 group-hover:text-blue-400 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Titles Section */}
      <section id="titulos" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-16 italic tracking-tighter">RESUMEN DE GLORIA</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CircleDot className="w-32 h-32 text-white" />
              </div>
              <div className="text-6xl font-black text-accent mb-2">5</div>
              <div className="text-xl font-bold italic mb-2">HAXBALL</div>
              <div className="h-1 w-12 bg-accent/30 mx-auto rounded-full" />
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 bg-white text-secondary rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <div className="text-8xl font-black mb-2">7</div>
              <div className="text-2xl font-black mb-4 italic tracking-widest">TOTAL</div>
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">Títulos Oficiales • Est. 2025</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket className="w-32 h-32 text-white" />
              </div>
              <div className="text-6xl font-black text-blue-400 mb-2">2</div>
              <div className="text-xl font-bold italic mb-2">ROCKET LEAGUE</div>
              <div className="h-1 w-12 bg-blue-400/30 mx-auto rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/jvVByRjy/escudo-palmar-soriano-2.png" 
                alt="CAPS Logo" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold tracking-tighter text-sm md:text-base">CLUB ATLÉTICO PALMAR SORIANO</span>
            </div>
            
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">TikTok</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Instagram</a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">YouTube</a>
              <a href={SOCIAL_LINKS.kick} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Kick</a>
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Discord</a>
            </div>

            <div className="text-gray-500 text-xs flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" /> Palmar, Soriano, Uruguay
              </div>
              <div className="flex flex-col items-end gap-1 border-t border-white/5 pt-2 mt-2">
                <span className="text-[8px] font-black uppercase tracking-widest text-accent">Contacto vía Discord</span>
                <div className="flex gap-3">
                  <span className="hover:text-white transition-colors">@chino_waza1</span>
                  <span className="hover:text-white transition-colors">@tonteks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em]">
            © 2026 Club Atlético Palmar Soriano
          </div>
        </div>
      </footer>
    </div>
  );
}
