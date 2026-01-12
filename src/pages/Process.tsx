import { Link } from "react-router-dom";
import { ArrowRight, Search, Map, Hammer, ShieldCheck, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Alignment",
    description: "Understand goals, users, and constraints.",
  },
  {
    number: "02",
    icon: Map,
    title: "Planning & Strategy",
    description: "Define scope, timelines, and architecture.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build & Iterate",
    description: "Develop, test, and refine continuously.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Review & Quality Assurance",
    description: "Ensure performance and reliability.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploy confidently and support post-launch.",
  },
];

const Process = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Our structured process ensures clarity, quality, and predictable outcomes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

              {steps.map((step, index) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex gap-6 md:gap-8 pb-12 last:pb-0">
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                        <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 md:pt-3">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-brand-teal">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                You stay informed, involved, and in control — always.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our collaborative approach means no surprises. You'll know 
                exactly where your project stands at every milestone.
              </p>
              <Button size="lg" asChild>
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
