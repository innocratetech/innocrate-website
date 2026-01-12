import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Brain,
  Palette,
  Zap,
  Target,
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
    title: "Scalable Full Stack Engineering",
    description:
      "We build end-to-end web applications using modern technologies, clean architecture, and best engineering practices.",
    problems: [
      "Slow development cycles",
      "Unstable or unscalable systems",
      "Poor technical foundations",
    ],
    outcomes: [
      "Reliable, scalable products",
      "Faster time to market",
      "Maintainable codebases",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "Practical AI That Delivers Results",
    description:
      "We design and integrate AI, machine learning, and data-driven solutions that enhance decision-making and automation.",
    problems: ["Manual processes", "Untapped data", "Inefficient workflows"],
    outcomes: ["Smarter systems", "Improved efficiency", "Actionable insights"],
  },
  {
    id: "design",
    icon: Palette,
    title: "Design That Drives Adoption",
    description:
      "We create intuitive, user-focused designs that align business goals with user needs.",
    problems: ["Poor user experience", "Low engagement", "Unclear product flows"],
    outcomes: ["Better usability", "Higher engagement", "Clear product direction"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Our services are designed to support you from idea to launch — and beyond.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16">
        <div className="container-wide space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <div key={service.id} id={service.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.1}
                >
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    {/* Problems */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertCircle className="w-5 h-5 text-secondary" />
                        <h3 className="font-semibold">What We Solve</h3>
                      </div>
                      <ul className="space-y-3">
                        {service.problems.map((problem) => (
                          <li
                            key={problem}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-brand-green-dark" />
                        <h3 className="font-semibold">Outcome</h3>
                      </div>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-brand-green-dark" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and explore how our services can help 
                you achieve your goals.
              </p>
              <Button size="lg" asChild>
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
