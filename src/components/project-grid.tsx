import type { Project } from "@/lib/data";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";

interface ProjectGridProps {
  projects: Project[];
  activeCategory?: string;
}

const ProjectGrid = ({ projects, activeCategory }: ProjectGridProps) => {
  const sortedProjects = [...projects].sort((a, b) => {
    if (activeCategory) {
      const aIsActive = a.category === activeCategory;
      const bIsActive = b.category === activeCategory;
      if (aIsActive && !bIsActive) return -1;
      if (!aIsActive && bIsActive) return 1;
    }
    return 0;
  });

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} activeCategory={activeCategory} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
