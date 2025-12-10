import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp, Shield } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* For Farmers */}
          <div className="rounded-2xl bg-card/95 p-8 shadow-elevated backdrop-blur-sm md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Leaf className="h-7 w-7 text-primary" />
            </div>
            
            <h3 className="mt-6 font-display text-2xl font-bold text-foreground md:text-3xl">
              Are You a Farmer?
            </h3>
            
            <p className="mt-4 text-muted-foreground">
              Join AgroLink and reach thousands of buyers directly. Set your own
              prices, manage your products online, and grow your farm business.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Increase your income by 40%+</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure payments via Mobile Money</span>
              </li>
            </ul>

            <Button asChild size="lg" className="mt-8" variant="hero">
              <Link to="/register?role=farmer">
                Start Selling Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* For Buyers */}
          <div className="rounded-2xl bg-primary/95 p-8 text-primary-foreground shadow-elevated backdrop-blur-sm md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/20">
              <TrendingUp className="h-7 w-7" />
            </div>
            
            <h3 className="mt-6 font-display text-2xl font-bold md:text-3xl">
              Bulk Orders Welcome
            </h3>
            
            <p className="mt-4 text-primary-foreground/80">
              Hotels, restaurants, and retailers - get the best prices on bulk
              orders. Direct sourcing from multiple farmers for consistent supply.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span>Competitive wholesale prices</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <span>Consistent quality & supply</span>
              </li>
            </ul>

            <Button asChild size="lg" className="mt-8" variant="gold">
              <Link to="/register?role=buyer">
                Register Your Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
