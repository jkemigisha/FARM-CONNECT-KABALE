import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Truck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
              <Leaf className="h-4 w-4" />
              <span>Direct from Kabale Farms</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Fresh Farm Produce,
                <span className="block text-accent">Delivered to You</span>
              </h1>
              <p className="max-w-lg text-lg text-primary-foreground/80 md:text-xl">
                Connect directly with local farmers in Kabale District. Get fresh
                vegetables, fruits, grains, and poultry products at fair prices.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="xl" variant="gold">
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline-light">
                <Link to="/register?role=farmer">Become a Seller</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <p className="font-display text-3xl font-bold text-primary-foreground">
                  500+
                </p>
                <p className="text-sm text-primary-foreground/70">Local Farmers</p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-3xl font-bold text-primary-foreground">
                  2,000+
                </p>
                <p className="text-sm text-primary-foreground/70">Products</p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-3xl font-bold text-primary-foreground">
                  10K+
                </p>
                <p className="text-sm text-primary-foreground/70">Happy Buyers</p>
              </div>
            </div>
          </div>

          {/* Hero Image / Features */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30 backdrop-blur-sm" />
              
              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 animate-float rounded-xl bg-card p-4 shadow-elevated">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Direct Trade</p>
                    <p className="text-xs text-muted-foreground">No middlemen</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-1/2 animate-float rounded-xl bg-card p-4 shadow-elevated" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
                    <Truck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">Within Kabale</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/4 animate-float rounded-xl bg-card p-4 shadow-elevated" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <Leaf className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">100% Fresh</p>
                    <p className="text-xs text-muted-foreground">Farm to table</p>
                  </div>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-elevated">
                <span className="text-5xl">🌾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
