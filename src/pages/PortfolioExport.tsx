import React from 'react';
import { allProjects, experienceData, educationData, contactInfo } from '../data/portfolio';
import { Briefcase, Calendar, Target, PenTool, Layout, CheckCircle2, BarChart3, Search, Lightbulb, User2, Mail, Phone, MapPin, Linkedin, Award, GraduationCap, Globe, Layers, Zap } from 'lucide-react';
import yongwooProfile from '../assets/yongwoo_profile_car.png';

const PortfolioExport: React.FC = () => {
    return (
        <div className="bg-neutral-100 min-h-screen p-4 md:p-10 flex flex-col items-center gap-10 print:bg-white print:p-0">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            -webkit-print-color-adjust: exact;
          }
          .a4-page {
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            page-break-after: always;
            height: 297mm;
            width: 210mm;
          }
          .no-print {
            display: none !important;
          }
        }
        
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }

        .a4-page {
          background: white;
          width: 210mm;
          height: 297mm;
          padding: 20mm;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }

        .gradient-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: #d4af37;
        }

        .section-title {
          font-family: 'Outfit';
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9ca3af;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          border-bottom: 1px solid #f3f4f6;
          padding-bottom: 8px;
        }
      `}</style>

            {/* Control Panel (Hidden on Print) */}
            <div className="no-print bg-white p-8 rounded-3xl shadow-2xl border border-neutral-200 flex flex-col items-center gap-6 max-w-2xl text-center">
                <div className="bg-amber-50 p-4 rounded-full">
                    <PenTool className="text-amber-600" size={32} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 font-outfit mb-2">Portfolio Book Export</h1>
                    <p className="text-neutral-600">
                        커버, CV, 그리고 모든 프로젝트 상세 리포트가 포함된 <b>완성형 포트폴리오 북</b>입니다.<br />
                        브라우저 설정에서 <b>'배경 그래픽'</b>을 반드시 켜주세요.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => window.print()}
                        className="bg-neutral-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg shadow-neutral-200"
                    >
                        PDF로 전체 저장하기
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-white text-neutral-600 px-10 py-4 rounded-full font-semibold border border-neutral-200 hover:bg-neutral-50 transition-all"
                    >
                        돌아가기
                    </button>
                </div>
            </div>

            {/* COVER PAGE */}
            <div className="a4-page font-inter text-neutral-800">
                <div className="gradient-line" style={{ background: '#d4af37' }} />
                <div className="flex-1 flex flex-col justify-center items-center text-center p-10">
                    <div className="mb-12 relative">
                        <div className="w-48 h-48 rounded-full border-2 border-amber-100 p-2">
                            <img
                                src={yongwooProfile}
                                className="w-full h-full object-cover rounded-full"
                                alt="Profile"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg border border-neutral-100">
                            <Zap size={24} className="text-amber-500" />
                        </div>
                    </div>

                    <h1 className="text-6xl font-bold font-outfit text-neutral-900 tracking-tighter mb-4">
                        YONGWOO <br /> KIM
                    </h1>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-[1px] w-12 bg-amber-200" />
                        <span className="text-xs font-black tracking-[0.4em] text-amber-600 uppercase">Portfolio 2026</span>
                        <div className="h-[1px] w-12 bg-amber-200" />
                    </div>

                    <p className="text-xl font-light text-neutral-500 max-w-sm leading-relaxed mb-20 italic">
                        "Bridging the Gap Between <br />
                        <span className="text-neutral-900 font-medium">Complex AI & Intuitive Design</span>"
                    </p>

                    <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-left border-t border-neutral-100 pt-12">
                        <div>
                            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Expertise</p>
                            <p className="text-[11px] font-semibold text-neutral-800">DATA-DRIVEN UX/UI</p>
                            <p className="text-[11px] font-semibold text-neutral-800">AI SOLUTION STRATEGY</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Based In</p>
                            <p className="text-[11px] font-semibold text-neutral-800">ABU DHABI, UAE</p>
                            <p className="text-[11px] font-semibold text-neutral-800">SEOUL, KOREA</p>
                        </div>
                    </div>
                </div>

                <footer className="mt-auto flex justify-between items-end">
                    <div className="text-[10px] text-neutral-400 font-medium">
                        STRATE ÉCOLE DE DESIGN — MA MOBILITY DESIGN
                    </div>
                    <div className="text-[10px] font-bold text-neutral-300 tracking-[0.2em]">SELECTED WORKS 2017-2026</div>
                </footer>
            </div>

            {/* CV PAGE */}
            <div className="a4-page font-inter text-neutral-800">
                <div className="gradient-line" style={{ background: '#1a1a1a' }} />

                <header className="mb-12 flex justify-between items-start">
                    <div>
                        <h2 className="text-3xl font-bold font-outfit text-neutral-900 mb-1 tracking-tight">Yongwoo Kim</h2>
                        <p className="text-amber-600 font-bold text-[10px] tracking-widest uppercase mb-4">Product Designer & AI UX Specialist</p>

                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                                <Mail size={12} className="text-neutral-400" /> {contactInfo.email}
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                                <Phone size={12} className="text-neutral-400" /> {contactInfo.phone}
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                                <MapPin size={12} className="text-neutral-400" /> {contactInfo.location}
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                                <Linkedin size={12} className="text-neutral-400" /> {contactInfo.linkedin}
                            </div>
                        </div>
                    </div>

                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-neutral-100">
                        <img src={yongwooProfile} className="w-full h-full object-cover" />
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-10 flex-1 overflow-hidden">
                    {/* Main Experience Column */}
                    <div className="col-span-8 flex flex-col gap-10">
                        <section>
                            <h3 className="section-title"><Briefcase size={12} /> Work Experience</h3>
                            <div className="space-y-8">
                                {experienceData.map((exp, i) => (
                                    <div key={i} className="relative pl-6 border-l border-neutral-100">
                                        <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-neutral-900" />
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="text-[13px] font-bold text-neutral-900">{exp.role}</h4>
                                            <span className="text-[10px] font-bold text-neutral-400">{exp.year}</span>
                                        </div>
                                        <p className="text-[11px] font-semibold text-neutral-600 mb-2">{exp.company} — <span className="font-normal italic">{exp.location}</span></p>
                                        <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{exp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="section-title"><GraduationCap size={12} /> Education</h3>
                            <div className="space-y-6">
                                {educationData.map((edu, i) => (
                                    <div key={i} className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-[12px] font-bold text-neutral-900 mb-0.5">{edu.school}</h4>
                                            <p className="text-[11px] text-neutral-600">{edu.degree}</p>
                                            <p className="text-[10px] text-neutral-400 italic mt-0.5">{edu.desc} | {edu.location}</p>
                                        </div>
                                        <span className="text-[10px] font-bold text-neutral-400">{edu.year}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Skills/Awards Column */}
                    <div className="col-span-4 flex flex-col gap-10 border-l border-neutral-50 pl-6">
                        <section>
                            <h3 className="section-title"><Target size={12} /> Core Skills</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {["UX Strategy", "AI Native UI", "HMI", "Motion Logic", "Design Systems", "Product Management", "Data Logging", "Figma", "Rive", "SwiftUI", "React"].map(skill => (
                                    <span key={skill} className="text-[9px] px-2 py-1 bg-neutral-50 border border-neutral-100 rounded-md font-medium text-neutral-600 uppercase">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="section-title"><Award size={12} /> Awards</h3>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-neutral-900">BMW Young Design Award Winner</span>
                                    <span className="text-[9px] text-neutral-500">BMW France / PSA Group</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-neutral-900">Culture Platform UX Grand Prize</span>
                                    <span className="text-[9px] text-neutral-500">MoneyToday Newspaper Corp</span>
                                </div>
                            </div>
                        </section>

                        <section className="bg-neutral-900 text-white p-5 rounded-2xl mt-auto">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-3">Vision</h3>
                            <p className="text-[10px] leading-relaxed opacity-80 font-light">
                                I aim to democratize complex AI through design, bridging human psychology with high-performance algorithms to create products that are both powerful and human-centric.
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                                <Globe size={12} className="text-amber-500" />
                                <span className="text-[9px] font-bold tracking-widest uppercase">Global Professional</span>
                            </div>
                        </section>
                    </div>
                </div>

                <footer className="mt-8 pt-6 border-t border-neutral-50 flex justify-between items-center text-[8px] text-neutral-400 uppercase font-black tracking-widest">
                    <div>Yongwoo Kim — Resume 2026</div>
                    <div className="flex gap-4">
                        <span>LinkedIn: yongwoo-kim</span>
                        <span>Email: yongwoo.kim@strate.design</span>
                    </div>
                </footer>
            </div>

            {/* PROJECT PAGES (Reused existing content with deep-dive updates) */}
            {allProjects.map((project) => (
                <React.Fragment key={project.id}>
                    {/* Page 1: Project Overview & Strategy */}
                    <div className="a4-page font-inter text-neutral-800">
                        <div className="gradient-line" style={{ background: project.color || '#d4af37' }} />

                        <header className="mb-12">
                            <div className="flex justify-between items-center mb-6">
                                <div className="bg-neutral-900 text-white text-[9px] px-3 py-1 rounded-full font-bold tracking-tighter uppercase">
                                    {project.category}
                                </div>
                                <div className="text-[10px] font-medium text-neutral-400">
                                    REF NO. {project.id.toString().padStart(3, '0')} — PORTFOLIO 2026
                                </div>
                            </div>
                            <h2 className="text-4xl font-bold font-outfit text-neutral-900 leading-[1.1] mb-6">
                                {project.title}
                            </h2>
                            <div className="grid grid-cols-4 gap-8 py-6 border-y border-neutral-100 italic">
                                <div>
                                    <h4 className="text-[9px] font-bold text-neutral-400 uppercase mb-1">Duration</h4>
                                    <p className="text-[11px] font-semibold text-neutral-800">{project.duration}</p>
                                </div>
                                <div>
                                    <h4 className="text-[9px] font-bold text-neutral-400 uppercase mb-1">My Role</h4>
                                    <p className="text-[11px] font-semibold text-neutral-800">{project.role}</p>
                                </div>
                                <div className="col-span-2">
                                    <h4 className="text-[9px] font-bold text-neutral-400 uppercase mb-1">Core Tools</h4>
                                    <p className="text-[11px] font-semibold text-neutral-800">{project.tools?.join(', ')}</p>
                                </div>
                            </div>
                        </header>

                        <div className="grid grid-cols-12 gap-10 flex-1 overflow-hidden">
                            <div className="col-span-7 flex flex-col gap-10">
                                <section>
                                    <h3 className="section-title"><Layout size={12} /> Project Overview</h3>
                                    <p className="text-[13px] leading-relaxed text-neutral-600 font-light">
                                        {project.overview}
                                    </p>
                                </section>

                                {project.challenge && (
                                    <section>
                                        <h3 className="section-title"><Target size={12} /> The Challenge</h3>
                                        <p className="text-[13px] leading-relaxed text-neutral-700 font-medium">
                                            "{project.challenge}"
                                        </p>
                                    </section>
                                )}

                                {project.strategy && (
                                    <section>
                                        <h3 className="section-title"><CheckCircle2 size={12} /> Strategic Hypotheses</h3>
                                        <div className="space-y-4">
                                            {project.strategy.hypotheses?.map((h, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <span className="text-amber-500 font-bold text-[14px]">0{i + 1}</span>
                                                    <div>
                                                        <h4 className="text-[12px] font-bold text-neutral-900 mb-1">{h.title}</h4>
                                                        <p className="text-[11px] text-neutral-500 leading-normal">{h.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </div>

                            <div className="col-span-5 flex flex-col gap-10">
                                <section className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                    <h3 className="section-title"><Search size={12} /> Key Goals</h3>
                                    <ul className="space-y-4">
                                        {project.strategy?.goals?.map((goal, i) => (
                                            <li key={i} className="flex flex-col gap-1">
                                                <span className="text-[11px] font-bold text-neutral-800">● {goal.title}</span>
                                                <span className="text-[10px] text-neutral-500 pl-4">{goal.desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="section-title"><User2 size={12} /> Team & Collaboration</h3>
                                    <div className="space-y-5">
                                        {project.collaboration?.teams?.map((team, i) => (
                                            <div key={i}>
                                                <p className="text-[11px] font-bold text-neutral-900">{team.name}</p>
                                                <p className="text-[10px] text-neutral-500 leading-relaxed mt-1">{team.contribution}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        <footer className="mt-auto pt-6 border-t border-neutral-100 flex justify-between items-end text-[9px] text-neutral-400">
                            <div className="max-w-[120mm]">
                                <p className="font-bold text-neutral-500">PROPRIETARY & CONFIDENTIAL</p>
                                <p>Selected Project Documentation / 2017-2026</p>
                            </div>
                            <div className="text-right">
                                <p className="font-outfit text-neutral-900 font-bold">{project.id + 1}A / START</p>
                            </div>
                        </footer>
                    </div>

                    {/* Page 2: Implementation & Visual Execution */}
                    <div className="a4-page font-inter text-neutral-800">
                        <div className="gradient-line" style={{ background: project.color || '#d4af37' }} />
                        <h3 className="section-title mb-8"><PenTool size={12} /> Project Execution & Visual Narrative</h3>

                        <div className="space-y-10 overflow-hidden">
                            {project.implementation?.slice(0, 2).map((chapter, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-[10px] font-bold text-amber-500 tracking-widest">CHAPTER 0{i + 1}</span>
                                        <h4 className="text-[16px] font-bold font-outfit text-neutral-900">{chapter.title}</h4>
                                    </div>
                                    <p className="text-[12px] leading-relaxed text-neutral-500">
                                        {chapter.desc}
                                    </p>
                                    {chapter.image && (
                                        <div className="rounded-xl overflow-hidden border border-neutral-100 shadow-sm aspect-[16/8]">
                                            <img src={chapter.image} alt={chapter.title} className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    {chapter.items && (
                                        <div className="grid grid-cols-2 gap-4">
                                            {chapter.items.slice(0, 2).map((item, idx) => (
                                                <div key={idx} className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                                                    {item.image && (
                                                        <img src={item.image} alt={item.title} className="rounded-lg mb-3 h-24 w-full object-cover" />
                                                    )}
                                                    <h5 className="text-[11px] font-bold text-neutral-800 mb-1">{item.title}</h5>
                                                    <p className="text-[10px] text-neutral-500 leading-tight">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <footer className="mt-auto pt-6 border-t border-neutral-100 flex justify-between items-end text-[9px] text-neutral-400">
                            <div className="text-right ml-auto">
                                <p className="font-outfit text-neutral-900 font-bold">{project.id + 1}B / PROCESS</p>
                            </div>
                        </footer>
                    </div>

                    {/* Page 3: Data Validation & Insights (If available) */}
                    {(project.validation || project.insights) && (
                        <div className="a4-page font-inter text-neutral-800">
                            <div className="gradient-line" style={{ background: project.color || '#d4af37' }} />
                            <h3 className="section-title mb-8"><BarChart3 size={12} /> Data-Driven Validation & Final Insights</h3>

                            <div className="grid grid-cols-2 gap-10 flex-1 min-h-0 overflow-hidden">
                                {project.validation ? (
                                    <div className="flex flex-col gap-8">
                                        <div className="bg-neutral-900 p-6 rounded-2xl text-white">
                                            <h4 className="text-[11px] font-bold font-outfit mb-4 text-amber-400 uppercase tracking-widest flex items-center gap-2">
                                                <BarChart3 size={12} /> Quantitative Analysis
                                            </h4>
                                            {project.validation.collection && (
                                                <div className="space-y-4">
                                                    <p className="text-[11px] leading-relaxed opacity-80">{project.validation.collection.desc}</p>
                                                    <div className="rounded-lg overflow-hidden border border-neutral-800">
                                                        <img src={project.validation.collection.image || project.validation.abandonmentAnalysis?.image} className="w-full" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-6">
                                            {(project.validation.abandonmentAnalysis?.quote || project.validation.feedbackAnalysis?.quote) && (
                                                <div className="italic text-[12px] text-neutral-500 border-l-4 border-amber-100 pl-4 py-2">
                                                    "{project.validation.abandonmentAnalysis?.quote || project.validation.feedbackAnalysis?.quote}"
                                                </div>
                                            )}

                                            <div className="space-y-3">
                                                <h5 className="text-[10px] font-bold uppercase text-neutral-400">Key Metrics Captured</h5>
                                                {project.validation.feedbackAnalysis?.metrics?.map((m, idx) => (
                                                    <div key={idx} className="flex justify-between items-center text-[11px] py-1 border-b border-neutral-50">
                                                        <span className="font-medium text-neutral-800">{m.title}</span>
                                                        <span className="text-[9px] text-amber-600 font-bold uppercase">Measured</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-neutral-50 rounded-2xl p-10 flex items-center justify-center text-neutral-400 text-[11px]">
                                        No Validation Data Available for this Phase
                                    </div>
                                )}

                                <div className="flex flex-col gap-10">
                                    <section>
                                        <h3 className="section-title"><Lightbulb size={12} /> Project Takeaways</h3>
                                        <div className="space-y-4">
                                            {project.insights?.map((insight, i) => (
                                                <div key={i} className="flex gap-3">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                                                    <p className="text-[11px] leading-relaxed text-neutral-600">
                                                        {insight}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {project.validation?.strategyRefinement && (
                                        <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                            <h4 className="text-[12px] font-bold text-amber-900 mb-3">Refined Direction</h4>
                                            <div className="space-y-4">
                                                {project.validation.strategyRefinement.subSections?.map((sub, idx) => (
                                                    <div key={idx}>
                                                        <p className="text-[10px] font-bold text-amber-800">{sub.title}</p>
                                                        <p className="text-[10px] text-amber-700 leading-tight">{sub.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </div>
                            </div>

                            <footer className="mt-auto pt-6 border-t border-neutral-100 flex justify-between items-end text-[9px] text-neutral-400">
                                <div className="text-right ml-auto">
                                    <p className="font-outfit text-neutral-900 font-bold">{project.id + 1}C / CLOSING</p>
                                </div>
                            </footer>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default PortfolioExport;
