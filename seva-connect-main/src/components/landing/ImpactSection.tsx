import { Utensils, Leaf, Trash2, Users } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function ImpactSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Our <span className="text-gradient-accent">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-time numbers that showcase the power of community-driven food redistribution
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedCounter
            end={125000}
            suffix="+"
            label="Meals Saved"
            icon={<Utensils className="h-6 w-6" />}
          />
          <AnimatedCounter
            end={31250}
            suffix=" kg"
            label="CO₂ Reduced"
            icon={<Leaf className="h-6 w-6" />}
          />
          <AnimatedCounter
            end={50000}
            suffix=" kg"
            label="Waste Prevented"
            icon={<Trash2 className="h-6 w-6" />}
          />
          <AnimatedCounter
            end={340}
            suffix="+"
            label="Partner NGOs"
            icon={<Users className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
}
