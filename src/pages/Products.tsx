import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category")
  );
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((p) =>
        p.category.toLowerCase().includes(selectedCategory.toLowerCase().replace("-", " "))
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSortBy("newest");
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-8 md:py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Fresh Products
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse fresh produce from local Kabale farmers
          </p>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">Filters</h3>
                {(selectedCategory || searchQuery) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="mr-1 h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>

              {/* Search */}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-medium text-foreground">Categories</h4>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category.name.toLowerCase().replace(" ", "-")
                            ? null
                            : category.name.toLowerCase().replace(" ", "-")
                        )
                      }
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        selectedCategory === category.name.toLowerCase().replace(" ", "-")
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-medium text-foreground">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
              </p>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16">
                <span className="text-4xl">🌾</span>
                <h3 className="mt-4 font-display text-xl font-semibold">No products found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filters
                </p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
