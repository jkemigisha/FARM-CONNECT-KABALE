import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Star, Package, ArrowRight } from "lucide-react";
import kemigishaImage from "@/assets/farmers/kemigisha-josephine.png";

const farmers = [
  {
    id: "f1",
    name: "KEMIGISHA JOSEPHINE",
    location: "Kabale Town",
    image: kemigishaImage,
    rating: 4.9,
    products: 15,
    specialty: "Fresh Vegetables",
    bio: "Passionate farmer specializing in organic tomatoes, cabbage, and fresh vegetables.",
  },
  {
    id: "f2",
    name: "John Mugisha",
    location: "Kabale Town",
    image: "/placeholder.svg",
    rating: 4.8,
    products: 12,
    specialty: "Fresh Vegetables",
    bio: "Third-generation farmer specializing in organic tomatoes and passion fruits.",
  },
  {
    id: "f3",
    name: "Sarah Tumwebaze",
    location: "Rubanda",
    image: "/placeholder.svg",
    rating: 4.9,
    products: 8,
    specialty: "Organic Produce",
    bio: "Certified organic farmer growing cabbage, carrots, and leafy greens.",
  },
  {
    id: "f4",
    name: "Peter Byamugisha",
    location: "Ndorwa",
    image: "/placeholder.svg",
    rating: 4.7,
    products: 5,
    specialty: "Poultry",
    bio: "Free-range poultry farm producing eggs and local chicken.",
  },
  {
    id: "f5",
    name: "Grace Ainembabazi",
    location: "Kabale",
    image: "/placeholder.svg",
    rating: 4.6,
    products: 10,
    specialty: "Grains & Cereals",
    bio: "Specializing in sorghum, millet, and traditional grains.",
  },
];

const Farmers = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Meet Our Farmers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Connect directly with local farmers in Kabale District. Get to know the
            people behind your fresh produce.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {farmers.map((farmer) => (
            <div
              key={farmer.id}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated"
            >
              {/* Avatar */}
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-primary/10">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl font-semibold">{farmer.name}</h3>
                <div className="mt-1 flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{farmer.location}</span>
                </div>
              </div>

              {/* Specialty */}
              <div className="mt-4 flex justify-center">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {farmer.specialty}
                </span>
              </div>

              {/* Bio */}
              <p className="mt-4 text-center text-sm text-muted-foreground line-clamp-2">
                {farmer.bio}
              </p>

              {/* Stats */}
              <div className="mt-4 flex justify-center gap-6 border-t border-border pt-4">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-medium">{farmer.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>{farmer.products} products</span>
                </div>
              </div>

              {/* Action */}
              <Button
                asChild
                variant="outline"
                className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Link to={`/products?farmer=${farmer.id}`}>
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Are You a Local Farmer?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join AgroLink and connect with buyers directly. Set your own prices,
            reach more customers, and grow your farming business.
          </p>
          <Button asChild className="mt-6" size="lg" variant="hero">
            <Link to="/register?role=farmer">
              Start Selling Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Farmers;
