export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  farmerId: string;
  farmerName: string;
  location: string;
  stock: number;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'farmer' | 'buyer' | 'admin';
  phone?: string;
  location?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  buyerId: string;
  buyerName: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: string;
  deliveryAddress: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
}
