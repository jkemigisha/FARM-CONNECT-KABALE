import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, MapPin } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-elevated">
      {/* Image */}
      <Link to={`/products/${product.id}`} className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
          {product.category}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>
        
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{product.location}</span>
          <span className="mx-1">•</span>
          <span>{product.farmerName}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <p className="font-display text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-muted-foreground">per {product.unit}</p>
          </div>
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="gap-1"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
