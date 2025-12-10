import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/20">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">AgroLink</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Connecting local farmers with buyers in Kabale District. Fresh
              produce, fair prices, direct from farm to table.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-lg p-2 transition-colors hover:bg-primary-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg p-2 transition-colors hover:bg-primary-foreground/10"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg p-2 transition-colors hover:bg-primary-foreground/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/products"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Browse Products
              </Link>
              <Link
                to="/farmers"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Our Farmers
              </Link>
              <Link
                to="/about"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                About Us
              </Link>
              <Link
                to="/register?role=farmer"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Become a Seller
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Categories</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/products?category=vegetables"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Fresh Vegetables
              </Link>
              <Link
                to="/products?category=fruits"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Fresh Fruits
              </Link>
              <Link
                to="/products?category=grains"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Grains & Cereals
              </Link>
              <Link
                to="/products?category=poultry"
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Poultry Products
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+256782049999"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                +256 782 049 999
              </a>
              <a
                href="mailto:kjoseph1232018@gmail.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                kjoseph1232018@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Kabale Town, Uganda
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © 2024 AgroLink. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
