import { useEffect } from "react";
import { MessageSquare, Lightbulb, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const nextSteps = [
  {
    icon: MessageSquare,
    title: "We understand your goals",
    description: "Share your vision, challenges, and what success looks like.",
  },
  {
    icon: Lightbulb,
    title: "We discuss scope and approach",
    description: "Together, we explore the best path forward for your project.",
  },
  {
    icon: ArrowRight,
    title: "We outline next steps clearly",
    description: "You'll leave with clarity on how we can help.",
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
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-muted via-background to-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <FadeIn>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Start a Project
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Have an idea or an existing product? Let's talk.
                </p>

                {/* What Happens Next */}
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    What Happens Next
                  </h2>
                  {nextSteps.map((step, index) => (
                    <div key={step.title} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-dark" />
                  <span className="text-sm">No pressure. Just a conversation to explore fit.</span>
                </div>
              </div>
            </FadeIn>

            {/* Calendly Embed */}
            <FadeIn direction="right">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border flex items-center gap-3 bg-muted/30">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-sm">Book a Discovery Call</h3>
                </div>
                
                {/* Calendly Inline Widget */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com"
                  style={{ minWidth: "300px", height: "600px" }}
                />
                
                {/* Fallback message */}
                <noscript>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground mb-4 text-sm">
                      JavaScript is required to load the booking calendar.
                    </p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      Book directly on Calendly →
                    </a>
                  </div>
                </noscript>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartProject;
