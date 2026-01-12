import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { FadeIn } from "@/components/animations";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About InnoCrate</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                InnoCrate was founded to help businesses build better products 
                through strong engineering and clear thinking.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We believe technology should be reliable, scalable, and purposeful. 
                  As a founder-led agency, we bring hands-on expertise, clear communication, 
                  and a deep understanding of product development to every project.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team has worked across various industries — from early-stage startups 
                  to established enterprises — always with a focus on building solutions 
                  that create real, lasting value. We don't just write code; we solve 
                  problems and help businesses grow.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction="left">
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To be a trusted engineering partner for teams building 
                  meaningful digital products.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-brand-green-dark/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-brand-green-dark" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To deliver high-quality engineering and AI solutions 
                  that create long-term value.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Our core values shape how we work and the relationships we build.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Quality First",
                  description:
                    "We never compromise on code quality or product integrity.",
                },
                {
                  title: "Transparency",
                  description:
                    "Clear communication and honest feedback at every step.",
                },
                {
                  title: "Partnership",
                  description:
                    "We succeed when our clients succeed. It's that simple.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-xl border border-border bg-card"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's work together
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Ready to build something great? We'd love to hear about your project.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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
