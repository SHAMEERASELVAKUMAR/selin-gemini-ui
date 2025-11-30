"use client";
import { useEffect } from "react";

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform?usp=header";

export default function Page() {
  // ------------------------------------------
  // ⭐ STARFIELD ANIMATION
  // ------------------------------------------
  useEffect(() => {
    const canvas = document.getElementById("starfield") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let w = window.innerWidth,
      h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const stars = Array.from({ length: 350 }, () => ({
      x: Math.random() * w - w / 2,
      y: Math.random() * h - h / 2,
      z: Math.random() * w,
    }));

    function frame() {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, h / 2);

      for (const s of stars) {
        s.z -= 2;
        if (s.z <= 0) {
          s.z = w;
          s.x = Math.random() * w - w / 2;
          s.y = Math.random() * h - h / 2;
        }

        const x = (s.x / s.z) * w;
        const y = (s.y / s.z) * h;
        const r = Math.max(0.2, (1 - s.z / w) * 2);
        const o = Math.max(0, 1 - s.z / w);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${o})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      requestAnimationFrame(frame);
    }

    frame();

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const openForm = () => {
    window.open(GOOGLE_FORM, "_blank");
  };

  // ------------------------------------------
  // ⭐ RENDER PAGE
  // ------------------------------------------
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* ⭐ Starfield background */}
      <canvas
        id="starfield"
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* ⭐ Planet Glow */}
      <div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] rounded-full border border-white/5 opacity-30 animate-spin-slow flex items-center justify-center">
          <div className="absolute w-48 h-48 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#F4D06F] via-[#b07f2a] to-black opacity-80 blur-2xl"></div>
        </div>
      </div>

      {/* ⭐ NAVBAR */}
      <nav
        id="navbar"
        className="fixed top-0 w-full z-40 py-6 transition-all"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-[#F4D06F] font-serif text-2xl select-none">
            SELIN
            <span className="block text-xs text-gray-400">VENTURES</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openForm}
              className="px-4 md:px-6 py-2 bg-[#F4D06F] text-black font-extrabold text-xs uppercase tracking-[0.15em] hover:bg-white rounded shadow"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </nav>

      {/* ⭐ HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center z-20">
        <div className="max-w-6xl mx-auto px-6 text-center pt-24 pb-32">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 bg-[#F4D06F] rounded-full animate-pulse"></span>
            <span className="text-gray-400 text-[10px] font-mono uppercase tracking-[0.3em]">
              SELIN'S AI VISION
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif uppercase leading-none mb-8">
            JOIN THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4D06F] via-[#bf9b30] to-transparent">
              BIGGEST AI STARTUP
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 uppercase tracking-wide">
            JOIN INDIA'S NEXT REVOLUTIONARY AI STARTUP.
          </p>

          <button
            onClick={openForm}
            className="w-full md:w-auto px-16 py-6 bg-[#F4D06F] text-black font-black text-sm uppercase tracking-[0.25em] hover:bg-white transition-all shadow"
          >
            INITIATE APPLICATION
          </button>
        </div>
      </section>

      {/* ⭐ FUNDING SECTION */}
      <section className="py-20 bg-black border-y border-[#F4D06F]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-serif uppercase mb-4">
            <span className="text-[#F4D06F]">5 CRORE</span> FUNDING LOCKED
          </h2>

          <p className="text-sm md:text-xl text-gray-300 font-mono tracking-[0.2em] uppercase mb-8">
            VC CAPITAL PRE-APPROVED. AWAITING PROTOTYPE DEPLOYMENT.
          </p>
        </div>
      </section>

      {/* ⭐ OPENINGS */}
      <section id="openings" className="py-20 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif uppercase tracking-wider">
            CURRENT OPENINGS
          </h2>

          <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">
            FOUNDING TEAM ROLES • 40-DAY SPRINT
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "AI/ML ENGINEER", stack: "Python, LLMs, RAG", seats: 2 },
              { title: "BACKEND ARCHITECT", stack: "Node.js, Firebase", seats: 2 },
              { title: "FRONTEND / MOBILE", stack: "React, Flutter", seats: 2 },
            ].map((o) => (
              <div
                key={o.title}
                className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition"
              >
                <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                  {o.title}
                </h3>
                <div className="text-gray-500 text-xs font-mono mb-6 uppercase">
                  {o.stack}
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-[#F4D06F] text-xs font-bold uppercase tracking-wider">
                    {o.seats} SEATS
                  </span>

                  <button
                    onClick={openForm}
                    className="text-white text-xs underline decoration-[#F4D06F] underline-offset-4 hover:text-[#F4D06F]"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ FOOTER */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 SELIN GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}

