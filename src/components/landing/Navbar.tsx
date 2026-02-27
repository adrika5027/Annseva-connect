import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-gradient-primary">
          🌾 AnnSeva
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/donor" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Donor</Link>
          <Link to="/ngo" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">NGO</Link>
          <Link to="/admin" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Admin</Link>
          <Link to="/login/donor">
            <Button size="sm" className="rounded-full gradient-primary border-0 text-primary-foreground px-6 font-semibold">
              Get Started
            </Button>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden space-y-3">
          <Link to="/" onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">Home</Link>
          <Link to="/donor" onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">Donor</Link>
          <Link to="/ngo" onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">NGO</Link>
          <Link to="/admin" onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">Admin</Link>
        </div>
      )}
    </nav>
  );
}
