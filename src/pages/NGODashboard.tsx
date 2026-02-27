import { motion } from "framer-motion";
import { Search, Filter, MapPin, Clock, Package, AlertTriangle, CheckCircle, Navigation, BarChart3, Utensils, Map } from "lucide-react";
import { AnimatedCounter } from "@/components/landing/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const donations = [
  { id: 1, name: "Rajma Chawal (30 meals)", distance: "1.2 km", expiry: "2h left", priority: "High", qty: "15 kg", donor: "Hotel Spice Garden" },
  { id: 2, name: "Fresh Fruits (10 kg)", distance: "3.5 km", expiry: "6h left", priority: "Medium", qty: "10 kg", donor: "Fresh Mart" },
  { id: 3, name: "Bread & Pastries (40 units)", distance: "0.8 km", expiry: "1h left", priority: "High", qty: "8 kg", donor: "Baker's Delight" },
  { id: 4, name: "Rice & Dal (25 kg)", distance: "5 km", expiry: "12h left", priority: "Low", qty: "25 kg", donor: "Gurudwara Langar" },
];

const priorityStyle: Record<string, string> = {
  High: "badge-priority-high",
  Medium: "badge-priority-medium",
  Low: "badge-priority-low",
};

export default function NGODashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">NGO Dashboard 🧡</h1>
          <p className="text-muted-foreground">Find and collect surplus food in your area</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedCounter end={8500} label="Meals Collected" icon={<Utensils className="h-6 w-6" />} />
          <AnimatedCounter end={24} label="Areas Served" icon={<MapPin className="h-6 w-6" />} />
          <AnimatedCounter end={92} suffix="%" label="Impact Score" icon={<BarChart3 className="h-6 w-6" />} />
          <AnimatedCounter end={156} label="Active Pickups" icon={<Package className="h-6 w-6" />} />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="feed" className="space-y-6">
          <TabsList className="bg-muted rounded-full p-1">
            <TabsTrigger value="feed" className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
              <Search className="mr-1 h-4 w-4" /> Smart Feed
            </TabsTrigger>
            <TabsTrigger value="map" className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
              <Map className="mr-1 h-4 w-4" /> Map View
            </TabsTrigger>
            <TabsTrigger value="tasks" className="rounded-full data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
              <CheckCircle className="mr-1 h-4 w-4" /> My Tasks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-4">
            {/* Search */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search donations..." className="pl-10 rounded-full bg-card border-border" />
              </div>
              <Button variant="outline" className="rounded-full">
                <Filter className="mr-1 h-4 w-4" /> Filters
              </Button>
            </div>

            {/* Donation Cards */}
            {donations.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-5 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-foreground">{d.name}</h3>
                      <Badge className={`rounded-full text-xs ${priorityStyle[d.priority]}`}>
                        {d.priority === "High" && <AlertTriangle className="mr-1 h-3 w-3" />}
                        {d.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">by {d.donor}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {d.distance}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {d.expiry}</span>
                      <span className="flex items-center gap-1"><Package className="h-3 w-3" /> {d.qty}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" className="gradient-primary border-0 text-primary-foreground rounded-full text-xs">
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full text-xs">
                      <Navigation className="mr-1 h-3 w-3" /> Route
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="map">
            <div className="glass-card rounded-2xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
              <Map className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Map View</h3>
              <p className="text-muted-foreground max-w-md">Interactive map with donation pins, hunger heatmap overlay, and real-time tracking will be displayed here with Google Maps integration.</p>
            </div>
          </TabsContent>

          <TabsContent value="tasks">
            <div className="glass-card rounded-2xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
              <CheckCircle className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">No Active Tasks</h3>
              <p className="text-muted-foreground">Accept donations from the Smart Feed to start your tasks.</p>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
