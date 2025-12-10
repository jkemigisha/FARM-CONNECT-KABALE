import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products, sampleOrders } from "@/data/mockData";
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Plus,
  Edit,
  Eye,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "orders">(
    "overview"
  );
  
  // Simulating a farmer's dashboard
  const farmerProducts = products.slice(0, 4);
  const farmerOrders = sampleOrders;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const stats = [
    {
      label: "Total Products",
      value: farmerProducts.length,
      icon: Package,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "Active Orders",
      value: farmerOrders.length,
      icon: ShoppingBag,
      color: "bg-secondary/20 text-secondary",
    },
    {
      label: "Total Revenue",
      value: formatPrice(95000),
      icon: TrendingUp,
      color: "bg-accent/20 text-accent-foreground",
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="font-display text-3xl font-bold">Farmer Dashboard</h1>
            <p className="text-muted-foreground">Manage your products and orders</p>
          </div>
          <Button asChild variant="hero">
            <Link to="/dashboard/add-product">
              <Plus className="mr-2 h-4 w-4" />
              Add New Product
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-border">
          {["overview", "products", "orders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`border-b-2 px-4 py-2 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Products */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">Recent Products</h2>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab("products")}>
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {farmerProducts.slice(0, 3).map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 rounded-lg border border-border p-3"
                  >
                    <div className="h-12 w-12 overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(product.price)} / {product.unit}
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {product.stock} in stock
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">Recent Orders</h2>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab("orders")}>
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {farmerOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div>
                      <p className="font-medium">{order.buyerName}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.items.length} items • {formatPrice(order.total)}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        order.status === "delivered"
                          ? "bg-primary/10 text-primary"
                          : order.status === "shipped"
                          ? "bg-accent/20 text-accent-foreground"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="rounded-xl border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Product
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Stock
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Category
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {farmerProducts.map((product) => (
                    <tr key={product.id} className="border-b border-border last:border-0">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-lg">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {formatPrice(product.price)}/{product.unit}
                      </td>
                      <td className="px-6 py-4">{product.stock}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="rounded-xl border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Order ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Items
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Total
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {farmerOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border last:border-0">
                      <td className="px-6 py-4 font-medium">{order.id}</td>
                      <td className="px-6 py-4">{order.buyerName}</td>
                      <td className="px-6 py-4">{order.items.length} items</td>
                      <td className="px-6 py-4">{formatPrice(order.total)}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            order.status === "delivered"
                              ? "bg-primary/10 text-primary"
                              : order.status === "shipped"
                              ? "bg-accent/20 text-accent-foreground"
                              : "bg-secondary/20 text-secondary"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
