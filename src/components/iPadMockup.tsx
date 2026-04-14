import { motion } from "framer-motion";
import { Code2, CheckCircle2, Rocket, Headphones } from "lucide-react";

const phases = [
  { label: "Develop", icon: Code2, color: "primary", y: "15%" },
  { label: "Test", icon: CheckCircle2, color: "accent", y: "35%" },
  { label: "Launch", icon: Rocket, color: "secondary", y: "55%" },
  { label: "Support", icon: Headphones, color: "primary", y: "75%" },
];

const IPadMockup = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Floating orbit rings */}
      <motion.div
        className="absolute -inset-12 border border-accent/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-accent/40 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      <motion.div
        className="absolute -inset-20 border border-primary/5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-primary/30 -translate-x-1/2 translate-y-1/2" />
      </motion.div>

      {/* iPad frame */}
      <div className="relative rounded-[2rem] border-[6px] border-muted bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[3/4]">
        {/* Camera notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground/30" />

        {/* Status bar */}
        <div className="absolute top-3 right-4 flex items-center gap-1.5">
          <div className="w-3 h-1.5 rounded-sm border border-primary/40" >
            <div className="w-2 h-full rounded-sm bg-primary/60" />
          </div>
          <div className="w-1 h-1 rounded-full bg-primary/40" />
        </div>

        {/* Screen content */}
        <div className="absolute inset-4 top-10 bottom-4">
          {/* Top mini toolbar */}
          <div className="flex items-center gap-1.5 mb-4 px-1">
            <div className="w-2 h-2 rounded-full bg-destructive/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="flex-1 mx-2 h-4 rounded-md bg-muted/50 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-primary/30 mr-1" />
              <div className="h-1 w-12 rounded bg-muted-foreground/20" />
            </div>
          </div>

          {/* Pipeline visualization */}
          <div className="relative h-[calc(100%-2rem)]">
            {/* Vertical pipeline line */}
            <div className="absolute left-[22px] top-[20px] bottom-[20px] w-px bg-gradient-to-b from-primary/40 via-accent/40 to-secondary/40" />

            {/* Animated pulse traveling down the line */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute left-[22px] w-1 h-8 -translate-x-1/2 rounded-full"
                style={{
                  background: "linear-gradient(to bottom, transparent, hsl(200 80% 55% / 0.8), transparent)",
                }}
                animate={{
                  top: ["20px", "calc(100% - 20px)"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Phase nodes */}
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.label}
                  className="absolute flex items-center gap-3 left-0 right-0"
                  style={{ top: phase.y }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                >
                  {/* Node circle */}
                  <motion.div
                    className="w-[44px] h-[44px] rounded-xl bg-muted/80 border border-border flex items-center justify-center flex-shrink-0 relative z-10"
                    animate={{
                      borderColor: [
                        "hsl(220 20% 18%)",
                        `hsl(${phase.color === "primary" ? "150 65% 42%" : phase.color === "accent" ? "200 80% 55%" : "260 50% 50%"} / 0.5)`,
                        "hsl(220 20% 18%)",
                      ],
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  >
                    <Icon className={`w-4 h-4 text-${phase.color}`} />
                  </motion.div>

                  {/* Label card */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">
                      Phase {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-xs font-medium text-foreground">{phase.label}</div>
                    {/* Mini progress bar */}
                    <div className="mt-1.5 h-1 rounded-full bg-muted/60 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-${phase.color}/60`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 2,
                          delay: 1 + i * 0.6,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>

                  {/* Status indicator */}
                  <motion.div
                    className="w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0"
                    animate={{
                      scale: [1, 1.2, 1],
                      borderColor: [
                        "hsl(200 80% 55% / 0.2)",
                        "hsl(200 80% 55% / 0.6)",
                        "hsl(200 80% 55% / 0.2)",
                      ],
                    }}
                    transition={{ duration: 2, delay: 1.5 + i * 0.5, repeat: Infinity }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Bottom stats bar */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-1 py-2 border-t border-border/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] text-primary font-mono">LIVE</span>
              </div>
              <motion.span
                className="text-[8px] text-muted-foreground font-mono"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Pipeline Active
              </motion.span>
              <span className="text-[8px] text-accent font-mono">99.9%</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating cards around iPad */}
      <motion.div
        className="absolute -left-16 top-[20%] glass-card px-3 py-2 flex items-center gap-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
          <Code2 className="w-3 h-3 text-primary" />
        </div>
        <div>
          <div className="text-[9px] text-muted-foreground">Commits</div>
          <div className="text-xs font-bold text-foreground">2,847</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-12 top-[45%] glass-card px-3 py-2 flex items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
          <CheckCircle2 className="w-3 h-3 text-accent" />
        </div>
        <div>
          <div className="text-[9px] text-muted-foreground">Tests</div>
          <div className="text-xs font-bold text-foreground">Passed</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-8 bottom-[15%] glass-card px-3 py-2 flex items-center gap-2"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-6 h-6 rounded-lg bg-secondary/20 flex items-center justify-center">
          <Rocket className="w-3 h-3 text-secondary" />
        </div>
        <div>
          <div className="text-[9px] text-muted-foreground">Deploy</div>
          <div className="text-xs font-bold text-foreground">Ready</div>
        </div>
      </motion.div>

      {/* Glow behind iPad */}
      <div className="absolute -inset-8 bg-accent/5 rounded-full blur-[60px] -z-10" />
      <div className="absolute -inset-4 bg-primary/3 rounded-full blur-[40px] -z-10" />
    </div>
  );
};

export default IPadMockup;
