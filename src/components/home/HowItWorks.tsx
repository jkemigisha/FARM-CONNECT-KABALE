import { UserPlus, ShoppingBag, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up as a buyer or farmer in just a few clicks",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Browse & Select",
    description: "Explore fresh produce from verified local farmers",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: CreditCard,
    title: "Pay Securely",
    description: "Use Mobile Money for quick and safe transactions",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Truck,
    title: "Get Delivery",
    description: "Receive fresh produce at your doorstep in Kabale",
    color: "bg-primary/10 text-primary",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple steps to get fresh farm produce
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="relative mx-auto mb-4 flex h-32 w-32 items-center justify-center">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${step.color} shadow-soft transition-transform duration-300 hover:scale-110`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground font-display text-sm font-bold text-background">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
