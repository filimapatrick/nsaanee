import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import portrait from '../assets/barisua2.png';

export default function Hero() {
  const roles = [
    'Community and Operations Manager',
    'Project Manager',
    'Neuroscience Researcher',
    'Learning Experience Designer',
    'Events Planner & Manager',
  ];
  const [typed, setTyped] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const tick = () => {
      if (!isDeleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const next = current.slice(0, Math.max(0, typed.length - 1));
        setTyped(next);
        if (next === '') {
          setIsDeleting(false);
          setRoleIndex((ri) => (ri + 1) % roles.length);
        }
      }
    };

    const timeout = window.setTimeout(tick, isDeleting ? 60 : 120);
    return () => window.clearTimeout(timeout);
  }, [typed, isDeleting, roleIndex, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="fixed left-8 top-[85%] -translate-y-1/2 -rotate-90 origin-left">
        <div className="flex gap-6 text-sm text-gray-400">
          <span>ENG</span>
          <span>JAP</span>
        </div>
      </div>

      <div className="fixed right-8 top-[85%] -translate-y-1/2 flex flex-col gap-6">
        <a href="https://x.com/Ahsua_N" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
          <Twitter size={20} />
        </a>

        <a href="https://www.linkedin.com/in/barisua-nsaanee/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="#" className="hover:text-emerald-500 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.instagram.com/nsaaneebarisua/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
          <Instagram size={20} />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
        <div className="relative md:col-start-2 flex justify-center">
          <div className="absolute inset-0 from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
          <img
            src={portrait}
            alt="Portrait"
            className="relative grayscale hover:grayscale-0 transition-all duration-500 w-full h-[95vh] sm:h-[420px] md:h-[520px] lg:h-[900px] object-cover object-center md:object-bottom fade-right"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="pointer-events-auto max-w-3xl px-6 text-center">
            <h1 className="text-[2.5rem] font-bold mb-6 sm:text-7xl xl:text-[5.5rem] xl:leading-none xl:font-black">
              Barisua Nsaanee
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              I am <span className="text-emerald-400">{typed}</span>
              <span className="inline-block w-1 h-8 bg-white ml-2 align-middle animate-pulse" aria-hidden="true"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
