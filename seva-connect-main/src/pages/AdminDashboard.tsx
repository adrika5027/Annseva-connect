import { motion } from "framer-motion";
import { Users, Package, BarChart3, Settings, Utensils, Leaf, TrendingUp, AlertTriangle, CheckCircle, XCircle, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/landing/AnimatedCounter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const users = [
  { id: 1, name: "Hotel Spice Garden", role: "Donor", status: "Verified", joined: "Jan 2026" },
  { id: 2, name: "FeedIndia NGO", role: "NGO", status: "Pending", joined: "Feb 2026" },
  { id: 3, name: "Rahul Sharma", role: "Donor", status: "Verified", joined: "Dec 2025" },
  { id: 4, name: "AnnaPoorna Trust", role: "NGO", status: "Verified", joined: "Nov 2025" },
];

const recentDonations = [
  { id: 1, food: "Cooked Meals (50)", donor: "Hotel Spice Garden", ngo: "FeedIndia NGO", status: "Completed" },
  { id: 2, food: "Vegetables (20 kg)", donor: "Fresh Mart", ngo: "Seva Kitchen", status: "In Progress" },
  { id: 3, food: "Bread (100 units)", donor: "Baker's Delight", ngo: "—", status: "Flagged" },
];

export default function AdminDashboard() {
  const [expiryWeight, setExpiryWeight] = useState([40]);
  const [distanceWeight, setDistanceWeight] = useState([35]);
  const [quantityWeight, setQuantityWeight] = useState([25]);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Admin Panel 🛡️</h1>
          <p className="text-muted-foreground">System overview and management</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedCounter end={125000} suffix="+" label="Total Meals Saved" icon={<Utensils className="h-6 w-6" />} />
          <AnimatedCounter end={31250} suffix=" kg" label="CO₂ Reduced" icon={<Leaf className="h-6 w-6" />} />
          <AnimatedCounter end={1250} label="Registered Users" icon={<Users className="h-6 w-6" />} />
          <AnimatedCounter end={42} label="Active Pickups Now" icon={<TrendingUp className="h-6 w-6" />} />
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-muted rounded-full p-1">
            <TabsTrigger value="users" className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
              <Users className="mr-1 h-4 w-4" /> Users
            </TabsTrigger>
            <TabsTrigger value="donations" className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
              <Package className="mr-1 h-4 w-4" /> Donations
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
              <BarChart3 className="mr-1 h-4 w-4" /> Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
              <Settings className="mr-1 h-4 w-4" /> AI Weights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            {users.map((u, i) => (
              <motion.div key={u.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {u.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{u.name}</h4>
                    <p className="text-xs text-muted-foreground">{u.role} · Joined {u.joined}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={u.status === "Verified" ? "default" : "secondary"} className="rounded-full text-xs">
                    {u.status === "Verified" ? <CheckCircle className="mr-1 h-3 w-3" /> : <AlertTriangle className="mr-1 h-3 w-3" />}
                    {u.status}
                  </Badge>
                  <Button size="sm" variant="ghost" className="text-xs"><Shield className="h-3 w-3" /></Button>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            {recentDonations.map((d, i) => (
              <motion.div key={d.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-foreground">{d.food}</h4>
                  <p className="text-xs text-muted-foreground">{d.donor} → {d.ngo}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={d.status === "Flagged" ? "destructive" : d.status === "Completed" ? "default" : "secondary"} className="rounded-full text-xs">
                    {d.status}
                  </Badge>
                  {d.status === "Flagged" && (
                    <Button size="sm" variant="ghost" className="text-xs text-destructive"><XCircle className="h-4 w-4" /></Button>
                  )}
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="analytics">
            <div className="glass-card rounded-2xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground max-w-md">Interactive charts with daily/monthly activity, heatmap stats, and real-time metrics will be displayed here.</p>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="glass-card rounded-2xl p-6 space-y-8 max-w-lg">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" /> AI Priority Weights
                </h3>
                <p className="text-sm text-muted-foreground mb-6">Adjust the scoring engine weights for smart donation matching.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-foreground font-medium">Expiry Urgency</span>
                    <span className="text-accent font-bold">{expiryWeight[0]}%</span>
                  </div>
                  <Slider value={expiryWeight} onValueChange={setExpiryWeight} max={100} step={5} className="[&_[role=slider]]:gradient-accent" />
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-foreground font-medium">Distance Proximity</span>
                    <span className="text-primary font-bold">{distanceWeight[0]}%</span>
                  </div>
                  <Slider value={distanceWeight} onValueChange={setDistanceWeight} max={100} step={5} />
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-foreground font-medium">Quantity Volume</span>
                    <span className="text-secondary font-bold">{quantityWeight[0]}%</span>
                  </div>
                  <Slider value={distanceWeight} onValueChange={setQuantityWeight} max={100} step={5} />
                </div>
                <Button className="gradient-primary border-0 text-primary-foreground rounded-full w-full font-semibold">
                  Save Weights
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
