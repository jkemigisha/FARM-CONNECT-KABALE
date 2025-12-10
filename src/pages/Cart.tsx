import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container flex flex-col items-center justify-center py-24">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="mt-6 font-display text-2xl font-bold">Your Cart is Empty</h1>
          <p className="mt-2 text-muted-foreground">
            Add some fresh produce to get started
          </p>
          <Button asChild className="mt-6" variant="hero">
            <Link to="/products">
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-3xl font-bold">Shopping Cart</h1>
          <Button variant="ghost" onClick={clearCart} className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card">
              {items.map((item, index) => (
                <div
                  key={item.product.id}
                  className={`flex gap-4 p-4 md:p-6 ${
                    index !== items.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  {/* Image */}
                  <Link
                    to={`/products/${item.product.id}`}
                    className="h-24 w-24 shrink-0 overflow-hidden rounded-lg"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          to={`/products/${item.product.id}`}
                          className="font-display text-lg font-semibold hover:text-primary"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.product.farmerName} • {item.product.location}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4">
                      {/* Quantity */}
                      <div className="flex items-center rounded-lg border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-10 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-display text-lg font-bold text-primary">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold">Order Summary</h2>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-primary">Free</span>
                </div>
              </div>

              <div className="mt-4 border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="font-display text-lg font-semibold">Total</span>
                  <span className="font-display text-2xl font-bold text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <Button asChild className="mt-6 w-full" size="lg" variant="hero">
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Secure payment via Mobile Money
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
