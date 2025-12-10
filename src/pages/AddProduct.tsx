import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { categories } from "@/data/mockData";
import { ChevronLeft, Upload, Package, Save } from "lucide-react";

const AddProduct = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    unit: "kg",
    category: "",
    stock: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.category || !formData.stock) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    
    // Simulate adding product
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Product added successfully!");
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/dashboard"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="font-display text-3xl font-bold">Add New Product</h1>
          <p className="text-muted-foreground">
            List your farm produce for sale on AgroLink
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Image */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Upload className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold">Product Image</h2>
              </div>
              
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-8 transition-colors hover:border-primary">
                <Upload className="h-10 w-10 text-muted-foreground" />
                <p className="mt-4 text-sm font-medium">Click to upload image</p>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                <input type="file" accept="image/*" className="hidden" />
              </div>
            </div>

            {/* Product Details */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
                  <Package className="h-5 w-5 text-secondary" />
                </div>
                <h2 className="font-display text-xl font-semibold">Product Details</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g., Fresh Tomatoes"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Describe your product, how it's grown, quality, etc."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <Label htmlFor="price">Price (UGX) *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      placeholder="5000"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="unit">Unit *</Label>
                    <select
                      id="unit"
                      value={formData.unit}
                      onChange={(e) =>
                        setFormData({ ...formData, unit: e.target.value })
                      }
                      className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2"
                    >
                      <option value="kg">Kilogram (kg)</option>
                      <option value="bunch">Bunch</option>
                      <option value="head">Head</option>
                      <option value="tray (30)">Tray (30 eggs)</option>
                      <option value="whole">Whole</option>
                      <option value="piece">Piece</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="stock">Stock Quantity *</Label>
                    <Input
                      id="stock"
                      type="number"
                      value={formData.stock}
                      onChange={(e) =>
                        setFormData({ ...formData, stock: e.target.value })
                      }
                      placeholder="50"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="hero"
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Adding..."
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Add Product
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
