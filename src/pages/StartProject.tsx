import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  Calendar,
  Mail,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";

const CALENDLY_URL = "https://calendly.com/innocrate-tech/discovery-call";
const EMAIL_ADDRESS = "innocrate.tech@gmail.com";
const EMAILJS_SERVICE_ID = "service_yy8dueh";
const EMAILJS_TEMPLATE_ID = "template_7nof6ip";
const EMAILJS_PUBLIC_KEY = "xbDPp70sdsbpAIs3P";

const StartProject = () => {
  const [activeTab, setActiveTab] = useState<"call" | "email">("call");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (activeTab === "call") {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [activeTab]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding pt-24 md:pt-28 bg-gradient-to-br from-muted via-background to-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT CONTENT */}
            <FadeIn>
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Start a Project
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you’re exploring an idea or improving an existing
                  product, let’s talk and see if we’re a good fit.
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    "Understand your goals and challenges",
                    "Discuss scope, timelines, and feasibility",
                    "Clear next steps — no pressure",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-green-dark mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="font-medium">Email us directly:</span>
                  </div>
                  <p className="mt-1 text-sm text-primary">
                    {EMAIL_ADDRESS}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT PANEL */}
            <FadeIn direction="right">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-border">
                  <button
                    onClick={() => setActiveTab("call")}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 ${
                      activeTab === "call"
                        ? "bg-muted/50 text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Call
                  </button>
                  <button
                    onClick={() => setActiveTab("email")}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 ${
                      activeTab === "email"
                        ? "bg-muted/50 text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send a Message
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  {activeTab === "call" && (
                    <div
                      className="calendly-inline-widget"
                      data-url={CALENDLY_URL}
                      style={{ minWidth: "300px", height: "600px" }}
                    />
                  )}

                  {activeTab === "email" && (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full p-3 rounded-lg border border-border bg-background"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email"
                        className="w-full p-3 rounded-lg border border-border bg-background"
                      />
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full p-3 rounded-lg border border-border bg-background"
                      />

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>

                      {success && (
                        <p className="text-sm text-brand-green-dark text-center">
                          Message sent successfully. We’ll get back to you soon.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartProject;
