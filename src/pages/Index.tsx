import { Link } from "react-router-dom";
import { ArrowRight, Code2, Brain, Palette, CheckCircle2, Zap, Users, Shield, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

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
    description: "Apply data and machine learning to solve real business problems.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design intuitive, user-centered product experiences.",
    color: "bg-accent/20 text-accent-foreground",
  },
];

const whyInnoCrate = [
  { icon: Zap, text: "Founder-led engineering mindset" },
  { icon: Users, text: "Clear communication & transparency" },
  { icon: Shield, text: "Strong focus on business outcomes" },
  { icon: Layers, text: "Clean, scalable architecture" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-muted via-background to-muted/30">
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  Build Products That{" "}
                  <span className="text-gradient">Scale & Succeed</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg">
                  InnoCrate partners with startups and growing teams to design, build, 
                  and scale reliable digital products using modern engineering and AI.
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
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/services">View Our Services</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.2}>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {whyInnoCrate.map((item, i) => (
                  <div 
                    key={item.text} 
                    className={`p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow ${i === 1 || i === 2 ? 'translate-y-4' : ''}`}
                  >
                    <item.icon className="w-6 h-6 text-primary mb-3" />
                    <p className="text-sm font-medium text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Do</h2>
                <p className="text-muted-foreground max-w-lg">
                  From engineering robust applications to integrating AI-driven intelligence, 
                  we build solutions that last.
                </p>
              </div>
              <Button variant="outline" asChild className="self-start md:self-auto">
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
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-5`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Work With + Why */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <FadeIn direction="left" className="lg:col-span-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Who We Work With
                </h2>
                <p className="text-muted-foreground mb-5">
                  We work with founders, startups, and teams who care about quality, 
                  clarity, and long-term impact.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyInnoCrate.map((item) => (
                  <div key={item.text} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-brand-green-dark/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-green-dark" />
                    </div>
                    <span className="text-sm font-medium text-foreground pt-2">{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/10 border border-border">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  Our Approach
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Simple, transparent, and collaborative — designed 
                  to keep you informed at every stage.
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

      {/* Final CTA */}
      <section className="section-padding cta-section">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Let's build something meaningful.
              </h2>
              <p className="text-white/70 mb-6">
                Ready to turn your idea into reality? Let's have a conversation 
                about your project and explore how we can help.
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
