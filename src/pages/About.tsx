import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  MessageCircle,
  Award,
  Users,
  Rocket,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "15+", label: "Happy Clients", icon: Users },
  { value: "3+", label: "Years Experience", icon: Code },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on code quality or product integrity.",
  },
  {
    icon: MessageCircle,
    title: "Transparency",
    description: "Clear communication and honest feedback at every step.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We succeed when our clients succeed. It's that simple.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-b from-background via-muted/30 to-background final-cta">
        <div className="container-wide">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                About InnoCrate
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Building products with clarity, quality, and long-term thinking.
              </h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                InnoCrate is a founder-led product engineering studio focused on
                helping teams build reliable, scalable digital products. We work
                closely with founders and product teams who care about doing
                things right — not just fast.
              </p>

              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Our approach combines strong engineering fundamentals,
                thoughtful design, and practical AI to create systems that are
                easy to maintain, scale, and evolve. Every project is treated as
                a long-term partnership, not a one-off delivery.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding final-cta">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <FadeIn direction="left">
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be a trusted engineering partner for teams building
                  meaningful digital products.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-brand-green-dark/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-brand-green-dark" />
                </div>
                <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                <p className="text-muted-foreground">
                  To deliver high-quality engineering and AI solutions that
                  create long-term value.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding-sm bg-muted/50">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                What Drives Us
              </h2>
              <p className="text-muted-foreground">
                Our core values shape how we work and the relationships we
                build.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow h-full">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cta-section final-cta">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Let's work together
              </h2>
              <p className="text-white/70 mb-6">
                Ready to build something great? We'd love to hear about your
                project.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/start-project">
                  Start a Conversation
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

export default About;
