import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          
          {/* Mission */}
          <div>
            <h3 className="text-xl font-bold text-gradient-primary mb-3">
              AnnSeva Mission
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered food redistribution for a hunger-free India.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">
                How It Works
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                For Donors
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                For NGOs
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Hunger Heatmap
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Organization</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Mission & Vision
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Blog
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Terms & Conditions
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                FAQs
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          Made with{" "}
          <Heart className="inline h-4 w-4 text-red-500" />{" "}
          for a hunger-free world © 2026 AnnSeva Mission
        </div>
      </div>
    </footer>
  );
}