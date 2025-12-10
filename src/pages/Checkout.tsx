import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, MapPin, CreditCard, CheckCircle } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "mtn",
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Order placed successfully!");
    clearCart();
    navigate("/order-success");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <h1 className="mb-8 font-display text-3xl font-bold">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery Information */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">
                    Delivery Information
                  </h2>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="0700 000 000"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="Enter your delivery address in Kabale"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <CreditCard className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">
                    Payment Method
                  </h2>
                </div>

                <div className="mt-6 grid gap-3">
                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors ${
                      formData.paymentMethod === "mtn"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="mtn"
                      checked={formData.paymentMethod === "mtn"}
                      onChange={(e) =>
                        setFormData({ ...formData, paymentMethod: e.target.value })
                      }
                      className="h-4 w-4 text-primary"
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 text-lg font-bold">
                      MTN
                    </div>
                    <div>
                      <p className="font-medium">MTN Mobile Money</p>
                      <p className="text-sm text-muted-foreground">
                        Pay with your MTN MoMo account
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors ${
                      formData.paymentMethod === "airtel"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="airtel"
                      checked={formData.paymentMethod === "airtel"}
                      onChange={(e) =>
                        setFormData({ ...formData, paymentMethod: e.target.value })
                      }
                      className="h-4 w-4 text-primary"
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-sm font-bold text-white">
                      Airtel
                    </div>
                    <div>
                      <p className="font-medium">Airtel Money</p>
                      <p className="text-sm text-muted-foreground">
                        Pay with your Airtel Money account
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors ${
                      formData.paymentMethod === "cod"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={(e) =>
                        setFormData({ ...formData, paymentMethod: e.target.value })
                      }
                      className="h-4 w-4 text-primary"
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-lg">
                      💵
                    </div>
                    <div>
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Pay when you receive your order
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                variant="hero"
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Place Order - {formatPrice(totalPrice)}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold">Order Summary</h2>

              <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.quantity} × {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-primary">Free</span>
                </div>
              </div>

              <div className="mt-4 border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-display text-xl font-bold text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
