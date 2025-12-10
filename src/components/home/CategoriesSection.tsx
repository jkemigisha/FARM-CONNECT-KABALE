import { Link } from "react-router-dom";
import { categories } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore fresh produce from local Kabale farms
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name.toLowerCase().replace(" ", "-")}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              
              <span className="relative text-5xl">{category.icon}</span>
              
              <h3 className="relative mt-4 font-display text-xl font-semibold text-foreground">
                {category.name}
              </h3>
              
              <p className="relative mt-2 text-sm text-muted-foreground">
                {category.description}
              </p>
              
              <div className="relative mt-4 flex items-center justify-between">
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {category.productCount} products
                </span>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
