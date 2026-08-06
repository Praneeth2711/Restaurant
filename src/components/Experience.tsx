"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 200, suffix: "k+", label: "Guests Served" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 25, suffix: "", label: "International Awards" },
];

function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * (to - from) + from));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Experience() {
  return (
    <section className="py-32 bg-brand-bg-secondary relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-5xl md:text-7xl font-number text-white font-light mb-4">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="h-[1px] w-12 bg-brand-gold mb-4 mx-auto md:mx-0" />
              <p className="text-brand-text-secondary uppercase tracking-widest text-sm font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
