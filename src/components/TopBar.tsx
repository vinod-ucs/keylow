import { MapPin, Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-muted/50 border-b border-border/50 py-2 px-4">
    <div className="container mx-auto flex justify-between items-center text-sm text-muted-foreground">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Current Location: Madurai, India</span>
        <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +971-585513</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a href="mailto:info@zealsoft.com" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail className="w-3.5 h-3.5" /> info@zealsoft.com</a>
        <a href="#careers" className="hover:text-primary transition-colors">Build a Career</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
      </div>
    </div>
  </div>
);

export default TopBar;
