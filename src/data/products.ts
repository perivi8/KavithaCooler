import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    title: "Samsung 4K Smart TV 55\"",
    brand: "Samsung",
    category: "TV",
    price: 54999,
    mrp: 69999,
    discountPct: 21,
    rating: 4.5,
    reviewsCount: 1245,
    image: "/sony tv.jpg",
    inStock: true,
    specs: {
      "Screen Size": "55 inch",
      "Display Type": "QLED",
      "Resolution": "4K Ultra HD",
      "Smart Features": "Smart TV, WiFi, Netflix, Prime Video"
    }
  },
  {
    id: "2",
    title: "LG 1.5 Ton 5 Star Inverter Split AC",
    brand: "LG",
    category: "AC",
    price: 44990,
    mrp: 52990,
    discountPct: 15,
    rating: 4.3,
    reviewsCount: 987,
    image: "/voltas ac.jpg",
    inStock: true,
    capacity: "1.5 Ton",
    energyRating: "5 Star",
    specs: {
      "Cooling Capacity": "1.5 Ton",
      "Energy Rating": "5 Star",
      "Special Features": "4-in-1 Convertible, HD Filter, 4 Way Swing"
    }
  },
  {
    id: "3",
    title: "Samsung 7.2 kg Fully Automatic Top Load Washing Machine",
    brand: "Samsung",
    category: "Washing Machine",
    price: 18990,
    mrp: 22990,
    discountPct: 17,
    rating: 4.4,
    reviewsCount: 2345,
    image: "/lg washing.jpg",
    inStock: true,
    capacity: "7.2 kg",
    specs: {
      "Capacity": "7.2 kg",
      "Type": "Fully Automatic Top Load",
      "Special Features": "Diamond Drum, Magic Filter, Air Turbo Drying"
    }
  },
  {
    id: "4",
    title: "Havells 48-inch Ceiling Fan",
    brand: "Havells",
    category: "Fan",
    price: 2299,
    mrp: 2899,
    discountPct: 21,
    rating: 4.2,
    reviewsCount: 876,
    image: "/havells fan.jpg",
    inStock: true,
    specs: {
      "Size": "1200mm (48 inch)",
      "Air Delivery": "235 CMM",
      "Power Consumption": "75W"
    }
  },
  {
    id: "5",
    title: "Samsung 253L Double Door Refrigerator",
    brand: "Samsung",
    category: "Refrigerator",
    price: 28990,
    mrp: 33990,
    discountPct: 15,
    rating: 4.6,
    reviewsCount: 1543,
    image: "/samsung refrig.jpg",
    inStock: true,
    capacity: "253L",
    energyRating: "3 Star",
    specs: {
      "Capacity": "253L",
      "Type": "Double Door",
      "Energy Rating": "3 Star",
      "Special Features": "Digital Inverter, All-Round Cooling, Stabilizer Free"
    }
  },
  {
    id: "6",
    title: "Bajaj 3L Instant Water Heater",
    brand: "Bajaj",
    category: "Water Heater",
    price: 3499,
    mrp: 4499,
    discountPct: 22,
    rating: 4.1,
    reviewsCount: 567,
    image: "/crompton-wh.jpg",
    inStock: true,
    capacity: "3L",
    specs: {
      "Capacity": "3L",
      "Type": "Instant Water Heater",
      "Power Consumption": "3000W",
      "Special Features": "Rust Free Body, 3 Level Safety"
    }
  },
  {
    id: "7",
    title: "Symphony Diet 3D 55L Air Cooler",
    brand: "Symphony",
    category: "Air Cooler",
    price: 12999,
    mrp: 15999,
    discountPct: 19,
    rating: 4.0,
    reviewsCount: 432,
    image: "/voltas air.jpg",
    inStock: true,
    capacity: "55L",
    specs: {
      "Tank Capacity": "55L",
      "Air Delivery": "5000 CMH",
      "Special Features": "3D Air Distribution, Dust Filter, Ice Chamber"
    }
  },
  {
    id: "8",
    title: "LG 1.8 Ton 5 Star Inverter Split AC",
    brand: "LG",
    category: "AC",
    price: 52990,
    mrp: 62990,
    discountPct: 16,
    rating: 4.5,
    reviewsCount: 876,
    image: "/voltas ac.jpg",
    inStock: true,
    capacity: "1.8 Ton",
    energyRating: "5 Star",
    specs: {
      "Cooling Capacity": "1.8 Ton",
      "Energy Rating": "5 Star",
      "Special Features": "4-in-1 Convertible, HD Filter, 4 Way Swing"
    }
  },
  {
    id: "9",
    title: "Whirlpool 6.5 kg Fully Automatic Top Load Washing Machine",
    brand: "Whirlpool",
    category: "Washing Machine",
    price: 16990,
    mrp: 19990,
    discountPct: 15,
    rating: 4.3,
    reviewsCount: 1987,
    image: "/lg washing.jpg",
    inStock: true,
    capacity: "6.5 kg",
    specs: {
      "Capacity": "6.5 kg",
      "Type": "Fully Automatic Top Load",
      "Special Features": "ZPF Technology, 6th Sense Technology, Hard Water Wash"
    }
  },
  {
    id: "10",
    title: "Crompton 1200mm Ceiling Fan",
    brand: "Crompton",
    category: "Fan",
    price: 2499,
    mrp: 2999,
    discountPct: 17,
    rating: 4.4,
    reviewsCount: 2345,
    image: "/havells fan.jpg",
    inStock: true,
    specs: {
      "Size": "1200mm (48 inch)",
      "Air Delivery": "230 CMM",
      "Power Consumption": "75W"
    }
  },
  {
    id: "11",
    title: "LG 260L Double Door Refrigerator",
    brand: "LG",
    category: "Refrigerator",
    price: 30990,
    mrp: 36990,
    discountPct: 16,
    rating: 4.5,
    reviewsCount: 1987,
    image: "/samsung refrig.jpg",
    inStock: false,
    capacity: "260L",
    energyRating: "4 Star",
    specs: {
      "Capacity": "260L",
      "Type": "Double Door",
      "Energy Rating": "4 Star",
      "Special Features": "Smart Inverter Compressor, Moist Balance Crisper"
    }
  },
  {
    id: "12",
    title: "AO Smith 6L Water Heater",
    brand: "AO Smith",
    category: "Water Heater",
    price: 8999,
    mrp: 10999,
    discountPct: 18,
    rating: 4.3,
    reviewsCount: 654,
    image: "/crompton-wh.jpg",
    inStock: true,
    capacity: "6L",
    specs: {
      "Capacity": "6L",
      "Type": "Storage Water Heater",
      "Power Consumption": "2000W",
      "Special Features":"Blue Diamond Glass Lined Tank, 5 Years Warranty"
    }
  }
];

export const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'tv', name: 'TVs' },
  { id: 'ac', name: 'Air Conditioners' },
  { id: 'refrigerator', name: 'Refrigerators' },
  { id: 'washing-machine', name: 'Washing Machines' },
  { id: 'fan', name: 'Fans' },
  { id: 'air-cooler', name: 'Air Coolers' },
  { id: 'water-heater', name: 'Water Heaters' },
];

export const brands = [
  { id: 'samsung', name: 'Samsung' },
  { id: 'lg', name: 'LG' },
  { id: 'whirlpool', name: 'Whirlpool' },
  { id: 'godrej', name: 'Godrej' },
  { id: 'voltas', name: 'Voltas' },
  { id: 'daikin', name: 'Daikin' },
  { id: 'bajaj', name: 'Bajaj' },
  { id: 'havells', name: 'Havells' },
  { id: 'crompton', name: 'Crompton' },
  { id: 'symphony', name: 'Symphony' },
];

export const priceRanges = [
  { id: '0-5000', name: 'Under ₹5,000', min: 0, max: 5000 },
  { id: '5000-10000', name: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { id: '10000-20000', name: '₹10,000 - ₹20,000', min: 10000, max: 20000 },
  { id: '20000-40000', name: '₹20,000 - ₹40,000', min: 20000, max: 40000 },
  { id: '40000-60000', name: '₹40,000 - ₹60,000', min: 40000, max: 60000 },
  { id: '60000+', name: 'Over ₹60,000', min: 60000, max: 1000000 },
];

export const energyRatings = [
  { id: '5', name: '5 Star' },
  { id: '4', name: '4 Star' },
  { id: '3', name: '3 Star' },
  { id: '2', name: '2 Star' },
  { id: '1', name: '1 Star' },
];

export const sortOptions = [
  { id: 'popularity', name: 'Popularity' },
  { id: 'price-low-high', name: 'Price: Low to High' },
  { id: 'price-high-low', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest' },
  { id: 'rating', name: 'Customer Rating' },
];
