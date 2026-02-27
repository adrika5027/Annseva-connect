import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-[0.06]" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <Heart className="h-4 w-4" />
              Serving Food. Saving Futures.
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient-primary">AnnSeva</span>{" "}
              <span className="text-foreground">Mission</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              AI-powered smart food redistribution connecting surplus food with those who need it most. Every meal saved is a life touched.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donor">
                <Button size="lg" className="gradient-primary border-0 text-primary-foreground rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  Donate Food <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/ngo">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-semibold border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300">
                  I'm an NGO
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="animate-float">
              <img
                src={heroImage}
                alt="Community food sharing illustration"
                className="w-full max-w-lg mx-auto rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
