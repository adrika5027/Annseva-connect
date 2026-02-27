import { motion } from "framer-motion";
import { Upload, Brain, Truck } from "lucide-react";

const steps = [
  {
    icon: <Upload className="h-7 w-7" />,
    title: "Donors Post Surplus",
    description: "Restaurants, stores, and individuals list surplus food with details like quantity, expiry, and pickup window.",
    color: "gradient-primary",
  },
  {
    icon: <Brain className="h-7 w-7" />,
    title: "AI Matches Intelligently",
    description: "Our engine scores and prioritizes donations based on expiry urgency, distance, and quantity for optimal matching.",
    color: "gradient-accent",
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "NGOs Pickup & Deliver",
    description: "Matched NGOs receive real-time alerts, navigate to pickup, and deliver food to high-need areas using hunger heatmaps.",
    color: "gradient-primary",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three simple steps to save food and feed communities
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-3xl p-8 text-center relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 text-6xl font-black text-muted/50">
                {i + 1}
              </div>
              <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} text-primary-foreground shadow-lg`}>
                {step.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
