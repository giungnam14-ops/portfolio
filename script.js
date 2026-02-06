
import React from 'react';
import { createRoot } from 'react-dom/client';
import htm from 'htm';
import * as icons from 'lucide-react';

const html = htm.bind(React.createElement);

const App = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return html`
    <div className="min-h-screen bg-[#020408] text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="grain-overlay" />
      <div className="bg-blob">
        <div className="blob-1" />
        <div className="blob-2" />
      </div>

      <!-- Navigation -->
      <nav className=${`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#020408]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick=${() => scrollTo('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:rotate-12 transition-transform">
              <${icons.FlaskConical} className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-xl text-white tracking-tighter">NAM GI WOONG</span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            ${['Identity', 'Research', 'Expertise', 'Contact'].map(label => html`
              <button key=${label} onClick=${() => scrollTo(label.toLowerCase())} className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-blue-400 transition-colors">
                ${label}
              </button>
            `)}
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Precision R&D Architect
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight">
              분자의 언어로<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-text-gradient">
                과학적 근거
              </span>를 설계합니다.
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
              정밀한 데이터의 궤적을 쫓아, 연구를 넘어선 비즈니스의 확신을 제안하는 설계자 남기웅입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick=${() => scrollTo('research')} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/40 flex items-center gap-3 group">
                연구 성과 이미지 보기 <${icons.ArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5">
              <img 
                src="./images/profile.jpg" 
                onError=${(e) => { e.target.src = 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000'; }}
                alt="Nam Gi Woong" 
                className="w-full h-full object-cover filter contrast-110 brightness-90 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10">
                <div className="text-white text-3xl font-black tracking-tighter">NAM GI WOONG</div>
                <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mt-1">Researcher / Master of Science</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Identity Section -->
      <section id="identity" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            ${[
              { icon: icons.Target, title: 'FOCUS', text: 'cGAS/STING 경로 중심 면역 연구를 통해 만성 염증을 제어하는 기전을 탐구합니다.', color: 'blue' },
              { icon: icons.Microscope, title: 'APPROACH', text: 'In vitro/In vivo 교차 검증을 통해 후보 물질의 단계별 효능을 정밀하게 분석합니다.', color: 'indigo' },
              { icon: icons.Database, title: 'OUTCOME', text: '실험실의 데이터를 제품의 신뢰를 뒷받침하는 가장 강력한 객관적 근거로 자산화합니다.', color: 'purple' }
            ].map((item, i) => html`
              <div key=${i} className="card-glass p-12 rounded-[3rem] group">
                <div className=${`w-14 h-14 bg-${item.color}-600/20 rounded-2xl flex items-center justify-center text-${item.color}-400 group-hover:bg-${item.color}-600 group-hover:text-white transition-all mb-8`}>
                  <${item.icon} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">${item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">${item.text}</p>
              </div>
            `)}
          </div>
        </div>
      </section>

      <!-- Research Section (Image-Focused) -->
      <section id="research" className="py-40 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 space-y-10">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">Research Highlight</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Licochalcone A의<br />면역 억제 기전 입증
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 shrink-0"><${icons.Activity} /></div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">STING 경로 선택적 차단</h4>
                    <p className="text-slate-400 leading-relaxed">TBK1 및 IRF3 인산화를 농도 의존적으로 억제하여 염증 반응을 하향 조절함을 입증했습니다.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 shrink-0"><${icons.Database} /></div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">데이터 재현성 100% 확보</h4>
                    <p className="text-slate-400 leading-relaxed">표준 작업 지침서(SOP) 수립을 통해 연구 데이터의 객관적 신뢰도를 극대화했습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-1 gap-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video group">
                <img 
                  src="./images/research_1.jpg" 
                  onError=${(e) => { e.target.src = 'https://images.unsplash.com/photo-1532187875605-1ef63823db17?auto=format&fit=crop&q=80&w=1000'; }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <span className="text-white text-xs font-bold tracking-widest uppercase opacity-60">Figure 01. Western Blot Analysis</span>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video group">
                <img 
                  src="./images/research_2.jpg" 
                  onError=${(e) => { e.target.src = 'https://images.unsplash.com/photo-1507668077129-5913da84c86f?auto=format&fit=crop&q=80&w=1000'; }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <span className="text-white text-xs font-bold tracking-widest uppercase opacity-60">Figure 02. mRNA Expression Levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Footer -->
      <footer id="contact" className="py-40 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            정밀한 데이터로<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">제품의 가치</span>를 증명합니다.
          </h2>
          <div className="flex flex-col items-center gap-8 pt-10">
            <a href="mailto:ngw0509@naver.com" className="px-12 py-6 bg-white text-black font-black text-2xl rounded-3xl hover:bg-blue-500 hover:text-white transition-all hover:scale-105 shadow-xl">
              Get in Touch
            </a>
            <div className="flex gap-12 text-slate-600 font-bold uppercase tracking-[0.4em] text-[10px]">
              <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-white cursor-pointer transition-colors">Scholar</span>
              <span className="hover:text-white cursor-pointer transition-colors">Resume</span>
            </div>
          </div>
          <p className="text-slate-700 text-[10px] font-black tracking-widest uppercase pt-20">
            © 2024 NAM GI WOONG / R&D PORTFOLIO
          </p>
        </div>
      </footer>
    </div>
  `;
};

const root = createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
