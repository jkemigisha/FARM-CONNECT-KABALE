import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We believe in empowering local farming communities and creating sustainable livelihoods.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Fair prices, verified farmers, and secure transactions you can rely on.",
  },
  {
    icon: TrendingUp,
    title: "Growth Together",
    description:
      "When farmers thrive, communities prosper. We're committed to shared success.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Connecting Kabale Farmers with the World
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl">
              AgroLink is a digital marketplace built to bridge the gap between
              local farmers and consumers, eliminating middlemen and ensuring fair
              trade for all.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To create a reliable, localized digital platform that connects
              farmers directly to buyers, ensuring fair prices for producers and
              fresh, quality produce for consumers in Kabale District and beyond.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20">
              <Eye className="h-7 w-7 text-secondary" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              To become the leading agricultural marketplace in southwestern
              Uganda, transforming how farm produce is traded while improving
              farmers' incomes and reducing post-harvest losses.
            </p>
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
            The Challenge We're Solving
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-destructive/10 p-8">
              <h3 className="font-display text-xl font-semibold text-destructive">
                The Problem
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  Local farmers lack direct access to markets
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  Middlemen exploit farmers with unfair pricing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  Post-harvest losses due to delayed sales
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                  Consumers pay high prices with uncertain quality
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-primary/10 p-8">
              <h3 className="font-display text-xl font-semibold text-primary">
                Our Solution
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Direct farmer-to-buyer online marketplace
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Farmers set their own fair prices
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Digital payments via Mobile Money
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  Fast delivery within Kabale Town
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container py-16">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
          Our Values
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:shadow-elevated"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team / Stats */}
      <div className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <p className="font-display text-4xl font-bold">500+</p>
              <p className="mt-2 text-primary-foreground/70">Registered Farmers</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold">2,000+</p>
              <p className="mt-2 text-primary-foreground/70">Products Listed</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold">10K+</p>
              <p className="mt-2 text-primary-foreground/70">Orders Completed</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold">40%</p>
              <p className="mt-2 text-primary-foreground/70">Income Increase</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container py-16">
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 p-8 text-center text-secondary-foreground md:p-12">
          <Users className="mx-auto h-12 w-12" />
          <h2 className="mt-6 font-display text-2xl font-bold md:text-3xl">
            Join the AgroLink Community
          </h2>
          <p className="mt-4 text-secondary-foreground/80">
            Whether you're a farmer looking to reach more buyers or a consumer
            wanting fresh local produce, AgroLink is for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="gold">
              <Link to="/register?role=farmer">
                Join as Farmer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/register?role=buyer">Join as Buyer</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
