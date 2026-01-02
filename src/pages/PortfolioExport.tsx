import React from 'react';
import { allProjects } from '../data/portfolio';
import { Briefcase, Calendar, Target, PenTool, Layout, CheckCircle2, BarChart3, Search, Lightbulb, User2 } from 'lucide-react';

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
            margin: 0;
            border: none;
            box-shadow: none;
            page-break-after: always;
            height: 297mm;
            width: 210mm;
          }
          .no-print {
            display: none;
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
          items-center: center;
          gap: 6px;
          margin-bottom: 12px;
          border-bottom: 1px solid #f3f4f6;
          padding-bottom: 8px;
        }

        .project-card {
          background: #fafafa;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          padding: 16px;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      `}</style>

            {/* Control Panel (Hidden on Print) */}
            <div className="no-print bg-white p-8 rounded-3xl shadow-2xl border border-neutral-200 flex flex-col items-center gap-6 max-w-2xl text-center">
                <div className="bg-amber-50 p-4 rounded-full">
                    <PenTool className="text-amber-600" size={32} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 font-outfit mb-2">Deep-Dive Portfolio Export</h1>
                    <p className="text-neutral-600">
                        각 프로젝트의 핵심 전략, 실행 과정, 데이터 검증 수치까지 포함된 <b>상세 리포트 버전</b>입니다.<br />
                        브라우저 설정에서 <b>'배경 그래픽'</b>을 반드시 켜주세요.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => window.print()}
                        className="bg-neutral-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg shadow-neutral-200"
                    >
                        PDF로 저장 / 인쇄하기
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-white text-neutral-600 px-10 py-4 rounded-full font-semibold border border-neutral-200 hover:bg-neutral-50 transition-all"
                    >
                        돌아가기
                    </button>
                </div>
            </div>

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

                        <div className="grid grid-cols-12 gap-10 flex-1">
                            {/* Left Column */}
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

                            {/* Right Column */}
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
                                <p>This document contains specialized UX research and architectural logic developed by Yongwoo Kim.</p>
                            </div>
                            <div className="text-right">
                                <p className="font-outfit text-neutral-900 font-bold">PAGE 01 / PROJECT DETAILS</p>
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
                                <p className="font-outfit text-neutral-900 font-bold">PAGE 02 / EXECUTION</p>
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
                                        {/* Raw Data or Chart Preview */}
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

                                        {/* Results / Quotes */}
                                        <div className="space-y-6">
                                            <div className="italic text-[12px] text-neutral-500 border-l-4 border-amber-100 pl-4 py-2">
                                                "{project.validation.abandonmentAnalysis?.quote || project.validation.feedbackAnalysis?.quote}"
                                            </div>

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
                                    <p className="font-outfit text-neutral-900 font-bold">PAGE 03 / ANALYSIS & CLOSING</p>
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
