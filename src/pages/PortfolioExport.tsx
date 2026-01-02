import React from 'react';
import { allProjects } from '../data/portfolio';
import { Briefcase, Calendar, Target, PenTool, Layout, CheckCircle2 } from 'lucide-react';

const PortfolioExport: React.FC = () => {
    return (
        <div className="bg-neutral-100 min-h-screen p-4 md:p-10 flex flex-col items-center gap-10 print:bg-white print:p-0">
            <style>{`
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
        
        .a4-page {
          background: white;
          width: 210mm;
          min-height: 297mm;
          padding: 20mm;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-column: column;
        }

        .gradient-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(to bottom, #d4af37, #f1c40f);
        }
      `}</style>

            <div className="no-print bg-white p-6 rounded-2xl shadow-xl border border-neutral-200 flex flex-col items-center gap-4 max-w-lg text-center">
                <h1 className="text-2xl font-bold text-neutral-900 font-outfit">Portfolio PDF Export Mode</h1>
                <p className="text-neutral-600 text-sm">
                    브라우저의 인쇄 기능(Cmd + P)을 사용하여 각 프로젝트를 A4 PDF로 저장할 수 있도록 레이아웃이 최적화되어 있습니다.
                    배경 인쇄 설정을 켜주세요.
                </p>
                <button
                    onClick={() => window.print()}
                    className="bg-neutral-900 text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-all flex items-center gap-2"
                >
                    <PenTool size={18} />
                    PDF로 인쇄하기
                </button>
            </div>

            {allProjects.map((project) => (
                <div key={project.id} className="a4-page font-inter text-neutral-800 flex flex-col">
                    <div className="gradient-border" style={{ background: project.color || '#d4af37' }} />

                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                                {project.category}
                            </span>
                            <span className="text-[10px] font-bold text-neutral-400">
                                {project.tag}
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold font-outfit text-neutral-900 leading-tight mb-2">
                            {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4 text-[11px] text-neutral-500 font-medium">
                            <div className="flex items-center gap-1">
                                <Calendar size={12} className="text-neutral-400" />
                                {project.duration}
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase size={12} className="text-neutral-400" />
                                {project.role}
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-12 gap-8 flex-1">
                        {/* Main Content */}
                        <div className="col-span-8 flex flex-col gap-6">
                            {/* Overview */}
                            <section>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
                                    <Layout size={12} />
                                    Overview
                                </h3>
                                <p className="text-sm leading-relaxed text-neutral-700">
                                    {project.overview}
                                </p>
                            </section>

                            {/* Challenge */}
                            {project.challenge && (
                                <section>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
                                        <Target size={12} />
                                        Challenge
                                    </h3>
                                    <p className="text-sm leading-relaxed text-neutral-700">
                                        {project.challenge}
                                    </p>
                                </section>
                            )}

                            {/* Strategy */}
                            {project.strategy && (
                                <section>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-2">
                                        <CheckCircle2 size={12} />
                                        Core Strategy
                                    </h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {project.strategy.goals?.slice(0, 3).map((goal, i) => (
                                            <div key={i} className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                                                <h4 className="text-[11px] font-bold text-neutral-900 mb-1">{goal.title}</h4>
                                                <p className="text-[10px] text-neutral-600 leading-normal">{goal.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Implementation Preview */}
                            <section className="flex-1 min-h-0">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                                    Visual Execution
                                </h3>
                                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x450?text=Project+Visual';
                                        }}
                                    />
                                </div>
                            </section>
                        </div>

                        {/* Sidebar Details */}
                        <div className="col-span-4 border-l border-neutral-100 pl-6 flex flex-col gap-8">
                            {/* Collaboration */}
                            <section>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Collaboration</h3>
                                <div className="space-y-3">
                                    {project.collaboration?.teams?.map((team, i) => (
                                        <div key={i}>
                                            <p className="text-[10px] font-bold text-neutral-900">{team.name}</p>
                                            <p className="text-[10px] text-neutral-500 leading-tight">{team.contribution}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Tools */}
                            <section>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Toolkit</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools?.map((tool, i) => (
                                        <span key={i} className="text-[9px] px-2 py-1 bg-neutral-100 rounded-md text-neutral-600 font-medium border border-neutral-200">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Insights */}
                            {project.insights && project.insights.length > 0 && (
                                <section className="mt-auto">
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Key Learnings</h3>
                                    <ul className="space-y-2">
                                        {project.insights.slice(0, 3).map((insight, i) => (
                                            <li key={i} className="text-[9px] text-neutral-600 leading-tight list-disc ml-3">
                                                {insight}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-12 pt-6 border-t border-neutral-100 flex justify-between items-center text-[9px] font-medium text-neutral-400">
                        <div>
                            <p>YONGWOO KIM — PORTFOLIO 2026</p>
                            <p>DATA-DRIVEN UX/UI DESIGNER • AI SOLUTION STRATEGY</p>
                        </div>
                        <div className="text-right">
                            <p>PAGE {project.id + 1}</p>
                            <p>{project.tag}</p>
                        </div>
                    </footer>
                </div>
            ))}
        </div>
    );
};

export default PortfolioExport;
