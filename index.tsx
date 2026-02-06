
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  User, Microscope, Target, Database, Activity, Dna, FileText,
  ArrowRight, ChevronDown, FlaskConical, Github, Linkedin, Mail, Search
} from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'identity', label: 'Identity' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Expertise' },
  { id: 'problem-solving', label: 'Problem Solving' },
  { id: 'rd-application', label: 'R&D Value' },
  { id: 'contact', label: 'Contact' }
];

const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsVisible(true); });
    }, { threshold: 0.15 });
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div ref={domRef} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      {children}
    </div>
  );
};

const App = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020408] text-slate-300">
      <div className="grain-overlay" />
      <div className="bg-blob">
        <div className="blob-1" />
        <div className="blob-2" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020408]/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-lg text-white tracking-tighter">NAM GI WOONG</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-blue-400 transition-colors"
              >
                {s.label}
              </button>
            ))}
            <div className="h-4 w-px bg-white/10 mx-2" />
            <a href="mailto:ngw0509@naver.com" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Precision R&D Architect
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight whitespace-pre-line">
              분자의 언어로<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-text-gradient">
                과학적 근거
              </span>를<br />
              설계합니다.
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
              정밀한 데이터의 궤적을 쫓아, 연구를 넘어선 비즈니스의 확신을 제안하는 설계자 남기웅입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('research')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-3 group"
              >
                연구 사례 보기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all">
                CV 다운로드
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="./images/profile.jpg"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop'; }}
                alt="Nam Gi Woong"
                className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <div className="text-white text-3xl font-black tracking-tighter">NAM GI WOONG</div>
                <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mt-1">Researcher / Master of Science</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
          <ChevronDown />
        </div>
      </section>

      {/* Identity Section */}
      <section id="identity" className="py-40 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Target />
                </div>
                <h3 className="text-2xl font-black text-white">FOCUS</h3>
                <p className="text-slate-400 leading-relaxed font-medium">cGAS/STING 경로 중심 면역 연구를 통해 만성 염증을 제어하는 기전을 탐구합니다.</p>
              </div>
              <div className="space-y-6 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group">
                <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Microscope />
                </div>
                <h3 className="text-2xl font-black text-white">APPROACH</h3>
                <p className="text-slate-400 leading-relaxed font-medium">In vitro/In vivo 교차 검증을 통해 후보 물질의 단계별 효능을 정밀하게 분석합니다.</p>
              </div>
              <div className="space-y-6 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all group">
                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Database />
                </div>
                <h3 className="text-2xl font-black text-white">OUTCOME</h3>
                <p className="text-slate-400 leading-relaxed font-medium">실험실의 데이터를 제품의 신뢰를 뒷받침하는 가장 강력한 객관적 근거로 자산화합니다.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Deep Dive - Image Driven */}
      <section id="research" className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="flex-1 space-y-8">
                <div className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">Research Highlight</div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  Licochalcone A의<br />면역 억제 기전 입증
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">STING 경로 선택적 차단</h4>
                      <p className="text-slate-400">TBK1 및 IRF3 인산화를 농도 의존적으로 억제하여 전사 단계의 염증 반응을 하향 조절함을 입증했습니다.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">데이터 재현성 100% 확보</h4>
                      <p className="text-slate-400">환경 변수를 일원화한 표준 작업 지침서(SOP)를 수립하여 연구 신뢰도를 극대화했습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                  {/* 연구 그래프 이미지: images/research_graph.jpg */}
                  <img
                    src="./images/research_graph.jpg"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532187875605-1ef63823db17?q=80&w=1000&auto=format&fit=crop'; }}
                    alt="Research Graph"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-blue-400 border border-white/10">
                    Scientific Evidence
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-40 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-24">
              <span className="text-indigo-400 font-black tracking-[0.5em] text-xs uppercase">Core Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Technical Lab Skills</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'In Vitro Assays', items: ['Cell Culture', 'MTT / CCK-8', 'Luciferase Assay'], icon: <Activity /> },
                { name: 'Molecular Biology', items: ['Western Blot', 'RT-qPCR', 'ELISA'], icon: <Dna /> },
                { name: 'In Vivo Study', items: ['Mouse Handling', 'Dissection', 'Tissue Collection'], icon: <Microscope /> },
                { name: 'R&D Documentation', items: ['Protocol SOP', 'Risk Assessment', 'Report Writing'], icon: <FileText /> },
              ].map((skill, idx) => (
                <div key={idx} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group flex flex-col h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                    {React.cloneElement(skill.icon as React.ReactElement<any>, { className: "w-6 h-6 text-blue-400 group-hover:text-white" })}
                  </div>
                  <h3 className="text-white text-xl font-black mb-6">{skill.name}</h3>
                  <div className="space-y-3 mt-auto">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-500 font-semibold group-hover:text-slate-300 transition-colors">
                        <div className="w-1 h-1 rounded-full bg-blue-500" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section id="problem-solving" className="py-40 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-24">
              <span className="text-purple-400 font-black tracking-[0.5em] text-xs uppercase">Research Resilience</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">실패에서 찾은 프로토콜</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">재현성 확보를 위한 체계적 문제 해결 과정</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500" />

              <div className="space-y-20">
                {[
                  {
                    icon: <Search className="w-6 h-6" />,
                    title: '관찰',
                    subtitle: 'Positive Control 미발현',
                    description: 'ELISA 및 RNA 실험에서 예상되는 양성 대조군 결과가 일관성 없이 나타나는 현상을 발견',
                    color: 'blue'
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: '분석',
                    subtitle: '원인 파악',
                    description: '실험 노트 역추적 및 제조사 기술 지원 컨택을 통해 에탄올 잔류 및 시약 동결/해동 이슈 확인',
                    color: 'indigo'
                  },
                  {
                    icon: <Activity className="w-6 h-6" />,
                    title: '해결',
                    subtitle: '환경 변수 제거',
                    description: '시약 보관 조건 표준화 및 실험 전처리 프로세스 개선으로 재현성 100% 확보',
                    color: 'purple'
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: '표준화',
                    subtitle: 'SOP 배포',
                    description: '실험실 전체에 적용 가능한 표준 작업 지침서(SOP) 작성 및 팀 내 공유',
                    color: 'pink'
                  }
                ].map((step, idx) => (
                  <div key={idx} className={`flex items-center gap-12 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="space-y-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                        <div className={`text-${step.color}-400 font-black text-sm uppercase tracking-widest`}>
                          Step {idx + 1}
                        </div>
                        <h3 className="text-2xl font-black text-white">{step.title}</h3>
                        <h4 className="text-lg font-bold text-slate-300">{step.subtitle}</h4>
                        <p className="text-slate-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-${step.color}-600/20 border-4 border-[#020408] flex items-center justify-center text-${step.color}-400`}>
                        {step.icon}
                      </div>
                    </div>

                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* R&D Application Section */}
      <section id="rd-application" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-24">
              <span className="text-blue-400 font-black tracking-[0.5em] text-xs uppercase">Business Value</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">연구 데이터를 제품의 근거로</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">R&D 현장에서 요구되는 실질적 역량</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Dna className="w-8 h-8" />,
                  title: '기존연구',
                  points: [
                    '천연물 유래 성분의 기능성 지표 설정',
                    '효능 입증을 위한 In vitro/In vivo 데이터 구축'
                  ],
                  gradient: 'from-blue-600 to-cyan-600'
                },
                {
                  icon: <Microscope className="w-8 h-8" />,
                  title: '제약/바이오',
                  points: [
                    '후보 물질 스크리닝 및 효능 평가',
                    '분자 기전 규명을 통한 타겟 검증',
                    '위해성 평가 및 안전성 보고서 작성'
                  ],
                  gradient: 'from-indigo-600 to-purple-600'
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: '보고서 작성',
                  points: [
                    '위해성 평가 보고서 작성',
                    '식약처 가이드라인 검토 후 보고서 작성'
                  ],
                  gradient: 'from-purple-600 to-pink-600'
                }
              ].map((area, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${area.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <div className="relative p-10 rounded-3xl bg-[#020408] border border-white/10 space-y-8 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white">{area.title}</h3>
                    <ul className="space-y-4">
                      {area.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <ArrowRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-60 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              정밀한 데이터로<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">제품의 가치</span>를 증명합니다.
            </h2>
            <div className="flex flex-col items-center gap-8">
              <a
                href="mailto:ngw0509@naver.com"
                className="group relative px-12 py-6 bg-white text-black font-black text-2xl rounded-3xl overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <div className="flex gap-10 text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Scholar</a>
                <a href="#" className="hover:text-white transition-colors">Resume PDF</a>
              </div>
            </div>
            <div className="mt-40 text-slate-700 text-[10px] font-black tracking-widest uppercase border-t border-white/5 pt-12">
              © 2024 NAM GI WOONG / ALL RIGHTS RESERVED
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
