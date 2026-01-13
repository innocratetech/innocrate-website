import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Layers, Brain, Smartphone, FileText, Lightbulb, Wrench, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const placeholderProjects = [
  {
    title: "Enterprise SaaS Platform",
    category: "Full Stack Development",
    description: "Built a scalable multi-tenant platform handling thousands of concurrent users with real-time data synchronization.",
    icon: Layers,
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI / ML Solutions",
    description: "Developed predictive analytics system that reduced operational costs by automating manual reporting processes.",
    icon: Brain,
    gradient: "from-secondary/20 to-brand-teal/20",
  },
  {
    title: "FinTech Mobile Application",
    category: "UI/UX & Development",
    description: "Designed and built a user-friendly mobile banking experience that increased user engagement significantly.",
    icon: Smartphone,
    gradient: "from-brand-green-dark/20 to-accent/20",
  },
];

const caseStudySteps = [
  { icon: FileText, label: "Project Overview", description: "Context and objectives" },
  { icon: Lightbulb, label: "Problem", description: "Challenges to solve" },
  { icon: Wrench, label: "Solution", description: "Our approach" },
  { icon: Code, label: "Technologies Used", description: "Tech stack" },
  { icon: BarChart3, label: "Outcome", description: "Results & impact" },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-muted via-background to-muted/30">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Work</h1>
              <p className="text-lg text-muted-foreground">
                Solving real problems with thoughtful engineering and purposeful design.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeholderProjects.map((project) => (
              <StaggerItem key={project.title}>
                <div className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="w-12 h-12 text-primary/60" />
                  </div>
                  
                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
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
                  Our structured approach demonstrates the full journey from problem to solution.
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
                    <span className="text-xs font-semibold text-primary mb-1">{index + 1}</span>
                    <span className="text-sm font-medium">{step.label}</span>
                    <span className="text-xs text-muted-foreground mt-1">{step.description}</span>
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
