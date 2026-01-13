import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, MessageCircle, Award, Users, Rocket, Code } from "lucide-react";
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
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Founder-Led Agency
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Building Products That <span className="text-primary">Matter</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded to help businesses build better products 
                  through strong engineering and clear thinking.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe technology should be reliable, scalable, and purposeful. 
                  As a founder-led agency, we bring hands-on expertise, clear communication, 
                  and a deep understanding of product development to every project.
                </p>
                <Button asChild>
                  <Link to="/start-project">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all hover:border-primary/20"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
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
                  To deliver high-quality engineering and AI solutions 
                  that create long-term value.
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
                Our core values shape how we work and the relationships we build.
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
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cta-section">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Let's work together
              </h2>
              <p className="text-white/70 mb-6">
                Ready to build something great? We'd love to hear about your project.
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
