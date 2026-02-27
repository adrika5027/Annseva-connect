import { motion } from "framer-motion";
import { Brain, MapPin, Bell, Shield, BarChart3, QrCode } from "lucide-react";

const features = [
  { icon: <Brain className="h-6 w-6" />, title: "AI Smart Matching", desc: "Priority scoring engine considers expiry, distance, and quantity for optimal food redistribution." },
  { icon: <MapPin className="h-6 w-6" />, title: "Hunger Heatmaps", desc: "Visualize demand density with real-time heatmap overlays to direct food where it's needed most." },
  { icon: <Bell className="h-6 w-6" />, title: "Real-time Alerts", desc: "Push notifications, in-app alerts, and expiry urgency warnings keep everyone in the loop." },
  { icon: <Shield className="h-6 w-6" />, title: "Verified & Secure", desc: "Role-based access, KYC verification, and secure data handling for trust and transparency." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Impact Analytics", desc: "Track meals saved, CO₂ reduced, and waste prevented with beautiful interactive dashboards." },
  { icon: <QrCode className="h-6 w-6" />, title: "QR Verification", desc: "Scan-based pickup confirmation ensures accountability and seamless handoff tracking." },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Powered by <span className="text-gradient-primary">Intelligence</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cutting-edge technology meets compassion to maximize every donation's impact
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
