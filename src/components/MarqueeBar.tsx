const items = [
  "Web Development", "Mobile App Development", "AI Development", "QA & Testing",
  "Cloud Solutions", "UI/UX Design", "E-Commerce", "DevOps",
];

const MarqueeBar = () => (
  <div className="py-6 border-y border-border/30 bg-muted/20 overflow-hidden">
    <div className="flex marquee whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 text-lg font-heading font-medium text-muted-foreground/60 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary/50" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeBar;
