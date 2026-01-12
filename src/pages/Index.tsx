import { Link } from "react-router-dom";
import { ArrowRight, Code2, Brain, Palette, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Build scalable, secure, and high-performance applications.",
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Apply data and machine learning to solve real business problems.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design intuitive, user-centered product experiences.",
  },
];

const whyInnoCrate = [
  "Founder-led engineering mindset",
  "Clear communication & transparency",
  "Strong focus on business outcomes",
  "Clean, scalable architecture",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Product Engineering & AI Solutions for{" "}
                <span className="text-primary">Modern Businesses</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                InnoCrate partners with startups and growing teams to design, build, 
                and scale reliable digital products using modern engineering and AI.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-muted-foreground">
                We help businesses turn ideas into scalable, production-ready products. 
                From engineering robust applications to integrating AI-driven intelligence, 
                we focus on building solutions that last.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group p-8 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Who We Work With
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We work with founders, startups, and teams who care about quality, 
                  clarity, and long-term impact. Whether you're building from scratch 
                  or scaling an existing product, we bring the technical expertise 
                  to move fast without cutting corners.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Why InnoCrate?</h3>
                <ul className="space-y-4">
                  {whyInnoCrate.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green-dark mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                Our process is simple, transparent, and collaborative — designed 
                to keep you informed and confident at every stage.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex justify-center">
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
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's build something meaningful.
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Ready to turn your idea into reality? Let's have a conversation 
                about your project and explore how we can help.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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
