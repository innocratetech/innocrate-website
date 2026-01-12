import { useEffect } from "react";
import { MessageSquare, Lightbulb, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const nextSteps = [
  {
    icon: MessageSquare,
    title: "We understand your goals",
    description: "Share your vision, challenges, and what success looks like for you.",
  },
  {
    icon: Lightbulb,
    title: "We discuss scope and approach",
    description: "Together, we explore the best path forward for your project.",
  },
  {
    icon: ArrowRight,
    title: "We outline next steps clearly",
    description: "You'll leave with a clear understanding of how we can help.",
  },
];

const StartProject = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Start a Project
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have an idea or an existing product? Let's talk.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 md:py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What Happens Next
              </h2>
              <p className="text-muted-foreground">
                A discovery call is a simple, no-pressure conversation to explore fit.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {nextSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-6 border-b border-border flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Book a Discovery Call</h3>
                </div>
                
                {/* Calendly Inline Widget */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                
                {/* Fallback message */}
                <noscript>
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      JavaScript is required to load the booking calendar.
                    </p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Book directly on Calendly →
                    </a>
                  </div>
                </noscript>
              </div>

              {/* Reassurance Note */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-dark" />
                  <span className="text-sm">
                    No pressure. Just a conversation to explore fit.
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default StartProject;
