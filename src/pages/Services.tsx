import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Brain,
  Palette,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const services = [
  {
    id: "fullstack",
    icon: Code2,
    title: "Scalable Full-Stack Engineering",
    description:
      "End-to-end engineering for modern web products, built with scalability, performance, and long-term maintainability in mind.",
    problems: [
      "Slow or unpredictable development velocity",
      "Applications that struggle to scale reliably",
      "Fragile systems built without solid architecture",
    ],
    outcomes: [
      "Stable, scalable production-ready applications",
      "Faster iteration without sacrificing quality",
      "Clean, maintainable codebases built to last",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    id: "ai",
    icon: Brain,
    title: "Practical AI & Intelligent Systems",
    description:
      "AI and data-driven solutions focused on solving real business problems — not experiments or hype.",
    problems: [
      "Manual, repetitive operational workflows",
      "Data that exists but isn’t being effectively used",
      "Decision-making based on intuition instead of insight",
    ],
    outcomes: [
      "Automated and intelligent workflows",
      "Actionable insights from existing data",
      "Smarter systems that adapt and improve over time",
    ],
    color: "bg-secondary/10 text-secondary",
  },
  {
    id: "design",
    icon: Palette,
    title: "Product Design & UX",
    description:
      "User-centered design that aligns business goals with intuitive, usable product experiences.",
    problems: [
      "Confusing interfaces that frustrate users",
      "Low engagement or poor product adoption",
      "Unclear user journeys and product flows",
    ],
    outcomes: [
      "Clear, intuitive user experiences",
      "Improved engagement and retention",
      "Design systems that support product growth",
    ],
    color: "bg-accent/20 text-accent-foreground",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-muted via-background to-muted/30 final-cta">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help founders and growing teams design, build, and scale
                digital products with clarity, quality, and long-term vision —
                from first idea to production and beyond.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding final-cta">
        <div className="container-wide space-y-10">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div
                id={service.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Left - Info */}
                  <div className="lg:col-span-2 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right - Problems & Outcomes */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Problems */}
                    <div className="p-6 border-b md:border-b-0 md:border-r border-border bg-muted/30">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertCircle className="w-4 h-4 text-secondary" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
                          What We Solve
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {service.problems.map((problem) => (
                          <li
                            key={problem}
                            className="flex items-center gap-2.5 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-brand-green-dark" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green-dark">
                          Outcome
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {service.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-center gap-2.5 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-green-dark flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm cta-section final-cta">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  Ready to get started?
                </h2>
                <p className="text-white/70">
                  Let's discuss your project and explore how we can help.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/start-project">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
