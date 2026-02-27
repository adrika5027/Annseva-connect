import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
}

export function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "", label, icon }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="stat-card text-center"
    >
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary">
        <span className="text-primary-foreground">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-foreground md:text-4xl">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-muted-foreground">{label}</div>
    </motion.div>
  );
}
