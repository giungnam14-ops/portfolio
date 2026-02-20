
import React, { useState, useEffect, useRef } from 'react';
import './index.css';

import { createRoot } from 'react-dom/client';
// Lucide icons replaced with pure SVG/Emoji for build stability
const Icon = ({ name }: { name: string }) => {
  const icons: Record<string, string> = {
    User: "👤",
    Lightbulb: "💡",
    BrainCircuit: "🧠",
    RefreshCw: "🔄",
    Settings: "⚙️",
    Archive: "📁",
    Wallet: "💳",
    MessageSquare: "💬",
    Clock: "🕒",
    Layers: "📚",
    Dna: "🧬",
    Activity: "📈",
    FileText: "📝",
    BarChart3: "📊",
    ChevronDown: "▼",
    ArrowRight: "→",
    FlaskConical: "🧪",
    CheckCircle2: "✅",
    Plus: "+",
    Minus: "-"
  };
  return <span>{icons[name] || "•"}</span>;
};

// --- Content Constants ---
const CONTENT = {
  hero: {
    main: "성실함으로 성과를 만드는 연구자",
    sub: "정밀한 데이터 흐름과 재현성 있는 실험으로 연구를 비즈니스 가치로 연결합니다.",
  },
  about: [
    {
      title: "About Me",
      desc: "저는 면역 반응과 기능성 소재의 효과를 연구하며, 실험 결과를 단순히 수치로 비교하기보다 어떤 상황에서 어떤 변화가 나타났는지를 중심으로 살펴왔습니다. 연구 과정 전반에서 결과의 의미를 스스로 납득할 때까지 고민하는 편입니다.",
      icon: <Icon name="User" />
    },
    {
      title: "How I Research",
      desc: "연구를 진행할 때 “이 결과가 왜 나왔인지”를 먼저 생각합니다. 실험 설계부터 결과 해석까지의 흐름이 끊기지 않도록 신경 쓰며, 가능한 한 메커니즘 관점에서 설명하려고 노력해 왔습니다.",
      icon: <Icon name="Lightbulb" />
    },
    {
      title: "My Strengths",
      desc: "실험 결과를 지표와 맥락을 함께 놓고 해석하는 점, 실험 과정과 결과를 정리해 공유하는 데 익숙한 편, 그리고 연구 결과를 실제 활용 상황에 대입해 생각해보는 태도를 갖추고 있습니다.",
      icon: <Icon name="BrainCircuit" />
    }
  ],
  lab: {
    name: "생체방어 및 염증제어 연구실",
    affiliation: "가톨릭대학교 약학대학",
    pi: "이주영 교수님",
    description: "선천면역 반응의 핵심 조절 기전을 연구하며, 염증 반응을 제어할 수 있는 새로운 타겟과 후보 물질을 발굴하는 연구실입니다.",
    focus: [
      {
        title: "선천면역 신호전달",
        desc: "TLR, Inflammasome, cGAS/STING 등 다양한 패턴 인식 수용체의 활성 조절 기전 연구"
      },
      {
        title: "염증 제어 물질 발굴",
        desc: "천연물 및 합성 화합물을 활용하여 만성 염증 및 자가면역 질환 치료를 위한 후보 물질 검증"
      },
      {
        title: "질환 모델 연구",
        desc: "In vitro 및 In vivo 모델을 활용한 면역 관련 질환의 병태생리 이해 및 치료 효능 평가"
      }
    ]
  },
  workMethod: {
    title: "How I Work in Research",
    points: [
      {
        icon: <Icon name="RefreshCw" />,
        text: "실험 결과를 단순한 수치로 보기보다는, 조건에 따른 변화와 그 원인을 중심으로 정리해왔습니다."
      },
      {
        icon: <Icon name="Settings" />,
        text: "실험 설계부터 수행, 데이터 정리, 해석까지의 과정이 끊기지 않도록 흐름을 관리하는 방식으로 연구를 진행했습니다."
      },
      {
        icon: <Icon name="Archive" />,
        text: "연구 결과는 이후 다시 활용할 수 있도록 문서와 데이터 형태로 정리하는 데 집중했습니다."
      },
      {
        icon: <Icon name="Wallet" />,
        text: "연구실 운영과 관련된 재고 정리, 소모품 관리, 기본적인 회계 업무에도 함께 참여했습니다."
      },
      {
        icon: <Icon name="MessageSquare" />,
        text: "실험 진행 중 결과 해석이나 실험 설계 방향에 대한 의견 차이가 있을 경우, 실험 조건과 기존 데이터를 기준으로 대안을 정리해 의견을 제시했습니다."
      },
      {
        icon: <Icon name="Clock" />,
        text: "논의가 길어지거나 방향이 정리되지 않아 실험 진행이 지연되는 상황에서는, 쟁점을 정리해 공유하며 다음 단계로 이어질 수 있도록 조율했습니다."
      }
    ]
  },
  skills: [
    {
      name: "세포 실험 (In vitro)",
      context: "Cell culture, MTT assay, Luciferase assay, Western blot, mRNA 분리 및 qPCR",
      icon: <Icon name="Layers" />
    },
    {
      name: "면역·단백질 분석",
      context: "사이토카인 및 단백질 정량 분석 (ELISA)",
      icon: <Icon name="Dna" />
    },
    {
      name: "동물 실험 (In vivo)",
      context: "마우스 복강 내 주사, 마취, 해부, 조직 채취",
      icon: <Icon name="Activity" />
    },
    {
      name: "보고서 작성",
      context: "데이터 기반 보고서, 프레젠테이션 자료 작성",
      icon: <Icon name="FileText" />
    }
  ],
  projects: [
    {
      title: "화장품 원료의 안전성 검토를 위한 위해성평가 연구 - 기타 성분(1)",
      period: "2024.02 - 2024.12",
      role: "참여연구원",
      description: "국가 R&D 과제로서 화장품 원료의 안전성을 검토하고 위해성 평가를 수행하여 제품 안전 관리의 과학적 근거를 마련했습니다.",
      tasks: [
        "화장품 원료별 독성 자료 수집 및 위해도 결정 (Risk Characterization)",
        "정부 지원 국가 연구 과제 수행 및 데이터 검증",
        "규제 대응을 위한 위해성 평가 보고서 작성 및 최적화"
      ],
      tags: ["Risk Assessment", "Regulatory Affairs", "Safety Review"]
    },
    {
      title: "화장품 안전관리 기반 강화를 위한 위해평가 기술 고도화(1)",
      period: "2023.01 - 2023.11",
      role: "참여연구원",
      description: "화장품 안전 관리 체계의 고도화를 위해 위해평가 기술을 연구하고 관련 데이터를 정교화하는 프로젝트에 참여했습니다.",
      tasks: [
        "위해평가 기술 고도화를 위한 기술적 지표 분석 및 데이터 정리",
        "대형 국가 연구 과제 참여를 통한 연구 프로세스 지원",
        "안전관리 기반 강화를 위한 유효 지표 추적 및 분석"
      ],
      tags: ["Technology Advancement", "Safety Management", "Data Analysis"]
    }
  ],
  thesis: {
    title: "Licochalcone A에 의한 cGAS/STING 경로 억제 및 항염증 기전 연구",
    subtitle: "Master's Thesis / 천연물 유래 성분의 항염 기전 규명 및 데이터 패키징",
    period: "2022.03 - 2024.02",
    summary: "기존 항염 소자의 부작용을 보완할 수 있는 고효율·저독성 천연물 후보 물질의 상세 작용 원리 근거 부족 문제를 해결하기 위해 cGAS/STING 경로를 중심으로 기전을 규명했습니다.",
    details: [
      {
        step: "01. cGAS Definition",
        title: "cGAS: 세포 내 DNA 감지 센서",
        content: "cGAS(cyclic GMP-AMP synthase)는 세포질 내에 비정상적으로 존재하는 dsDNA를 감지하는 핵심 패턴 인식 수용체(PRR)입니다.",
        extendedContent: "cGAS는 dsDNA와 결합하여 ATP와 GTP로부터 2'3'-cGAMP를 합성합니다. 이 cGAMP는 STING의 리간드로 작용하여 ER에서 Golgi로의 전위를 유도하고, 최종적으로 TBK1/IRF3 경로를 통해 Type I Interferon 및 염증성 사이토카인 생성을 촉진합니다."
      },
      {
        step: "02. Licochalcone A",
        title: "Lico A: 감초 유래 천연 화합물",
        content: "Licochalcone A(Lico A)는 감초 뿌리에서 추출한 천연 칼콘 성분으로, 본 연구에서는 cGAS 활성 억제 기전을 탐구했습니다.",
        extendedContent: "기존 연구에서는 NLRP3 인플라마좀 억제 효과가 보고되었으나, 본 연구에서는 cGAS 활성 부위에 직접적으로 작용하거나 상위 신호를 차단하여 cGAMP 생성을 억제하는 가능성을 확인했습니다. 이는 자가면역 질환 및 만성 염증 조절을 위한 새로운 천연물 유래 후보 물질로서의 가치를 가집니다."
      },
      {
        step: "03. Experimental Methods & Mechanism",
        title: "다각적 실험을 통한 효능 및 기전 검증",
        content: "Luciferase Assay 및 Western Blot 분석을 통해 STING, TBK1, IRF3의 인산화 억제 과정을 분자 수준에서 입증했습니다.",
        extendedContent: "THP-1 Lucia 세포주를 활용한 ISRE/NF-κB Reporter Assay 결과, Lico A 농도 의존적으로(5, 10 μM) 발광 신호가 유의미하게 감소함을 확인했습니다. 또한 Western Blot 결과에서 P-STING, P-TBK1, P-IRF3 단백질 발현이 대조군 대비 현저히 줄어든 데이터를 확보하여 기전을 확립했습니다."
      }
    ]
  },
  closing: "재현 가능한 실험과 데이터를 통해 연구 가치를 증명하는 남기웅입니다."
};

interface ScrollRevealProps {
  children: React.ReactNode;
  key?: React.Key;
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
    >
      {children}
    </div>
  );
};

interface ProjectCardProps {
  project: typeof CONTENT.projects[0];
  key?: React.Key;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 md:p-14 hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-widest uppercase">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-bold">
            <span className="flex items-center gap-2"><Icon name="Clock" /> {project.period}</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span className="flex items-center gap-2 text-indigo-400"><Icon name="User" /> {project.role}</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            {project.description}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Key Tasks & Achievements</p>
          <ul className="space-y-4">
            {project.tasks.map((task, idx) => (
              <li key={idx} className="flex gap-4 items-start text-slate-400 group-hover:text-slate-200 transition-colors">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span className="text-base md:text-lg font-medium leading-relaxed">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface ThesisDetailCardProps {
  detail: typeof CONTENT.thesis.details[0];
  key?: React.Key;
}

const ThesisDetailCard = ({ detail }: ThesisDetailCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
      className={`p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group/item ${isOpen ? 'ring-1 ring-emerald-500/30 bg-white/10' : ''}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase">{detail.step}</div>
        <div className="pt-1">
          {isOpen ? <Icon name="Minus" /> : <Icon name="Plus" />}
        </div>
      </div>
      <h4 className="text-white text-xl font-black mb-4 tracking-tight">{detail.title}</h4>
      <p className="text-slate-400 text-base font-medium leading-relaxed">
        {detail.content}
      </p>

      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pt-6 border-t border-white/10">
            <p className="text-slate-200 text-sm font-medium leading-relaxed italic mb-4">
              "Deep Dive Data & Analysis"
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {detail.extendedContent}
            </p>
            {detail.step.includes("03") && (
              <div className="mt-6 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="flex items-center gap-3 text-emerald-400 mb-3">
                  <Icon name="BarChart3" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Experimental Evidence</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>Lico A Concentration</span>
                    <span>Inhibition Rate</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%]" />
                  </div>
                  <p className="text-[10px] text-slate-500 text-right">85% Inhibition at 10μM (p &lt; 0.001)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ThesisSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const thesis = CONTENT.thesis;

  return (
    <section id="thesis" className="py-40 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-24 text-center">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Academic Achievement</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">Master's Thesis</h2>
            <p className="max-w-3xl mx-auto text-slate-400 text-lg font-medium leading-relaxed">
              석사 과정 동안 집중적으로 연구한 핵심 기전과 그 학술적 가치를 상세히 공개합니다.
            </p>
          </div>

          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`relative overflow-hidden bg-gradient-to-br from-emerald-900/20 to-indigo-900/20 border border-white/10 rounded-[4rem] p-12 md:p-20 cursor-pointer transition-all duration-700 group ${isExpanded ? 'ring-2 ring-emerald-500/50' : 'hover:bg-white/5'}`}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black tracking-widest uppercase">
                  Featured Research
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {thesis.title}
                </h3>
                <p className="text-emerald-400 text-lg font-bold tracking-tight">
                  {thesis.subtitle}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <span className="text-slate-500 font-bold tracking-widest uppercase text-xs">{thesis.period}</span>
                <div className={`w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-transform duration-500 ${isExpanded ? 'rotate-180 bg-emerald-600' : 'group-hover:scale-110'}`}>
                  <Icon name="ChevronDown" />
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-4xl mb-12">
              {thesis.summary}
            </p>

            <div className={`grid transition-all duration-700 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="pt-12 border-t border-white/10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {thesis.details.map((detail, idx) => (
                    <ThesisDetailCard key={idx} detail={detail} />
                  ))}
                </div>
                <div className="mt-12 flex justify-center">
                  <div className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold tracking-widest uppercase">
                    Click to close deep dive
                  </div>
                </div>
              </div>
            </div>

            {!isExpanded && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-emerald-400 font-black text-[10px] tracking-[0.4em] uppercase animate-pulse">
                Click to explore research details <Icon name="ArrowRight" />
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const DNABackground = () => null;

const App = () => {
  return (
    <div className="min-h-screen bg-[#020408] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-white relative overflow-x-hidden">

      {/* --- Trendy Background Overlays --- */}
      <DNABackground />
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]"
        style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-600/10 rounded-full blur-[160px]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-emerald-600/5 rounded-full blur-[140px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[60] bg-[#020408]/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/40">
              <Icon name="FlaskConical" />
            </div>
            <span className="font-black text-sm tracking-[0.2em] text-white uppercase">NAM GI WOONG</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            {['Hero', 'About', 'Lab', 'Thesis', 'Projects', 'Method', 'Expertise'].map((item) => (
              <a key={item} href={`#${item.toLowerCase() === 'method' ? 'work-method' : item.toLowerCase() === 'expertise' ? 'skills' : item.toLowerCase()}`} className="hover:text-emerald-400 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Screen 1: HERO */}
      <section id="hero" className="relative min-h-screen flex items-center px-6 z-10 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black tracking-[0.4em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Precision R&D Architect
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight whitespace-pre-line">
                <span className="text-emerald-400">성실함</span>으로 성과를 만드는 연구자
              </h1>
              <h2 className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                {CONTENT.hero.sub}
              </h2>
              <div className="flex gap-4">
                <div className="w-12 h-1 bg-emerald-600 rounded-full" />
                <div className="w-4 h-1 bg-white/10 rounded-full" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/20 to-indigo-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[4/5] bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/researcher/800/1000"
                    alt="Nam Gi Woong"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-lg font-black tracking-tight">NAM GI WOONG</p>
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mt-1">Researcher / Master of Science</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <Icon name="ChevronDown" />
        </div>
      </section>

      {/* Screen 2: ABOUT */}
      <section id="about" className="py-40 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {CONTENT.about.map((card, i) => (
                <div key={i} className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all hover:bg-white/[0.04] hover:border-emerald-500/30 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    {card.icon}
                  </div>
                  <h3 className="text-white text-2xl font-black mb-6 tracking-tight">{card.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Screen 3: MASTER'S LAB */}
      <section id="lab" className="py-40 px-6 max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-24 text-center">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Academic Background</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">Master's Lab</h2>
            <p className="max-w-3xl mx-auto text-slate-400 text-lg font-medium leading-relaxed">
              가톨릭대학교 약학대학에서 면역 반응 조절 기전을 연구하며 과학적 사고의 기초를 다졌습니다.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-500">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                    {CONTENT.lab.name}
                  </h3>
                  <div className="flex items-center gap-4 text-emerald-400 font-bold text-sm tracking-widest uppercase">
                    <span>{CONTENT.lab.affiliation}</span>
                    <span className="w-1 h-1 bg-emerald-800 rounded-full" />
                    <span>PI: {CONTENT.lab.pi}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-xl leading-relaxed font-medium">
                  {CONTENT.lab.description}
                </p>

                <div className="grid gap-6">
                  {CONTENT.lab.focus.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all group/item">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                        <Icon name="CheckCircle2" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-[3rem] blur-2xl opacity-50" />
                <div className="relative aspect-video bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <div className="text-center p-10">
                    <Icon name="FlaskConical" />
                    <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">Lab Environment & Research Focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Screen 4: MASTER'S THESIS */}
      <ThesisSection />

      {/* Screen 5: R&D PROJECTS */}
      <section id="projects" className="py-40 px-6 max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-24 text-center">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Research Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">R&D Projects</h2>
            <p className="max-w-3xl mx-auto text-slate-400 text-lg font-medium leading-relaxed">
              참여했던 주요 연구 과제와 프로젝트를 통해 실질적인 R&D 수행 역량을 증명합니다.
            </p>
          </div>
          <div className="grid gap-12">
            {CONTENT.projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Screen 5: HOW I WORK IN RESEARCH */}
      <section id="work-method" className="py-40 px-6 relative z-10 bg-emerald-600/[0.02]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-[#0a0d14] to-[#020408] rounded-[4.5rem] border border-white/10 p-14 md:p-24 shadow-2xl relative overflow-hidden">
              <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-[10px] block mb-12 flex items-center gap-4">
                <div className="h-px w-8 bg-emerald-600" /> Professional Standards
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-20 tracking-tight leading-tight">{CONTENT.workMethod.title}</h3>

              <div className="grid md:grid-cols-2 gap-8">
                {CONTENT.workMethod.points.map((point, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 flex gap-8 items-start hover:bg-white/[0.05] transition-all group">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                      {point.icon}
                    </div>
                    <p className="text-slate-300 text-lg font-bold leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Screen 5: SKILLS & EXPERTISE */}
      <section id="skills" className="py-40 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">R&D Toolbox</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Expertise</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {CONTENT.skills.map((skill, i) => (
            <ScrollReveal key={i}>
              <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:bg-white/10 hover:shadow-lg transition-all group backdrop-blur-sm h-full flex flex-col items-start">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-400 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-white text-xl font-black mb-4 tracking-tight">{skill.name}</h3>
                <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors whitespace-pre-line">
                  {skill.context}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Screen 6: CLOSING */}
      <footer className="py-60 bg-[#020408] border-t border-white/5 text-center relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-24 tracking-tight leading-[1.1] max-w-4xl mx-auto">
              {CONTENT.closing}
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-16 py-7 bg-emerald-600 text-white font-bold rounded-[2.5rem] transition-all hover:scale-105 shadow-[0_0_50px_rgba(16,185,129,0.3)] text-xl flex items-center gap-4 group">
                Contact Now <Icon name="ArrowRight" />
              </button>
              <button className="px-16 py-7 border border-white/10 text-white font-bold rounded-[2.5rem] hover:bg-white/5 transition-all text-xl">
                Download Resume
              </button>
            </div>
            <div className="mt-40 pt-16 border-t border-white/5 text-slate-600 text-[10px] font-bold tracking-[0.6em] uppercase flex flex-col md:flex-row justify-between items-center gap-8">
              <span>&copy; 2024 NAM GI WOONG / R&D PORTFOLIO</span>
              <div className="flex gap-12 text-[11px]">
                <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
                <span className="hover:text-white cursor-pointer transition-colors">Google Scholar</span>
                <span className="hover:text-white cursor-pointer transition-colors">Notion</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
