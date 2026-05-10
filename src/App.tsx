/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Clock, 
  Star, 
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  CheckCircle,
  Award,
  Sparkles,
  Send,
  Loader2,
  RefreshCw,
  Eye
} from 'lucide-react';
import { IMAGES, SERVICES, TESTIMONIALS, TEAM, STATS } from './constants';
import { GoogleGenAI } from "@google/genai";
import { Logo } from './components/Logo';

const SectionHeader = ({ title, subtitle, light = true }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="text-center mb-20 px-4">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 0.4, y: 0 }}
      viewport={{ once: true }}
      className={`text-[10px] uppercase tracking-[0.5em] mb-6 ${light ? 'text-white' : 'text-editorial-black'}`}
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-6xl font-serif font-light ${light ? 'text-white' : 'text-editorial-black'}`}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: true }}
      className="h-[1px] bg-gold mx-auto mt-8 opacity-50"
    />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-gold selection:text-editorial-black bg-editorial-black text-editorial-white">
      {/* Editorial Border Frames */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[12px] border-editorial-gray opacity-20" />
      
      {/* Vertical Metadata Sidebar (Desktop) */}
      <div className="fixed left-0 top-0 h-full w-16 hidden lg:flex flex-col items-center justify-between py-12 z-50 border-r border-white/5 bg-editorial-black">
        <div className="rotate-180 flex items-center gap-8" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">Established London 2012</span>
          <div className="h-12 w-[1px] bg-gold/40" />
          <span className="text-[9px] uppercase tracking-[0.5em] text-gold whitespace-nowrap">James Boswell Hair Design</span>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <a href="https://www.instagram.com/jamesboswellhairdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <Instagram size={14} className="text-white/20 hover:text-gold transition-colors cursor-pointer" />
          </a>
          <Facebook size={14} className="text-white/20 hover:text-gold transition-colors cursor-pointer" />
          <div className="h-4 w-[1px] bg-white/10" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">UK</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-editorial-black/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('hero')}>
            <Logo className="scale-90 md:scale-100 origin-left" />
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {['Services', 'About', 'Gallery', 'Team'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[10px] uppercase tracking-[0.3em] transition-all hover:text-gold text-white/60 hover:tracking-[0.4em]"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('booking')}
              className="px-8 py-3 text-[10px] uppercase tracking-[0.3em] bg-gold text-editorial-black font-bold hover:bg-white transition-all shadow-2xl"
            >
              Book Now
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
            <Menu className="text-white" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-end lg:pl-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO} 
            alt="Salon Exterior" 
            className="w-full h-full object-cover scale-105 grayscale opacity-40 brightness-75 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-editorial-black via-transparent to-transparent opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-editorial-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:pl-32 pt-40 pb-32 lg:pb-40 flex flex-col justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-20"
          >
            <h1 className="text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-[0.95] font-serif font-light tracking-tighter mix-blend-difference">
              <span className="block text-white">JAMES</span>
              <span className="block text-gold">BOSWELL</span>
            </h1>
            <p className="mt-12 text-xs md:text-sm uppercase tracking-[0.6em] text-white/40">Hair Design & Precision Cutting</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif italic mb-12 leading-tight text-editorial-white/90">
              Luxury Hair Design in the <br className="hidden md:block" />
              <span className="font-sans font-light not-italic text-2xl md:text-4xl text-white/40 uppercase tracking-widest">Heart of Banbury</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 mt-16">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('booking')}
                className="px-12 py-5 bg-gold text-editorial-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl"
              >
                Book Appointment
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('gallery')}
                className="px-12 py-5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white/10 transition-all"
              >
                View Portfolio
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAssistantOpen(true)}
                className="px-12 py-5 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold/10 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={14} />
                Style Concierge
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-editorial-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden border border-white/10 group">
                <img 
                  src={IMAGES.ABOUT_STUDIO} 
                  alt="The Studio" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-10 bg-editorial-gray border border-white/5 shadow-2xl hidden md:block">
                <div className="text-4xl font-serif text-gold mb-2 italic">15+</div>
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Years of Luxury<br/>Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-gold text-[9px] uppercase tracking-[0.5em] block mb-8">The Studio</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-[1.1] font-light">
                An Award-winning <br/> <span className="italic">Sanctuary of Style.</span>
              </h2>
              <div className="space-y-8 text-white/50 leading-relaxed font-light text-base max-w-xl">
                <p>
                  James Boswell Hair Design is an architectural statement of beauty, tailored for Banbury's most discerning individuals. Our studio blends high-end precision with a welcoming boutique atmosphere.
                </p>
                <p>
                  Educated in London's elite salons, James brings a global perspective to local hair design, ensuring every guest receives the same level of care found on the runways of fashion week.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/5">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-serif mb-2 italic text-editorial-white">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-0 bg-editorial-gray border-b border-white/5">
        <div className="max-w-full lg:pl-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
            {SERVICES.slice(0, 4).map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                className={`p-16 flex flex-col justify-between border-r border-white/5 hover:bg-gold/5 transition-colors group cursor-default ${idx === 3 ? 'border-r-0' : ''}`}
              >
                <div>
                  <div className="text-gold text-[10px] mb-12 group-hover:tracking-[0.5em] transition-all">0{idx + 1}</div>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-6 font-sans border-b border-white/5 pb-6 inline-block">{service.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed max-w-[200px]">{service.description}</p>
                </div>
                <div className="mt-12">
                  <service.icon size={20} className="text-white/10 group-hover:text-gold transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-editorial-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <SectionHeader title="The Standards of Luxury" subtitle="Excellence" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {[
              { icon: Award, label: "Award-winning stylists" },
              { icon: MessageCircle, label: "Bespoke consultations" },
              { icon: Sparkles, label: "Premium products" },
              { icon: Star, label: "Friendly luxury atmosphere" },
              { icon: Clock, label: "Modern hair trends" },
              { icon: MapPin, label: "Trusted local salon" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <item.icon size={18} className="text-gold" />
                </div>
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-32 bg-editorial-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <SectionHeader title="The Transformation" subtitle="Before & After" />
          
          <div className="grid md:grid-cols-2 gap-12">
            {IMAGES.BEFORE_AFTER.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] overflow-hidden group border border-white/5"
              >
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-10 left-10">
                  <div className="text-gold text-[8px] uppercase tracking-[0.5em] mb-2">Signature Work</div>
                  <h3 className="text-2xl font-serif italic text-white">{item.label}</h3>
                </div>
                <div className="absolute top-10 right-10">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <Eye size={16} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-editorial-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <SectionHeader title="Editorial Portfolio" subtitle="Visuals" />
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
            {IMAGES.PORTFOLIO.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 brightness-75 hover:brightness-100 transition-all duration-1000 relative group"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity m-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Experience Section */}
      <section className="py-32 bg-editorial-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-gold text-[9px] uppercase tracking-[0.5em] block mb-8">The Process</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-[1.1] font-light text-white">
                The Architecture of <br/> <span className="italic text-gold">A Signature Cut.</span>
              </h2>
              <div className="space-y-12">
                {[
                  { title: "Bespoke Consultation", desc: "Understanding your silhouette, texture, and personal aesthetic." },
                  { title: "Precision Crafting", desc: "Technical mastery tailored to your unique anatomical features." },
                  { title: "Silken Finish", desc: "Expert styling using premium rituals to seal your new signature look." }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-8 group"
                  >
                    <div className="text-gold/20 text-4xl font-serif italic group-hover:text-gold transition-colors duration-500">0{idx + 1}</div>
                    <div>
                      <h4 className="text-white text-lg uppercase tracking-widest mb-2 font-bold">{step.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden flex items-center justify-center p-20"
            >
               <div className="absolute inset-0 border border-white/5 rounded-full scale-110" />
               <div className="absolute inset-0 border border-gold/10 rounded-full animate-pulse" />
               <div className="relative z-10 text-center">
                  <Scissors className="text-gold/20 mx-auto mb-8" size={64} strokeWidth={0.5} />
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.8em] max-w-[200px] mx-auto leading-loose">
                    Technically Perfect. Artistically Defined.
                  </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-editorial-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <div className="grid lg:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 border border-white/5 bg-editorial-gray relative group"
              >
                <div className="text-gold text-xs font-serif italic mb-6">"</div>
                <p className="text-lg font-serif italic mb-12 leading-relaxed text-editorial-white/80">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-6 bg-gold/50" />
                  <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 font-bold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Single Board Layout */}
      <section id="team" className="py-32 bg-editorial-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-0 border border-white/5 bg-editorial-black overflow-hidden shadow-2xl"
          >
            {/* Main Visual Board */}
            <div className="lg:col-span-3 aspect-[4/3] lg:aspect-auto overflow-hidden relative group border-b lg:border-b-0 lg:border-r border-white/5">
              <img 
                src={IMAGES.TEAM_GROUP} 
                alt="James Boswell Creative Team" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-editorial-black/60 to-transparent opacity-80" />
              
              {/* Integrated Title */}
              <div className="absolute bottom-12 left-12">
                <span className="text-gold text-[9px] uppercase tracking-[0.5em] block mb-4">Curated Exhibition</span>
                <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-none">The Board</h2>
              </div>
            </div>

            {/* Content & Credits Board */}
            <div className={`lg:col-span-2 p-12 md:p-16 flex flex-col justify-center relative ${TEAM.length === 1 ? 'lg:items-center' : ''}`}>
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center opacity-20">
                  <span className="text-[10px] font-serif italic text-white">JB</span>
                </div>
              </div>

              <div className={`space-y-12 ${TEAM.length === 1 ? 'text-center' : ''}`}>
                {TEAM.map((member) => (
                  <div key={member.name} className="relative group">
                    <div className={`absolute top-4 w-4 h-[1px] bg-gold/20 group-hover:w-6 group-hover:bg-gold transition-all ${TEAM.length === 1 ? 'left-1/2 -ml-2 -translate-x-full' : '-left-6'}`} />
                    <h3 className="text-3xl md:text-5xl font-serif mb-3 italic text-white group-hover:text-gold transition-colors">{member.name}</h3>
                    <p className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-8">{member.role}</p>
                    <p className="text-white/40 text-sm leading-relaxed font-light max-w-sm italic mx-auto">
                      "{member.bio}"
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 pt-12 border-t border-white/5">
                <p className="text-[9px] text-white/30 uppercase tracking-[0.6em] leading-loose">
                  Dedicated to the architecture of hair and the luxury experience in the heart of Banbury.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-40 bg-editorial-black relative border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] uppercase tracking-[0.6em] block mb-12">Bespoke Appointments</span>
            <h2 className="text-5xl md:text-8xl font-serif mb-16 italic font-light leading-[0.9] text-editorial-white/90">
              Transform Your <br /> <span className="not-italic text-white">Signature Silhouette.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12">
              <a 
                href="mailto:bozzyj@aol.com"
                className="px-16 py-6 bg-white text-editorial-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold hover:text-white transition-all shadow-2xl"
              >
                Book Now
              </a>
              <a 
                href="tel:+441295262922"
                className="px-16 py-6 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white/10 transition-all"
              >
                Contact Salon
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-editorial-gray py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20">
            <div className="space-y-12">
              <Logo className="items-start" />
              <p className="text-xs text-white/30 leading-loose max-w-xs font-light">
                Redefining the standards of precision cutting and bespoke coloring in Oxfordshire. An award-winning destination for luxury hair.
              </p>
              <div className="flex gap-6">
                <Facebook size={16} className="text-white/20 hover:text-gold transition-colors cursor-pointer" />
                <a href="https://www.instagram.com/jamesboswellhairdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} className="text-white/20 hover:text-gold transition-colors cursor-pointer" />
                </a>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Studio</h4>
              <div className="space-y-6 text-xs text-white/40 leading-loose uppercase tracking-widest font-bold">
                <p>6A White Lion Walk, <br/>Banbury OX16 5UD, UK</p>
                <p>+44 1295 262922</p>
                <p className="lowercase tracking-normal font-light italic">bozzyj@aol.com</p>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Schedule</h4>
              <div className="space-y-4 text-xs text-white/40 uppercase tracking-widest font-bold">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Tue - Thu</span>
                  <span className="font-light">09 - 19</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Fri - Sat</span>
                  <span className="font-light">09 - 18</span>
                </div>
                <div className="flex justify-between text-white/20">
                  <span>Sun - Mon</span>
                  <span className="font-light">Closed</span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Direction</h4>
              <div className="aspect-square grayscale opacity-20 hover:opacity-40 transition-opacity border border-white/10 rounded-full overflow-hidden scale-90">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.264107698506!2d-1.33924!3d52.0621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877395638c64cfb%3A0xe54d9a2638f29e2f!2s6A%20White%20Lion%20Walk%2C%20Banbury%20OX16%205UD%2C%20UK!" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
            <p className="text-[8px] uppercase tracking-[0.8em]">Bespoke Hair Design</p>
            <p className="text-[8px] uppercase tracking-[0.8em]">Oxfordshire Excellence</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[110] bg-editorial-black border-t border-white/10 px-8 py-6 flex gap-6">
        <button 
          onClick={() => scrollTo('booking')}
          className="flex-1 bg-white text-editorial-black py-4 text-[9px] uppercase tracking-[0.4em] font-bold shadow-2xl"
        >
          Book Appointment
        </button>
      </div>

      <AnimatePresence>
        {isAssistantOpen && (
          <StyleAssistantModal onClose={() => setIsAssistantOpen(false)} />
        )}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-editorial-black z-[150] flex flex-col items-center justify-center p-12"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 text-white/40 hover:text-white transition-colors">
              <X size={32} strokeWidth={1} />
            </button>
            <div className="flex flex-col items-center gap-10 text-center">
              {['Services', 'About', 'Gallery', 'Team', 'Booking'].map((item, idx) => (
                <motion.button 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-4xl md:text-6xl font-serif italic text-white/80 hover:text-gold transition-all"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const StyleAssistantModal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Welcome to the James Boswell Digital Concierge. Describe your dream hair silhouette or a style challenge you're facing, and I'll provide a bespoke recommendation." }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "You are the 'Digital Concierge' for James Boswell Hair Design, a luxury high-end salon in Banbury. Your tone is sophisticated, professional, and editorial. Provide expert hair styling advice, coloring suggestions, and product recommendations in a concise, luxury-focused manner. Do not mention other salons. Focus on precision cutting and bespoke coloring. End with an invitation to book a consultation."
        }
      });
      
      const aiText = response.text || "I apologize, but I am unable to provide a recommendation at this time. Please contact the salon for a personal consultation.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting to my creative database. Please book an in-person consultation for personalized advice." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-editorial-black/98 z-[200] flex items-center justify-center p-6 md:p-12 backdrop-blur-xl"
    >
      <div className="w-full max-w-2xl bg-editorial-gray border border-white/10 shadow-2xl flex flex-col h-[80vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-editorial-black/40">
          <div>
            <div className="text-gold text-[8px] uppercase tracking-[0.5em] mb-2 font-bold">Inquiry</div>
            <h3 className="text-2xl font-serif italic text-white">Signature Concierge</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 transition-colors">
            <X size={20} className="text-white/40" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-6 ${msg.role === 'user' ? 'bg-white/5 border border-white/10 text-white' : 'bg-editorial-black/50 border border-gold/10 text-white/80'} font-light text-sm leading-relaxed`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-editorial-black/50 border border-gold/10 p-6 flex items-center gap-3">
                <Loader2 className="animate-spin text-gold" size={16} />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Curating Recommendation...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-8 border-t border-white/5 bg-editorial-black/20">
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your hair goals..."
              className="w-full bg-editorial-black border border-white/10 p-5 pr-16 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-4 p-2 hover:bg-gold/10 text-gold disabled:opacity-20 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
