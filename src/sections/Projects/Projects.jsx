import { useMemo, useState } from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projects } from "./Data";
import "./Projects.css";
import { motion } from "framer-motion";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const fullStackProjects = useMemo(
    () => projects.filter((p) => p.category === "fullstack"),
    []
  );
  const designProjects = useMemo(
    () => projects.filter((p) => p.category === "design"),
    []
  );

  const showFullStack = activeTab === "fullstack";
  const showDesign = activeTab === "design";

  return (
    <motion.section
      className="projects section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <p className="section-subtitle">A curated selection of work — focused on impact, polish, and performance.</p>

        <div className="projects__tabs" role="tablist" aria-label="Project directories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "fullstack"}
            className={"projects__tab" + (activeTab === "fullstack" ? " is-active" : "")}
            onClick={() => setActiveTab("fullstack")}
          >
            Full‑Stack <span className="projects__tabCount">{fullStackProjects.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "design"}
            className={"projects__tab" + (activeTab === "design" ? " is-active" : "")}
            onClick={() => setActiveTab("design")}
          >
            Design‑Only <span className="projects__tabCount">{designProjects.length}</span>
          </button>
        </div>

        <div className="projects__directories">
          {showFullStack && (
          <section className="projects__directory" aria-label="Full-Stack Projects" role="tabpanel">
            <div className="projects__directoryHeader">
              <div className="projects__directoryTitleWrap">
                <h3 className="projects__directoryTitle">Full‑Stack Projects</h3>
                <p className="projects__directorySubtitle">
                  End‑to‑end builds: UI + APIs + data. Auth, dashboards, and real workflows.
                </p>
              </div>
              <span className="projects__directoryCount chip">{fullStackProjects.length} projects</span>
            </div>

            <div className="projects__grid">
              {fullStackProjects.map((project, index) => (
                <motion.div
                  key={project.id ?? index}
                  className="projects__item"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: Math.min(index * 0.06, 0.24), duration: 0.45 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </section>
          )}

          {showDesign && (
          <section className="projects__directory" aria-label="Design Only Projects" role="tabpanel">
            <div className="projects__directoryHeader">
              <div className="projects__directoryTitleWrap">
                <h3 className="projects__directoryTitle">Design‑Only Projects</h3>
                <p className="projects__directorySubtitle">
                  UI-focused builds: layouts, components, and visual polish.
                </p>
              </div>
              <span className="projects__directoryCount chip">{designProjects.length} projects</span>
            </div>

            <div className="projects__grid">
              {designProjects.map((project, index) => (
                <motion.div
                  key={project.id ?? index}
                  className="projects__item"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: Math.min(index * 0.06, 0.18), duration: 0.45 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </section>
          )}
        </div>
      </div>
    </motion.section>
  );
};