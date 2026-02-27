import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-hero rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl mb-4">
              Join the Mission Today
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
              Whether you have surplus food or serve communities in need, AnnSeva connects you with purpose.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/login/donor">
                <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground border-0 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Start Donating <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login/ngo">
                <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
                  Register as NGO
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
