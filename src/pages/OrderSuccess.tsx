import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

const OrderSuccess = () => {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center py-24">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 animate-scale-in">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>

        <h1 className="mt-8 font-display text-3xl font-bold text-center animate-fade-up">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 max-w-md text-center text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
          Thank you for your order. You will receive a confirmation SMS shortly.
          Our farmers are preparing your fresh produce!
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
            <Package className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="text-center">
            <p className="font-medium">Estimated Delivery</p>
            <p className="text-2xl font-display font-bold text-primary">
              Today, 2-4 hours
            </p>
            <p className="text-sm text-muted-foreground">
              Within Kabale Town area
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Button asChild variant="hero">
            <Link to="/products">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/dashboard">View My Orders</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
