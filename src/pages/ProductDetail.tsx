import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  ShoppingCart,
  Minus,
  Plus,
  MapPin,
  User,
  Package,
  ChevronLeft,
  Phone,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container flex flex-col items-center justify-center py-24">
          <span className="text-6xl">🌾</span>
          <h1 className="mt-4 font-display text-2xl font-bold">Product Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The product you're looking for doesn't exist
          </p>
          <Button asChild className="mt-6">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Products
          </Link>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
              {product.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{product.farmerName}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{product.location}</span>
              </div>
            </div>

            <p className="mt-6 text-lg text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              <span className="text-lg text-muted-foreground">
                per {product.unit}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {product.stock > 0 ? (
                  <>
                    <span className="font-medium text-primary">{product.stock}</span>{" "}
                    in stock
                  </>
                ) : (
                  <span className="text-destructive">Out of stock</span>
                )}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-lg border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center hover:bg-muted"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="flex h-12 w-12 items-center justify-center hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <Button
                size="lg"
                variant="hero"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 md:flex-none"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - {formatPrice(product.price * quantity)}
              </Button>
            </div>

            {/* Farmer Info Card */}
            <div className="mt-8 rounded-xl border border-border bg-muted/50 p-6">
              <h3 className="font-display text-lg font-semibold">Sold by</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{product.farmerName}</p>
                  <p className="text-sm text-muted-foreground">{product.location}</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                <Phone className="mr-2 h-4 w-4" />
                Contact Farmer
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold">Related Products</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-elevated"
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 font-medium text-foreground">{p.name}</h3>
                  <p className="font-display text-lg font-bold text-primary">
                    {formatPrice(p.price)}
                    <span className="text-sm font-normal text-muted-foreground">
                      /{p.unit}
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
