import { motion } from "framer-motion";
import { BadgeCheck, Globe2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Layout from "@/components/layout";
import HeroSection from "@/components/hero-section";
import AnimatedCounter from "@/components/animated-counter";

const stats = [
  { icon: BadgeCheck, title: 100, desc: "Satisfied Clients", suffix: "+" },
  { icon: Globe2, title: 100, desc: "Projects Completed", suffix: "+" },
  { icon: ShieldCheck, title: 20, desc: "Years of Experience", suffix: "+" }
];

export default function Home() {
  return (
    <Layout>
      <HeroSection 
        title="Leading Main Contractors in UAE."
        subtitle={{
          regular: "Building Excellence, ",
          gradient: "Delivering Quality."
        }}
        description={
          <>
            Specializing in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
              luxury villas
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              warehouse construction
            </span>{" "}
            with sustainable building solutions.
            
            {/* Animated Stats Grid inside Hero */}
            <div className="w-full mt-10 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.desc}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "rounded-2xl bg-white/50 border border-white/30 shadow-xl p-6 flex flex-col items-center",
                    )}
                    style={{
                      boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
                      background: "rgba(255,255,255,0.45)",
                      border: "1.5px solid rgba(255,255,255,0.25)"
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-primary mb-2" />
                    <motion.span
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.2 + idx * 0.1
                      }}
                      className="text-2xl md:text-3xl font-extrabold text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-1"
                    >
                      <AnimatedCounter value={stat.title} suffix={stat.suffix} />
                    </motion.span>
                    <p className="text-base text-gray-700 font-medium text-center">
                      {stat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        }
      />
    </Layout>
  );
}
