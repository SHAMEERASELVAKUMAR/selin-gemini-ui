'use client';
import { useEffect } from 'react';

const GOOGLE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform?usp=header";

export default function Page() {
  useEffect(() => {
    if (typeof (window as any) !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
    const canvas = document.getElementById('starfield') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d')!;
      let w = window.innerWidth, h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      const stars = Array.from({ length: 350 }, () => ({ x: Math.random()*w, y: Math.random()*h, z: Math.random()*w }));
      function frame() {
        ctx.clearRect(0,0,w,h);
        ctx.save();
        ctx.translate(w/2, h/2);
        for (const s of stars) {
          s.z -= 2;
          if (s.z <= 0) { s.z = w; s.x = Math.random()*w - w/2; s.y = Math.random()*h - h/2; }
          const x = (s.x / s.z) * w;
          const y = (s.y / s.z) * h;
          const r = Math.max(0.2, (1 - s.z/w) * 2.5);
          const o = Math.max(0, 1 - s.z/w);
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${o})`;
          ctx.arc(x, y, r, 0, Math.PI*2);
          ctx.fill();
        }
        ctx.restore();
        requestAnimationFrame(frame);
      }
      function onResize() { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h; }
      window.addEventListener('resize', onResize);
      frame();
      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  const openForm = () => { window.open(GOOGLE_FORM, '_blank'); };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <canvas id="starfield" className="fixed inset-0 w-full h-full z-0 pointer-events-none"></canvas>
      <div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] rounded-full border border-white/5 opacity-30 animate-spin-slow flex items-center justify-center">
          <div className="absolute w-48 h-48 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#F4D06F] via-[#b07f2a] to-black opacity-80 blur-2xl"></div>
        </div>
      </div>

      <nav id="navbar" className="fixed top-0 w-full z-40 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-[#F4D06F] font-serif text-2xl select-none">SELIN <span className="block text-xs text-gray-400">VENTURES</span></div>
          <div className="flex items-center gap-4">
            <button onClick={openForm} className="px-4 md:px-6 py-2 bg-[#F4D06F] text-black font-extrabold text-xs uppercase tracking-[0.15em] hover:bg-white rounded border border-white shadow">APPLY NOW</button>
            <button onClick={() => {
              const drawer = document.getElementById('menu-drawer');
              const overlay = document.getElementById('menu-overlay');
              if (drawer) drawer.style.transform = 'translateX(0)';
              if (overlay) { overlay.style.display = 'block'; setTimeout(()=>overlay.style.opacity='1',10); }
            }} className="text-white w-10 h-10 flex items-center justify-center border border-white rounded">☰</button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center z-20">
        <div className="max-w-6xl mx-auto px-6 text-center pt-24 pb-32">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 bg-[#F4D06F] rounded-full animate-pulse"></span>
            <span className="text-gray-400 text-[10px] font-mono uppercase tracking-[0.3em]">SELIN'S AI VISION</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium text-white tracking-tighter leading-none mb-8 font-serif uppercase">
            JOIN THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4D06F] via-[#bf9b30] to-transparent">BIGGEST AI STARTUP</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light uppercase tracking-wide">
            JOIN INDIA'S NEXT REVOLUTIONARY AI STARTUP.
          </p>
          <button onClick={openForm} className="w-full md:w-auto px-16 py-6 bg-[#F4D06F] text-black font-black text-sm md:text-base uppercase tracking-[0.25em] hover:bg-white transition-all duration-300 shadow rounded">
            INITIATE APPLICATION
          </button>
        </div>
      </section>

      <section className="py-20 bg-black border-y border-[#F4D06F]/30 relative z-30">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black font-serif text-white tracking-tighter uppercase mb-4">
            <span className="text-[#F4D06F]">5 CRORE</span> FUNDING LOCKED
          </h2>
          <p className="text-sm md:text-xl text-gray-300 font-mono tracking-[0.2em] uppercase mb-8">
            VC CAPITAL PRE-APPROVED. AWAITING PROTOTYPE DEPLOYMENT.
          </p>
          <div className="inline-flex items-center gap-3 border border-[#F4D06F] px-8 py-3 bg-[#F4D06F]/10 rounded-sm shadow animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F4D06F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3a3 3 0 006 0 3 3 0 00-3-3z" /></svg>
            <span className="text-[#F4D06F] font-bold text-xs md:text-sm uppercase tracking-[0.3em]">BUILD THE PROTOTYPE → UNLOCK THE CAPITAL</span>
          </div>
        </div>
      </section>

      <section id="openings" className="py-20 bg-[#050505] z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-white uppercase tracking-wider">CURRENT OPENINGS</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">FOUNDING TEAM ROLES • 40-DAY SPRINT</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="openings-grid"></div>
        </div>
      </section>

      <section id="founder" className="py-20 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif text-white mb-8 uppercase">SELIN GROUP PROJECTS</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                <svg className="w-6 h-6 text-[#F4D06F]"><circle cx="12" cy="12" r="10" /></svg>
                <span className="text-gray-400 tracking-wide text-sm uppercase">SELIN CONSULTANCY (PREMIUM SERVICES)</span>
              </div>
            </div>
          </div>
          <div className="bg-[#080808] p-12 border border-white/5 relative shadow-2xl">
            <div className="absolute -top-6 -right-6 text-8xl font-serif text-[#F4D06F] opacity-10">"</div>
            <h3 className="text-[10px] text-[#F4D06F] font-bold uppercase tracking-[0.3em] mb-8">FOUNDER'S VISION</h3>
            <p className="text-xl md:text-3xl font-serif text-white leading-tight italic mb-10 opacity-90 uppercase">"IF SOMETHING CAN BE BUILT WITH DISCIPLINE, DESIRE, AND THE RIGHT PEOPLE, IT WILL BECOME BIG."</p>
            <div className="border-t border-white/10 pt-6">
              <p className="text-white font-bold tracking-wide uppercase">SARAN S I</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">FOUNDER, SELIN GROUP</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-white uppercase tracking-wider mb-4">CORE GOVERNANCE & VISION</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest">THE FOUNDATION OF SELIN VENTURES</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10 bg-[#0a0a0a] group">
              <div className="mb-4 text-[#F4D06F]"><svg className="w-8 h-8"><circle cx="12" cy="12" r="10" /></svg></div>
              <h3 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">OUR VISION</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">To build India’s most powerful AI-driven ecosystem that transforms how students learn, work, and perform.</p>
              <button onClick={() => alert('Open VISION doc (demo)')} className="text-xs text-[#F4D06F] font-mono uppercase tracking-widest hover:underline">READ FULL VISION</button>
            </div>
            <div className="p-8 border border-white/10 bg-[#0a0a0a] group">
              <div className="mb-4 text-[#F4D06F]"><svg className="w-8 h-8"><circle cx="12" cy="12" r="10" /></svg></div>
              <h3 className="text-white font-bold text-xl mb-4 uppercase tracking-widest">OUR MISSION</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">To create AI tools that empower millions to achieve more in less time.</p>
              <button onClick={() => alert('Open MISSION doc (demo)')} className="text-xs text-[#F4D06F] font-mono uppercase tracking-widest hover:underline">READ FULL MISSION</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-white font-serif font-bold tracking-tight text-lg mb-4 uppercase">SELIN GROUP</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-wider leading-relaxed">BUILDING INDIA'S NEXT GENERATION OF HIGH-IMPACT VENTURES.</p>
          </div>
          <div>
            <h4 className="text-[#F4D06F] text-xs font-bold uppercase tracking-widest mb-4">CONTACT FOUNDER</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-mono uppercase">
              <li className="text-white font-bold">SARAN S I</li>
              <li><a href="mailto:selin.consultancy@gmail.com" className="hover:text-[#F4D06F]">SELIN.CONSULTANCY@GMAIL.COM</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#F4D06F] text-xs font-bold uppercase tracking-widest mb-4">CONNECT</h4>
            <a href="https://www.instagram.com/selin.ventures/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#F4D06F] transition-colors text-xs font-mono uppercase">@SELIN.VENTURES</a>
          </div>
          <div>
            <h4 className="text-[#F4D06F] text-xs font-bold uppercase tracking-widest mb-4">CORPORATE</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="uppercase text-[10px]">TERMS & CONDITIONS</li>
              <li className="uppercase text-[10px]">POLICIES</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[10px]">© 2025 SELIN GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      <div id="menu-drawer" className="fixed inset-0 z-50 pointer-events-none">
        <div id="menu-overlay" onClick={() => {
          const overlay = document.getElementById('menu-overlay'); const drawer = document.getElementById('menu-content');
          if (overlay) overlay.style.opacity='0'; if (drawer) drawer.style.transform='translateX(100%)';
          setTimeout(()=>{ if (overlay) overlay.style.display='none'; }, 300);
        }} style={{display:'none'}} className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-auto"></div>
        <div id="menu-content" style={{transform:'translateX(100%)'}} className="absolute top-0 right-0 h-full w-80 bg-[#0a0a0a] border-l border-white/10 flex flex-col p-8 shadow-2xl transition-transform duration-300 pointer-events-auto">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-[#F4D06F] font-serif italic text-xl uppercase">MENU</h3>
            <button onClick={() => {
              const overlay = document.getElementById('menu-overlay'); const drawer = document.getElementById('menu-content');
              if (overlay) overlay.style.opacity='0'; if (drawer) drawer.style.transform='translateX(100%)';
              setTimeout(()=>{ if (overlay) overlay.style.display='none'; }, 300);
            }} className="text-white">✕</button>
          </div>
          <nav className="flex flex-col gap-6">
            <a href="#openings" className="text-white hover:text-[#F4D06F] uppercase">OPENINGS</a>
            <a href="#founder" className="text-white hover:text-[#F4D06F] uppercase">ABOUT FOUNDER</a>
          </nav>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        (function(){
          const GOOGLE_FORM = "${GOOGLE_FORM}";
          const OPENINGS = [
            { title: "AI/ML ENGINEER", stack: "Python, LLMs, RAG", seats: 2 },
            { title: "BACKEND ARCHITECT", stack: "Node.js, Firebase", seats: 2 },
            { title: "FRONTEND / MOBILE", stack: "React, Flutter", seats: 2 }
          ];
          const grid = document.getElementById('openings-grid');
          if (grid) {
            OPENINGS.forEach(op => {
              const div = document.createElement('div');
              div.className = 'group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors';
              div.innerHTML = `<h3 class="text-white font-bold text-lg mb-2 uppercase tracking-wide">${op.title}</h3><div class="text-gray-500 text-xs font-mono mb-6 uppercase">${op.stack}</div><div class="flex justify-between items-end"><span class="text-[#F4D06F] text-xs font-bold uppercase tracking-wider">${op.seats} SEATS</span><button onclick="window.open('${GOOGLE_FORM}','_blank')" class="text-white text-xs underline decoration-[#F4D06F] underline-offset-4 hover:text-[#F4D06F]">APPLY</button></div>`;
              grid.appendChild(div);
            });
          }
          // simple cursor dots
          const dot = document.createElement('div'); const ring = document.createElement('div');
          dot.id='cursor-dot'; ring.id='cursor-ring';
          Object.assign(dot.style,{position:'fixed',width:'6px',height:'6px',background:'#F4D06F',borderRadius:'50%',pointerEvents:'none',zIndex:'9999',transform:'translate(-50%,-50%)'});
          Object.assign(ring.style,{position:'fixed',width:'36px',height:'36px',border:'1px solid #F4D06F',borderRadius:'50%',pointerEvents:'none',zIndex:'9998',transform:'translate(-50%,-50%)'});
          document.body.appendChild(dot); document.body.appendChild(ring);
          window.addEventListener('mousemove', (e)=>{ dot.style.left=e.clientX+'px'; dot.style.top=e.clientY+'px'; ring.style.left=e.clientX+'px'; ring.style.top=e.clientY+'px'; });
          document.querySelectorAll('button,a').forEach(el=>{ el.addEventListener('mouseenter',()=>document.body.classList.add('hovering')); el.addEventListener('mouseleave',()=>document.body.classList.remove('hovering')); });
        })();
      `}} />

    </main>
  );
}
