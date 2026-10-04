import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Menu, X } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const nav = [
    ['About', '#about'],
    ['Stack', '#stack'],
    ['Work', '#work'],
    ['Now', '#now'],
  ];
  const categories = [
    { title: 'Languages', items: ['Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
    { title: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JDBC'] },
    { title: 'Frontend', items: ['Thymeleaf', 'React', 'Tailwind CSS', 'Vite'] },
    { title: 'Data', items: ['MySQL', 'MongoDB'] },
    { title: 'AI + Vision', items: ['Spring AI', 'Gemini API', 'Ollama', 'OpenCV'] },
    { title: 'Tools', items: ['Git', 'GitHub', 'GitHub Desktop', 'IntelliJ IDEA', 'VS Code', 'Maven', 'npm'] },
  ];
  const projects = [
    {
      number: '01',
      name: 'NOTELY',
      type: 'SOLO BUILD · UNIVERSITY NOTES',
      description: 'A focused home for academic knowledge. Students can upload, share and access university notes as PDFs—organized for the people who need them.',
      stack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'Thymeleaf'],
      href: 'https://github.com/kavyjoshi149/Notely',
      graphic: 'notely',
    },
    {
      number: '02',
      name: 'SMILO',
      type: 'COLLABORATIVE BUILD · SOCIAL',
      description: 'Backend engineering for a social network built around people and what they share: connections, image posts, chat, and OpenCV-powered smile analysis.',
      stack: ['Java', 'Spring Boot', 'MySQL', 'OpenCV', 'JWT', 'REST APIs'],
      href: 'https://github.com/kavyjoshi149/Smilo',
      graphic: 'smilo',
    },
  ];
  const smallerProjects = [
    { title: 'Campus Connext', stack: 'Spring Boot · MySQL · JPA / Hibernate', note: 'Student notes and document sharing.' },
    { title: 'Student Result Viewer', stack: 'Spring Boot · Thymeleaf', note: 'A clean portal for viewing academic results.' },
    { title: 'Hotel Management System', stack: 'Java · MySQL · JDBC', note: 'A database-backed hotel operations project.' },
    { title: 'Employee Payroll System', stack: 'Java · OOP', note: 'Payroll fundamentals, modeled with object-oriented Java.' },
  ];
  return (
    <div className="portfolio grain min-h-[100dvh]">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#0c0c0c]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-5 sm:px-9">
          <a href="#top" aria-label="Kavy Joshi, back to top" data-testid="link-home" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-[#ffe600] font-display text-lg font-bold text-[#ffe600]">KJ</span>
            <span className="mono hidden text-[10px] uppercase tracking-[.2em] text-white/70 sm:inline">Kavy Joshi <span className="text-[#ffe600]">/</span> Portfolio</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => <a key={href} href={href} data-testid={`link-nav-${label.toLowerCase()}`} className="nav-link mono text-[10px] uppercase tracking-[.19em] text-white/65">{label}</a>)}
            <a href="https://github.com/kavyjoshi149" target="_blank" rel="noreferrer" data-testid="link-nav-github" className="flex items-center gap-2 border border-white/20 px-4 py-2 mono text-[10px] uppercase tracking-[.16em] hover:border-[#ffe600] hover:text-[#ffe600]"><Github size={14} /> GitHub <ArrowUpRight size={13} /></a>
          </nav>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu" className="flex h-10 w-10 items-center justify-center border border-white/20 text-white md:hidden">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-[#0c0c0c] px-5 py-4 md:hidden">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} data-testid={`link-mobile-${label.toLowerCase()}`} className="block border-b border-white/10 py-3 mono text-xs uppercase tracking-[.2em] text-white/75">{label}</a>)}
          <a href="https://github.com/kavyjoshi149" onClick={closeMenu} target="_blank" rel="noreferrer" data-testid="link-mobile-github" className="flex items-center gap-2 py-4 mono text-xs uppercase tracking-[.2em] text-[#ffe600]"><Github size={15} /> GitHub profile <ArrowUpRight size={14} /></a>
        </nav>}
      </header>

      <main id="top">
        <section aria-labelledby="hero-title" className="relative min-h-[760px] overflow-hidden border-b border-white/10 pt-[70px] md:min-h-[850px]">
          <div className="pointer-events-none absolute inset-0 opacity-[.13]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)', backgroundSize: '74px 74px', maskImage: 'linear-gradient(to bottom, black, transparent 83%)' }} />
          <div className="pointer-events-none absolute right-[-9%] top-[100px] hidden h-[690px] w-[690px] items-center justify-center lg:flex" aria-hidden="true">
            <div className="signal-pulse absolute inset-[5%] rounded-full border border-[#ffe600]/15" />
            <div className="absolute inset-[15%] rounded-full border border-[#ffe600]/25" />
            <div className="absolute inset-[25%] rounded-full bg-[#ffe600] opacity-[.055] blur-3xl" />
            <svg viewBox="0 0 520 520" className="relative z-10 h-[87%] w-[87%] drop-shadow-[0_0_38px_rgba(255,230,0,.08)]" role="img" aria-label="Original yellow bat-signal artwork in a circle">
              <circle cx="260" cy="260" r="226" fill="none" stroke="#ffe600" strokeWidth="1" opacity=".55" strokeDasharray="3 9" />
              <circle cx="260" cy="260" r="194" fill="rgba(255,230,0,.035)" stroke="#ffe600" strokeWidth="1" opacity=".7" />
              <path d="M65 282 L108 235 L145 250 L176 185 L212 225 L260 164 L308 225 L344 185 L375 250 L412 235 L455 282 L414 278 L393 310 L365 289 L338 319 L310 285 L285 330 L260 297 L235 330 L210 285 L182 319 L155 289 L127 310 L106 278 Z" fill="#ffe600" />
              <path d="M85 373h350M125 396h270" stroke="#ffe600" strokeWidth="1" opacity=".28" />
              <text x="260" y="439" fill="#ffe600" fontSize="11" textAnchor="middle" letterSpacing="7" fontFamily="monospace">GOTHAM / SIGNAL 01</text>
            </svg>
          </div>
          <div className="relative mx-auto flex min-h-[690px] max-w-[1280px] items-center px-5 pb-24 pt-20 sm:px-9 lg:min-h-[780px]">
            <div className="relative z-10 max-w-[760px]">
              <div className="hero-enter mono mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.24em] text-white/60" data-testid="status-availability">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffe600] opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffe600]" /></span>
                CS undergraduate · building for the real world
              </div>
              <h1 id="hero-title" data-testid="heading-hero-name" className="hero-enter display glitch max-w-[780px] text-[clamp(5.3rem,13vw,11rem)] font-black uppercase leading-[.77] tracking-[-.045em] text-white" data-text="KAVY JOSHI">
                KAVY<br /><span className="text-[#ffe600]">JOSHI</span><span className="text-[.38em] tracking-normal text-[#ffe600]">™</span>
              </h1>
              <p className="hero-enter delay mt-8 max-w-[580px] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                <span className="font-semibold text-white">Java Backend Developer</span>
                <span className="mx-2 text-[#ffe600]">/</span>
                Spring Boot<span className="mx-2 text-[#ffe600]">/</span>MySQL<span className="mx-2 text-[#ffe600]">/</span>REST APIs
              </p>
              <p className="hero-enter delay mt-3 max-w-[510px] text-sm leading-6 text-white/50">I build practical products with sturdy foundations—and keep learning what comes next.</p>
              <div className="hero-enter delay mt-9 flex flex-wrap items-center gap-3">
                <a href="#work" data-testid="link-hero-work" className="group inline-flex items-center gap-3 bg-[#ffe600] px-6 py-4 mono text-[10px] font-medium uppercase tracking-[.16em] text-[#0c0c0c] transition-transform hover:-translate-y-1">Explore my work <ArrowDownRight size={15} /></a>
                <a href="https://github.com/kavyjoshi149" target="_blank" rel="noreferrer" data-testid="link-hero-github" className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 mono text-[10px] uppercase tracking-[.16em] text-white transition-colors hover:border-[#ffe600] hover:text-[#ffe600]"><Github size={15} /> GitHub profile <ArrowUpRight size={14} /></a>
              </div>
            </div>
            <div className="mono absolute bottom-9 left-5 flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-white/40 sm:left-9">
              <span className="h-px w-10 bg-[#ffe600]/70" /> scroll to explore
            </div>
            <div className="mono absolute bottom-9 right-5 hidden items-center gap-2 text-[9px] uppercase tracking-[.2em] text-white/35 sm:flex">01 <span className="text-[#ffe600]">/</span> 07</div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-9 md:py-32">
          <div className="reveal grid gap-12 md:grid-cols-[.72fr_1.28fr] md:gap-20">
            <div>
              <p className="mono mb-5 text-[10px] uppercase tracking-[.23em] text-[#ffe600]">01 / The operator</p>
              <h2 id="about-title" data-testid="heading-about" className="display text-6xl font-bold uppercase leading-[.9] tracking-tight sm:text-7xl">Code with<br /><span className="text-[#ffe600]">purpose.</span></h2>
              <div className="section-rule mt-8 max-w-[220px]" />
              <p className="mono mt-5 text-[10px] uppercase tracking-[.16em] text-white/45">B.Tech Computer Science</p>
            </div>
            <div className="max-w-[700px]">
              <p data-testid="text-about-bio" className="text-[17px] leading-[1.9] text-white/75 sm:text-[19px]">
                I’m Kavy Joshi, a B.Tech Computer Science student focused on Java backend development. I enjoy building practical web applications using Java, Spring Boot, MySQL, Spring Security, Hibernate and REST APIs. I have developed student-focused platforms such as <span className="text-[#ffe600]">Notely</span>, a university notes-sharing platform, and contributed to <span className="text-[#ffe600]">Smilo</span>, a social networking application with image-processing capabilities. I’m also expanding my skills in React, JavaScript, AI integration, system design, cloud technologies and problem solving.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
                {[['01', 'Primary language', 'Java'], ['02', 'Current focus', 'Backend systems'], ['03', 'Build mindset', 'Learn by shipping']].map(([index, label, value]) => <div key={index} className="border-l border-[#ffe600]/60 pl-4">
                  <span className="mono block text-[9px] tracking-[.2em] text-white/35">{index} / {label}</span><span className="mt-2 block text-sm font-semibold text-white">{value}</span>
                </div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" aria-labelledby="stack-title" className="border-y border-white/10 bg-[#111]">
          <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-9 md:py-28">
            <div className="reveal mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><p className="mono mb-4 text-[10px] uppercase tracking-[.23em] text-[#ffe600]">02 / Tools of the trade</p><h2 id="stack-title" data-testid="heading-stack" className="display text-6xl font-bold uppercase leading-[.9] sm:text-7xl">The toolkit<span className="text-[#ffe600]">.</span></h2></div>
              <p className="max-w-[340px] text-sm leading-6 text-white/55">A practical stack for designing, building, and shipping useful software.</p>
            </div>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => <article key={category.title} className="reveal border-t border-white/20 pt-4" style={{ transitionDelay: `${index * 65}ms` }}>
                <div className="mb-4 flex items-center justify-between"><h3 className="mono text-[10px] uppercase tracking-[.18em] text-white/60">{category.title}</h3><span className="mono text-[9px] text-[#ffe600]/70">0{index + 1}</span></div>
                <div className="flex flex-wrap gap-2">{category.items.map((item) => <span key={item} data-testid={`skill-${item.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`} className="skill-chip border border-white/15 px-3 py-2 text-xs text-white/75">{item}</span>)}</div>
              </article>)}
            </div>
            <div className="reveal mt-14 flex flex-col gap-4 border border-[#ffe600]/30 bg-[#0c0c0c] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div><p className="mono text-[9px] uppercase tracking-[.2em] text-[#ffe600]">In progress</p><p className="mt-2 text-sm text-white/70">AWS / cloud · DSA · system design · Node.js · Express.js · generative AI</p></div>
              <span className="mono whitespace-nowrap text-[9px] uppercase tracking-[.17em] text-white/40">Always building forward</span>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-9 md:py-32">
          <div className="reveal mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><p className="mono mb-4 text-[10px] uppercase tracking-[.23em] text-[#ffe600]">03 / Field work</p><h2 id="work-title" data-testid="heading-work" className="display text-6xl font-bold uppercase leading-[.9] sm:text-7xl">Built to be<br className="sm:hidden" /> useful<span className="text-[#ffe600]">.</span></h2></div>
            <a href="https://github.com/kavyjoshi149" target="_blank" rel="noreferrer" data-testid="link-work-github" className="group inline-flex items-center gap-2 border-b border-[#ffe600] pb-2 mono text-[10px] uppercase tracking-[.16em] text-[#ffe600]">All repos on GitHub <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => <article key={project.name} data-testid={`card-project-${project.name.toLowerCase()}`} className="project-card reveal group relative min-h-[480px] overflow-hidden border border-white/15 bg-[#101010] p-6 sm:p-8">
              <div className="pointer-events-none absolute right-[-9px] top-[-18px] select-none opacity-[.14]" aria-hidden="true">
                {project.graphic === 'notely' ? <div className="display text-[210px] font-black leading-none text-[#ffe600]">N</div> : <svg viewBox="0 0 250 230" className="h-[220px] w-[240px]" role="img" aria-label="Smilo abstract monochrome face artwork"><circle cx="125" cy="112" r="82" fill="none" stroke="#ffe600" strokeWidth="1" /><path d="M48 111 Q82 37 125 53 Q168 37 202 111 Q177 93 157 109 Q140 123 125 108 Q110 123 93 109 Q73 93 48 111Z" fill="#ffe600" /><path d="M79 145 Q125 185 171 145" fill="none" stroke="#ffe600" strokeWidth="9" strokeLinecap="round" /><circle cx="91" cy="118" r="5" fill="#ffe600" /><circle cx="159" cy="118" r="5" fill="#ffe600" /></svg>}
              </div>
              <div className="relative z-10 flex h-full min-h-[420px] flex-col">
                <div className="flex items-center justify-between"><span className="mono text-[10px] tracking-[.2em] text-[#ffe600]">{project.number} <span className="text-white/30">/ PROJECT</span></span><span className="h-2 w-2 bg-[#ffe600]" /></div>
                <div className="mt-auto">
                  <p className="mono mb-3 text-[9px] uppercase tracking-[.19em] text-white/45">{project.type}</p>
                  <h3 className="display glitch text-6xl font-bold uppercase leading-none tracking-tight sm:text-7xl" data-text={project.name}>{project.name}</h3>
                  <p className="mt-5 max-w-[500px] text-sm leading-6 text-white/65">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="mono border border-white/15 px-2.5 py-1.5 text-[9px] uppercase tracking-[.08em] text-white/55">{item}</span>)}</div>
                  <a href={project.href} target="_blank" rel="noreferrer" data-testid={`link-project-${project.name.toLowerCase()}`} className="mt-7 inline-flex items-center gap-3 bg-[#ffe600] px-5 py-3.5 mono text-[10px] uppercase tracking-[.15em] text-[#0c0c0c]">View repository <ArrowUpRight size={14} className="project-arrow" /></a>
                </div>
              </div>
            </article>)}
          </div>
          <div className="reveal mt-16 border-t border-white/20 pt-6">
            <div className="mb-7 flex items-center justify-between"><h3 className="mono text-[10px] uppercase tracking-[.2em] text-white/65">More in the archive</h3><span className="mono text-[9px] text-white/35">04 PROJECTS</span></div>
            <div className="grid gap-x-9 sm:grid-cols-2">
              {smallerProjects.map((project, index) => <article key={project.title} data-testid={`card-project-archive-${index + 1}`} className="group flex justify-between gap-4 border-t border-white/10 py-5">
                <div><p className="mono text-[9px] uppercase tracking-[.15em] text-[#ffe600]">0{index + 3} / {project.stack}</p><h4 className="mt-2 text-lg font-semibold">{project.title}</h4><p className="mt-1 text-xs leading-5 text-white/45">{project.note}</p></div><ArrowUpRight size={16} className="mt-1 shrink-0 text-white/35 transition-colors group-hover:text-[#ffe600]" />
              </article>)}
            </div>
          </div>
        </section>

        <section id="approach" aria-labelledby="approach-title" className="relative overflow-hidden border-y border-white/10 bg-[#ffe600] text-[#0c0c0c]">
          <div className="absolute right-[-1rem] top-[-5rem] select-none font-display text-[25rem] font-black leading-none opacity-[.06]" aria-hidden="true">K</div>
          <div className="reveal relative mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-9 md:grid-cols-[.75fr_1.25fr] md:py-24">
            <div><p className="mono mb-5 text-[10px] uppercase tracking-[.23em] opacity-65">04 / How I work</p><h2 id="approach-title" data-testid="heading-approach" className="display text-6xl font-bold uppercase leading-[.9] sm:text-7xl">Small details.<br />Solid systems.</h2></div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[['01 / Understand', 'Start with the actual friction. Build around the person who has to use it.'], ['02 / Engineer', 'Shape the data and application layers before the interface gets in the way.'], ['03 / Secure', 'Treat authentication, authorization, and sensible boundaries as part of the feature.'], ['04 / Improve', 'Ship a useful version, learn from it, and make the next decision better.']].map(([title, body]) => <article key={title} className="border-t border-[#0c0c0c]/30 pt-4"><h3 className="mono text-[10px] uppercase tracking-[.16em]">{title}</h3><p className="mt-3 max-w-[300px] text-sm leading-6 text-[#0c0c0c]/70">{body}</p></article>)}
            </div>
          </div>
        </section>

        <section id="now" aria-labelledby="now-title" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-9 md:py-32">
          <div className="reveal grid gap-12 md:grid-cols-[.72fr_1.28fr] md:gap-20">
            <div><p className="mono mb-5 text-[10px] uppercase tracking-[.23em] text-[#ffe600]">05 / Current chapter</p><h2 id="now-title" data-testid="heading-now" className="display text-6xl font-bold uppercase leading-[.9] sm:text-7xl">Still<br />learning<span className="text-[#ffe600]">.</span></h2></div>
            <div>
              <p className="max-w-[630px] text-lg leading-8 text-white/70">The next layer is already in motion. I’m broadening my toolkit without losing focus on the fundamentals: build clearly, solve carefully, and understand the system end to end.</p>
              <div className="mt-8 flex flex-wrap gap-2">{['AWS & cloud', 'Data structures', 'System design', 'Node.js', 'Express.js', 'Generative AI'].map((item) => <span key={item} className="mono border border-[#ffe600]/45 px-3 py-2 text-[10px] uppercase tracking-[.1em] text-[#ffe600]">{item}</span>)}</div>
              <div className="mt-12 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2">
                <div><span className="mono text-[9px] uppercase tracking-[.2em] text-white/40">Current focus</span><p className="mt-2 text-sm text-white/80">Backend engineering with Java & Spring</p></div>
                <div><span className="mono text-[9px] uppercase tracking-[.2em] text-white/40">Open source trail</span><a href="https://github.com/kavyjoshi149" target="_blank" rel="noreferrer" data-testid="link-now-github" className="mt-2 inline-flex items-center gap-2 text-sm text-[#ffe600] hover:underline">github.com/kavyjoshi149 <ArrowUpRight size={13} /></a></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-white/15 bg-[#111]">
          <div className="pointer-events-none absolute bottom-[-160px] left-[42%] h-[450px] w-[450px] rounded-full border border-[#ffe600]/15" aria-hidden="true" />
          <div className="reveal relative mx-auto max-w-[1280px] px-5 py-24 sm:px-9 md:py-32">
            <p className="mono mb-5 text-[10px] uppercase tracking-[.23em] text-[#ffe600]">06 / Make contact</p>
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
              <div><h2 id="contact-title" data-testid="heading-contact" className="display text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[.78] tracking-[-.04em]">Let’s build<br /><span className="text-[#ffe600]">something.</span></h2><p className="mt-7 max-w-[440px] text-sm leading-6 text-white/55">Find me on GitHub to explore the code, follow what I’m building, or start a conversation around software.</p></div>
              <a href="https://github.com/kavyjoshi149" target="_blank" rel="noreferrer" data-testid="link-contact-github" className="group inline-flex shrink-0 items-center gap-4 border border-[#ffe600] px-7 py-5 mono text-[11px] uppercase tracking-[.16em] text-[#ffe600] transition-colors hover:bg-[#ffe600] hover:text-[#0c0c0c]"><Github size={18} /> Find me on GitHub <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-6 mono text-[9px] uppercase tracking-[.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <span data-testid="text-footer-name">© {new Date().getFullYear()} Kavy Joshi</span><a href="#top" data-testid="link-back-to-top" className="inline-flex items-center gap-2 hover:text-[#ffe600]">Back to the signal <ArrowDown size={12} className="rotate-180" /></a><span>Built with intention / Java on the backend</span>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
