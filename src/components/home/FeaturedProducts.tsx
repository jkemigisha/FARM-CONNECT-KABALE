import { Link } from "react-router-dom";
import { products } from "@/data/mockData";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Fresh Arrivals
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Just harvested from local farms
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
