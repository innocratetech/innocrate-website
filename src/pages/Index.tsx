import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Brain,
  Palette,
  CheckCircle2,
  Zap,
  Users,
  Shield,
  Layers,
  Rocket,
  Building2,
  Cpu,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

/* =======================
   SERVICES
======================= */
const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Build scalable, secure, and high-performance applications.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description:
      "Apply data and machine learning to solve real business problems.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design intuitive, user-centered product experiences.",
    color: "bg-accent/20 text-accent-foreground",
  },
];

/* =======================
   WHY INNOCRATE
======================= */
const whyInnoCrate = [
  { icon: Zap, text: "Founder-led engineering mindset" },
  { icon: Users, text: "Clear communication & transparency" },
  { icon: Shield, text: "Strong focus on business outcomes" },
  { icon: Layers, text: "Clean and scalable architecture" },
];

/* =======================
   WHO WE WORK WITH
======================= */
const whoWeWorkWith = [
  {
    icon: Rocket,
    title: "Startup Founders",
    description:
      "Founders turning ideas into production-ready products and looking for a reliable engineering partner.",
  },
  {
    icon: Users,
    title: "Early-Stage Teams",
    description:
      "Teams that need to move fast without compromising on architecture, quality, or scalability.",
  },
  {
    icon: Building2,
    title: "Growing Businesses",
    description:
      "Businesses modernizing systems, integrating AI, or building new digital capabilities.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* =======================
          HERO SECTION
      ======================= */}
      <section className="section-padding pt-24 bg-gradient-to-br from-muted via-background to-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
                  <Zap className="w-4 h-4" />
                  Product Engineering & AI Solutions
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-7">
                  Build Products That{" "}
                  <span className="text-gradient">Scale & Succeed</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg">
                  InnoCrate partners with startups and growing teams to design,
                  build, and scale reliable digital products using modern
                  engineering and AI.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild>
                    <Link to="/start-project">
                      Start a Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link to="/services">View Our Services</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="right" delay={0.2}>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {whyInnoCrate.map((item) => (
                  <div
                    key={item.text}
                    className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                  >
                    <item.icon className="w-6 h-6 text-primary mb-3" />
                    <p className="text-sm font-medium text-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =======================
          SERVICES
      ======================= */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  What We Do
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  From engineering robust applications to integrating AI-driven
                  intelligence, we build solutions that last.
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/services">
                  All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                  <div
                    className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-5`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =======================
          WHO WE WORK WITH
      ======================= */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <FadeIn direction="left">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Who We Work With
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Our clients value clarity, quality, and long-term
                  thinking over shortcuts.
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/about">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whoWeWorkWith.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="text-sm text-muted-foreground mt-8 ml-2">
            If you care about building things right — with clear communication
            and long-term vision — we’ll work well together.
          </p>
        </div>
      </section>

      {/* =======================
          PROCESS PREVIEW
      ======================= */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/10 border border-border">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Our Approach
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Simple, transparent, and collaborative — designed to keep you
                  informed at every stage.
                </p>
              </div>
              <Button asChild>
                <Link to="/process">
                  See Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =======================
          FINAL CTA
      ======================= */}
      <section className="section-padding cta-section pt-24 final-cta">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Let’s build something meaningful.
              </h2>
              <p className="text-white/70 mb-6">
                Ready to turn your idea into reality? Let’s talk about your
                project and explore how we can help.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/start-project">
                  Book a Discovery Call
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

export default Index;
