import ProjectCard from '../ProjectCard';
import type { Project } from '../../types/chat';

interface ProjectGalleryProps {
    isChatActive: boolean;
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
    isChatActive,
    projects,
    onProjectClick
}) => {
    if (isChatActive) return null;

    return (
        <div className="flex flex-col items-center w-full relative">
            <section className="w-full max-w-6xl py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {projects.map((p) => (
                        <ProjectCard
                            key={p.id}
                            title={p.title}
                            category={p.category}
                            tag={p.tag}
                            imageColor={p.color}
                            className={p.span}
                            dark={p.dark}
                            coverImage={p.coverImage}
                            onClick={() => onProjectClick(p)}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ProjectGallery;
