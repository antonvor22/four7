/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, MapPin, Clock, Star } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-studio-bg/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="#" className="font-display text-2xl tracking-tight text-studio-rosa">four7pilates</a>
          <div className="hidden md:flex space-x-6 text-sm uppercase tracking-widest font-light">
            <a href="#kurse" className="hover:text-studio-matcha transition-colors">Kurse</a>
            <a href="#uber-uns" className="hover:text-studio-matcha transition-colors">Über Uns</a>
            <a href="#studios" className="hover:text-studio-matcha transition-colors">Studios</a>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#studios" className="hidden md:block bg-studio-matcha text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-studio-matcha-hover rounded-full transition-colors cursor-pointer">
            Jetzt buchen
          </a>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-studio-bg border-t border-studio-rosa/20 p-6 flex flex-col space-y-4 md:hidden"
          >
            <a href="#kurse" className="text-lg font-display" onClick={() => setIsMobileMenuOpen(false)}>Kurse</a>
            <a href="#uber-uns" className="text-lg font-display" onClick={() => setIsMobileMenuOpen(false)}>Über Uns</a>
            <a href="#studios" className="text-lg font-display" onClick={() => setIsMobileMenuOpen(false)}>Studios</a>
            <a href="#studios" className="bg-studio-matcha text-white px-8 py-4 text-center uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
              Jetzt buchen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-10 h-[1px] bg-studio-rosa mb-6"></div>
          <span className="text-studio-rosa uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">four7pilates studio</span>
          <h1 className="serif text-7xl md:text-8xl leading-[0.95] mb-8">
            Move with<br />
            intention.
          </h1>
          <p className="text-base max-w-sm mb-10 text-studio-anthracite/80 leading-relaxed">
            Ein Pariser Concept Store trifft auf Boutique-Fitness. Wir glauben an Stärke durch Stille und Gemeinschaft durch Bewegung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href="#studios" className="bg-studio-matcha text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-studio-matcha-hover rounded-full transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-sm">
              Jetzt buchen
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="border border-studio-anthracite px-4 py-1 uppercase tracking-widest text-[9px] font-bold rounded">
              Hansefit Partner
            </div>
          </div>

          <div className="mt-16 flex items-center gap-4 text-sm text-studio-anthracite/60 text-left">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-studio-bg bg-studio-rosa/30 overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span>Vertraut von über 500 Mitgliedern</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative h-[600px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?q=80&w=2070&auto=format&fit=crop"
            alt="Pilates Studio"
            className="w-full h-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-studio-anthracite/5"></div>
        </motion.div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
           <span className="absolute -top-10 left-0 text-9xl font-display text-studio-rosa opacity-20">"</span>
           <h2 className="serif text-3xl md:text-5xl leading-tight mb-8">
            „Die Atmosphäre bei <span className="text-studio-rosa italic">four7pilates</span> ist unvergleichlich. Keine Hektik, nur Fokus auf den eigenen Körper. Endlich ein Ort, der Qualität über Quantität stellt.“
           </h2>
           <p className="text-studio-matcha uppercase tracking-widest font-medium">— Sarah M., Mitglied seit 2 Jahren</p>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { title: "Kleine Klassen", desc: "Maximal 8 Teilnehmer für individuelle Betreuung und Haltungskorrektur." },
    { title: "Experteninstruktoren", desc: "Zertifizierte Trainer mit jahrelanger Erfahrung in Anatomie und Bewegung." },
    { title: "Gemeinschaft", desc: "Ein unterstützendes Umfeld, in dem du dich sicher und willkommen fühlst." },
  ];

  return (
    <section id="uber-uns" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-10 h-[1px] bg-studio-rosa mb-8 group-hover:w-full transition-all duration-700"></div>
              <h3 className="serif text-3xl mb-4">{item.title}</h3>
              <p className="text-studio-anthracite/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    { title: "Reformer Core", level: "Signature", duration: "55m", price: "30€" },
    { title: "Hot Pilates", level: "Athletic", duration: "50m", price: "32€" },
    { title: "Flow Pilates", level: "Classic", duration: "55m", price: "30€" },
    { title: "Intro Private", level: "Personal", duration: "60m", price: "85€" },
  ];

  return (
    <section id="kurse" className="bg-studio-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="serif text-5xl mb-6 text-left">Wähle deine <span className="italic">Klasse.</span></h2>
            <p className="text-studio-anthracite/60 text-left">Von den Grundlagen bis zur Performance – wir begleiten dich auf jedem Level.</p>
          </div>
          <a href="#" className="text-studio-matcha uppercase tracking-widest text-sm font-medium border-b border-studio-matcha/30 pb-1">Alle Kurse ansehen</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 group relative rounded-[2px] border-b-3 border-transparent hover:border-studio-matcha transition-all duration-300"
            >
               <div className="mb-12 text-left">
                 <span className="text-studio-matcha text-[10px] uppercase tracking-widest font-bold mb-4 block">
                   {course.level}
                 </span>
                 <h3 className="serif text-2xl mb-2">{course.title}</h3>
                 <p className="text-studio-anthracite/50 text-xs mb-4 leading-relaxed">Ganzkörper-Workout mit Fokus auf Präzision, Kontrolle und fließende Übergänge.</p>
                 <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-studio-anthracite/40 font-bold">
                   <div className="flex items-center gap-1"><Clock size={12} /> {course.duration}</div>
                   <div>{course.price}</div>
                 </div>
               </div>
               <button className="w-full text-left flex justify-between items-center group-hover:text-studio-matcha transition-colors cursor-pointer text-xs uppercase tracking-widest font-bold">
                 <span>Details</span>
                 <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Instructors = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] relative z-10"
          >
             <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
              alt="Caroline Flach"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
             />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-studio-rosa/20 rounded-full z-0 -rotate-12 blur-3xl"></div>
        </div>

        <div className="text-left">
          <span className="text-studio-rosa uppercase tracking-[0.2em] text-sm block mb-4">Besitzerin & Founder</span>
          <h2 className="serif text-5xl mb-8 leading-tight">Meet Caroline <span className="italic">Flach.</span></h2>
          <div className="space-y-6 text-studio-anthracite/80 leading-relaxed text-left">
            <p>
              Caroline Flach gründete <span className="text-studio-rosa">four7pilates</span> mit der Mission, Reformer & Hot Pilates in einem exklusiven, ästhetischen Rahmen zugänglich zu machen.
            </p>
            <p>
              Ihr Fokus liegt auf Präzision, Kraft und dem Zusammenspiel von Körper und Geist. In ihren Studios in Vechta und Diepholz schafft sie Räume, die über das reine Training hinausgehen.
            </p>
          </div>
          <div className="mt-10 flex gap-8 items-center">
            <div className="flex flex-col text-left">
              <span className="text-3xl font-display">Vechta</span>
              <span className="text-xs uppercase tracking-widest text-studio-anthracite/40">Studio & Café</span>
            </div>
            <div className="w-8 h-[1px] bg-studio-rosa"></div>
            <div className="flex flex-col text-left">
              <span className="text-3xl font-display">Diepholz</span>
              <span className="text-xs uppercase tracking-widest text-studio-anthracite/40">Studio B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Studios = () => {
  const locations = [
    {
      city: "Vechta",
      address: "Bremer Tor 6, 49377 Vechta",
      special: "Reformer, Hot Pilates & @four.7cafe",
      link: "https://www.eversports.de/scl/four7pilates-vechta",
      image: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=1920&auto=format&fit=crop"
    },
    {
      city: "Diepholz",
      address: "Moorstraße 23, 49356 Diepholz",
      special: "Reformer Pilates",
      link: "https://www.eversports.de/scl/four7-pilates-diepholz",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  return (
    <section id="studios" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif text-5xl mb-16 text-left">Unsere <span className="text-studio-rosa">Locations.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {locations.map((loc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[16/9] overflow-hidden mb-8 rounded-[2px]">
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div className="text-left">
                  <h3 className="font-display text-4xl mb-2">{loc.city}</h3>
                  <p className="text-studio-anthracite/60 text-sm mb-4 flex items-center gap-2">
                    <MapPin size={14} className="text-studio-rosa" /> {loc.address}
                  </p>
                  <span className="text-studio-matcha text-[10px] uppercase tracking-widest font-bold border border-studio-matcha/20 px-3 py-1 rounded">
                    {loc.special}
                  </span>
                </div>
                <a 
                  href={loc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-studio-matcha text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-studio-matcha-hover transition-colors"
                >
                  Buchen
                </a>
              </div>
              {loc.city === "Vechta" && (
                <div className="mt-8 p-6 bg-studio-bg rounded-[2px] text-left">
                  <h4 className="font-display text-xl mb-2 flex items-center gap-2">
                    <Clock size={16} className="text-studio-rosa" /> Café @four.7cafe
                  </h4>
                  <p className="text-xs text-studio-anthracite/60 uppercase tracking-widest leading-relaxed">
                    Mo-Do & Sa: 14:00 – 17:00 Uhr
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Elena K.", text: "Der perfekte Ausgleich zu meinem stressigen Job. Ich fühle mich jedes Mal wie neugeboren." },
    { name: "Julian S.", text: "Die fachliche Kompetenz der Trainer ist beeindruckend. Man lernt seinen Körper völlig neu kennen." },
    { name: "Sophie B.", text: "Design, Training und Community – hier stimmt einfach alles. Mein absoluter Lieblingsort." }
  ];

  return (
    <section className="py-24 px-6 bg-studio-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-1 bg-studio-rosa p-10 relative group text-center flex flex-col items-center rounded-[2px]"
          >
            <div className="w-10 h-[1px] bg-studio-anthracite/20 mb-8"></div>
            <p className="serif text-xl mb-8 relative z-10 leading-relaxed text-studio-anthracite">„{review.text}“</p>
            <p className="text-studio-anthracite uppercase tracking-[0.2em] text-[10px] font-bold opacity-70">— {review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-12 border-t border-studio-bg bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-studio-anthracite">Official Partner of</span>
        <div className="flex items-center gap-2 font-display text-2xl tracking-tighter">
          <span className="text-studio-anthracite">Hanse</span>
          <span className="text-studio-matcha italic">fit</span>
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const feedItems = [
    { id: 1, url: "https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, url: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, url: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, url: "https://images.unsplash.com/photo-1574680096145-d05b474e2158?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, url: "https://images.unsplash.com/photo-1599447421416-e61d7e8d5942?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <span className="text-studio-rosa uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Follow our journey</span>
            <h2 className="serif text-5xl">On <span className="italic">Instagram.</span></h2>
          </div>
          <a 
            href="https://www.instagram.com/four7pilates/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-studio-anthracite/60 hover:text-studio-rosa transition-colors uppercase tracking-widest text-[10px] font-bold pb-1 border-b border-studio-anthracite/10"
          >
            @four7pilates <Instagram size={14} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {feedItems.map((item) => (
            <motion.a
              key={item.id}
              href="https://www.instagram.com/four7pilates/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 0.98 }}
              className="aspect-square overflow-hidden relative group"
            >
              <img 
                src={item.url} 
                alt="Instagram post" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-studio-anthracite/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-studio-bg">
      <div className="max-w-7xl mx-auto font-sans">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-left">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-display text-3xl text-studio-rosa mb-8 block">four7pilates</a>
            <p className="text-studio-anthracite/50 text-sm leading-relaxed max-w-xs">
              Ein Raum für bewusste Bewegung. Wir glauben an Stärke durch Stille und Fortschritt durch Präzision.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/four7pilates/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-studio-bg flex items-center justify-center hover:bg-studio-matcha hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-studio-matcha uppercase tracking-widest text-xs font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-studio-rosa transition-colors">Stundenplan</a></li>
              <li><a href="#" className="hover:text-studio-rosa transition-colors">Preise</a></li>
              <li><a href="#" className="hover:text-studio-rosa transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-studio-rosa transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-studio-matcha uppercase tracking-widest text-xs font-bold mb-8">Kontakt</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-studio-anthracite">
                  <MapPin size={14} className="text-studio-rosa" /> Vechta
                </span>
                <span className="text-[10px] text-studio-anthracite/50 ml-6">Bremer Tor 6, 49377 Vechta</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-studio-anthracite">
                  <MapPin size={14} className="text-studio-rosa" /> Diepholz
                </span>
                <span className="text-[10px] text-studio-anthracite/50 ml-6">Moorstraße 23, 49356 Diepholz</span>
              </li>
              <li className="text-studio-anthracite">hello@four7pilates.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-studio-matcha uppercase tracking-widest text-xs font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-studio-anthracite/50 mb-6">Erhalte exklusive Angebote und Updates.</p>
            <div className="flex border-b border-studio-anthracite/10 pb-2">
              <input type="email" placeholder="E-MAIL ADRESSE" className="bg-transparent w-full text-xs uppercase tracking-widest outline-none" />
              <button className="text-studio-matcha cursor-pointer"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-studio-bg text-[10px] uppercase tracking-[2px] text-studio-anthracite/30">
          <p>© 2024 four7pilates. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-studio-anthracite">Impressum</a>
            <a href="#" className="hover:text-studio-anthracite">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Application ---

export default function App() {
  return (
    <div className="selection:bg-studio-rosa/20 font-sans">
      <Navbar />
      <Hero />
      <QuoteSection />
      <Features />
      <Courses />
      <Instructors />
      <Studios />
      <Testimonials />
      <Partners />
      <InstagramFeed />

      {/* Final CTA */}
      <section className="bg-studio-anthracite text-white py-40 px-6 text-center relative overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 1.1 }}
           whileInView={{ opacity: 0.15, scale: 1 }}
           transition={{ duration: 2 }}
           className="absolute inset-0 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
            alt="Pilates background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="serif text-5xl md:text-8xl mb-8 leading-tight">Ready to <br /><span className="text-studio-rosa">start?</span></h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light tracking-wide">Wähle deinen Standort und beginne deine Reise bei four7pilates.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://www.eversports.de/scl/four7pilates-vechta" target="_blank" rel="noopener noreferrer" className="bg-studio-matcha text-white px-12 py-6 uppercase tracking-widest text-sm font-bold hover:bg-studio-matcha-hover rounded-full transition-all shadow-xl shadow-black/20">
              Book Vechta
            </a>
            <a href="https://www.eversports.de/scl/four7-pilates-diepholz" target="_blank" rel="noopener noreferrer" className="bg-studio-matcha text-white px-12 py-6 uppercase tracking-widest text-sm font-bold hover:bg-studio-matcha-hover rounded-full transition-all shadow-xl shadow-black/20">
              Book Diepholz
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
