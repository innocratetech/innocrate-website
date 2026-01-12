import { Link } from "react-router-dom";
import { ArrowRight, Folder, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const caseStudyTemplate = {
  sections: [
    "Project Overview",
    "Problem",
    "Solution",
    "Technologies Used",
    "Outcome",
  ],
};

const placeholderProjects = [
  {
    title: "Enterprise SaaS Platform",
    category: "Full Stack Development",
    description:
      "Built a scalable multi-tenant platform handling thousands of concurrent users with real-time data synchronization.",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI / ML Solutions",
    description:
      "Developed predictive analytics system that reduced operational costs by automating manual reporting processes.",
  },
  {
    title: "FinTech Mobile Application",
    category: "UI/UX & Development",
    description:
      "Designed and built a user-friendly mobile banking experience that increased user engagement significantly.",
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Our work focuses on solving real problems with thoughtful engineering.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProjects.map((project) => (
              <StaggerItem key={project.title}>
                <div className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  {/* Placeholder Image */}
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Folder className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block text-sm font-medium text-secondary mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Study Format */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Case Study Format
                </h2>
                <p className="text-muted-foreground">
                  Each of our case studies follows a structured approach to 
                  demonstrate the full journey from problem to solution.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <ul className="space-y-4">
                  {caseStudyTemplate.sections.map((section, index) => (
                    <li
                      key={section}
                      className="flex items-center gap-4 text-lg"
                    >
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span>{section}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-6 bg-secondary/10 border border-secondary/20 rounded-xl text-center">
                <p className="text-muted-foreground mb-4">
                  Detailed case studies available upon request.
                </p>
                <Button asChild>
                  <Link to="/start-project">
                    Request Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
