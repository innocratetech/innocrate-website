import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Brain,
  Smartphone,
  FileText,
  Lightbulb,
  Wrench,
  Code,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import Work1 from "@/assets/work1.png";
import Work2 from "@/assets/work2.png";
import Work3 from "@/assets/work3.png";

const projects = [
  {
    title: "Architecture Firm Portfolio Website",
    category: "Web Design & Development",
    description:
      "Designed and developed a visually rich portfolio website for an architecture firm, showcasing projects through immersive layouts, smooth interactions, and performance-optimized visuals.",
    image: Work1,
    videoUrl: "https://drive.google.com/file/d/1HB_kJy95MIS7PVrCU5gJOLSyRU0KbhTM/view?usp=sharing",
  },
  {
    title: "AI-Powered Learning Resource Finder",
    category: "AI Application Development",
    description:
      "Built an AI-driven platform that intelligently curates and ranks learning resources, helping users discover high-quality content tailored to their goals and interests.",
    image: Work2,
    videoUrl: "https://drive.google.com/file/d/1MYMgulTB1M54snogJiNul5YZaLOz21EV/view?usp=sharing",
  },
  {
    title: "AI-Based API Insights Dashboard",
    category: "AI & Data Analytics",
    description:
      "Developed an AI-powered dashboard for monitoring API performance, detecting anomalies, and providing actionable insights to improve reliability and system health.",
    image: Work3,
    videoUrl: "https://drive.google.com/file/d/17T2u3nBulRTfV9bkoNViiQukUxrIoGe-/view?usp=sharing",
  },
];

const caseStudySteps = [
  {
    icon: FileText,
    label: "Project Overview",
    description: "Context and objectives",
  },
  { icon: Lightbulb, label: "Problem", description: "Challenges to solve" },
  { icon: Wrench, label: "Solution", description: "Our approach" },
  { icon: Code, label: "Technologies Used", description: "Tech stack" },
  { icon: BarChart3, label: "Outcome", description: "Results & impact" },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-muted via-background to-muted/30 final-cta">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Work
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A selection of projects where strong engineering, thoughtful
                design, and clear problem-solving came together to create real
                impact.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <div className="group h-full bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-xl hover:border-primary/30">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                      {project.category}
                    </span>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button asChild variant="outline">
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Study Format - Redesigned */}
      <section className="section-padding-sm bg-muted/50">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Case Study Format
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Our structured approach demonstrates the full journey from
                  problem to solution.
                </p>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {caseStudySteps.map((step, index) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary mb-1">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{step.label}</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {step.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div className="p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/10 border border-border rounded-xl text-center">
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
