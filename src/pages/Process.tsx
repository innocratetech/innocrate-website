import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Map,
  Hammer,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Alignment",
    description:
      "We clarify goals, users, and constraints to ensure shared understanding before any build begins.",
    color: "bg-primary text-primary-foreground",
  },
  {
    number: "02",
    icon: Map,
    title: "Planning & Strategy",
    description:
      "We define scope, timelines, and technical direction, creating a clear roadmap that guides execution.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build & Iterate",
    description:
      "We design, develop, and iterate in focused cycles with regular updates and feedback loops.",
    color: "bg-brand-teal text-white",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality & Review",
    description:
      "We test for performance, reliability, and edge cases to ensure production-ready quality.",
    color: "bg-brand-green-dark text-white",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy with confidence and provide post-launch support to keep things running smoothly.",
    color: "bg-accent text-accent-foreground",
  },
];


const Process = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-muted via-background to-muted/30 final-cta">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Process
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A clear, collaborative process designed to reduce uncertainty,
                maintain quality, and deliver predictable results at every stage
                of the build.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps - Grid Layout */}
      <section className="section-padding final-cta">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div
                  className={`h-full p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 ${
                    index === 4 ? "lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Step {step.number}
                      </span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding-sm bg-muted/50">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  You stay informed, involved, and in control — always.
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Our collaborative approach means no surprises. You'll know
                  exactly where your project stands at every milestone.
                </p>
              </div>
              <Button size="lg" asChild className="flex-shrink-0">
                <Link to="/start-project">
                  Start Your Project
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

export default Process;
