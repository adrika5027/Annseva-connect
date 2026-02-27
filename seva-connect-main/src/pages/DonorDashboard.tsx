import { motion } from "framer-motion";
import { Utensils, Leaf, Trash2, TrendingUp, Plus, Package, History, Trophy, Clock, MapPin } from "lucide-react";
import { AnimatedCounter } from "@/components/landing/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const recentDonations = [
  { id: 1, name: "Biryani (20 meals)", status: "Completed", ngo: "FeedIndia NGO", time: "2 hours ago" },
  { id: 2, name: "Fresh Vegetables (5 kg)", status: "Pickup in progress", ngo: "AnnaPoorna Trust", time: "30 min ago" },
  { id: 3, name: "Packaged Snacks (50 units)", status: "Accepted", ngo: "Seva Kitchen", time: "Just now" },
];

export default function DonorDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Welcome back, Donor! 🙏</h1>
            <p className="text-muted-foreground">Your generosity is making a real difference.</p>
          </div>
          <Button className="gradient-accent border-0 text-accent-foreground rounded-full px-6 font-semibold shadow-lg">
            <Plus className="mr-2 h-4 w-4" /> Add Donation
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedCounter end={1250} label="Total Meals Donated" icon={<Utensils className="h-6 w-6" />} />
          <AnimatedCounter end={312} suffix=" kg" label="CO₂ Saved" icon={<Leaf className="h-6 w-6" />} />
          <AnimatedCounter end={500} suffix=" kg" label="Waste Prevented" icon={<Trash2 className="h-6 w-6" />} />
          <AnimatedCounter end={48} label="Donations Made" icon={<TrendingUp className="h-6 w-6" />} />
        </div>

        {/* Achievement */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-accent text-accent-foreground">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Gold Seva Hero</h3>
              <p className="text-sm text-muted-foreground">1,000+ meals donated — You're a champion!</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next: Platinum (2,500 meals)</span>
              <span className="font-medium text-foreground">50%</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
        </motion.div>

        {/* Recent Donations */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" /> Active Donations
            </h2>
            <Button variant="ghost" size="sm" className="text-primary">
              <History className="mr-1 h-4 w-4" /> View History
            </Button>
          </div>
          <div className="space-y-4">
            {recentDonations.map((d) => (
              <div key={d.id} className="flex items-center justify-between rounded-xl border border-border p-4 hover:bg-muted/30 transition-colors">
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">{d.name}</h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {d.ngo}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <Badge variant={d.status === "Completed" ? "default" : "secondary"} className="rounded-full text-xs">
                    {d.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                    <Clock className="h-3 w-3" /> {d.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
