import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectStats from "@/components/projects/ProjectStats";
import TestimonialsSection from "@/components/projects/TestimonialsSection";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import FAQSection from "@/components/projects/FAQSection";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectStats />
      <TestimonialsSection />
      <ProcessTimeline />
      <FAQSection />
    </>
  );
}