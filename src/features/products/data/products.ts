import { Product } from '../types';

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
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000",
    inStock: true,
    description: "Experience stunning 4K UHD resolution with HDR for incredible detail, vibrant colors, and deep contrast. Smart TV features let you stream movies, shows, and music from your favorite apps.",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000",
      "https://images.unsplash.com/photo-1593305848501-9c8c8b0b3f3d?q=80&w=1000",
      "https://images.unsplash.com/photo-1593305848501-9c8c8b0b3f3e?q=80&w=1000"
    ],
    features: [
      "4K UHD Resolution (3840 x 2160)",
      "HDR10+ for enhanced contrast",
      "Smart TV with built-in WiFi",
      "Voice Assistant Compatible",
      "Multiple HDMI and USB ports"
    ],
    tags: ["4K", "Smart TV", "HDR", "Samsung"],
    specs: {
      "Screen Size": "55 inch",
      "Display Type": "QLED",
      "Resolution": "4K Ultra HD (3840 x 2160)",
      "Smart Features": "Smart TV, WiFi, Netflix, Prime Video, Disney+",
      "Connectivity": "3 x HDMI, 2 x USB, Ethernet, WiFi, Bluetooth"
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
    image: "/lg.jpg",
    inStock: true,
    capacity: "1.5 Ton",
    energyRating: "5 Star",
    description: "Experience energy-efficient cooling with LG's 5 Star Inverter Split AC. Features 4-in-1 convertible cooling, HD filter with anti-virus protection, and ultra-low noise operation.",
    images: [
      "/lg.jpg",
      "/lg.jpg"
    ],
    features: [
      "5 Star Energy Rating for energy savings",
      "4-in-1 Convertible Cooling Mode",
      "HD Filter with Anti-Virus Protection",
      "4-Way Swing for uniform cooling",
      "Low Noise Operation (as low as 22 dB)",
      "Copper Condenser for better cooling"
    ],
    tags: ["AC", "Inverter", "5 Star", "Split AC", "LG"],
    specs: {
      "Capacity": "1.5 Ton",
      "Energy Rating": "5 Star",
      "Cooling Power": "5100 W",
      "Noise Level": "22 dB (Lowest)",
      "Special Features": "4-in-1 Convertible, HD Filter, 4-Way Swing",
      "Warranty": "1 Year on Product, 10 Years on Compressor"
    }
  },
  {
    id: "3",
    title: "Whirlpool 7.5 Kg Fully Automatic Top Load Washing Machine",
    brand: "Whirlpool",
    category: "washing-machine",
    price: 18990,
    mrp: 21990,
    discountPct: 14,
    rating: 4.2,
    reviewsCount: 876,
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1000",
    inStock: true,
    capacity: "7.5 kg",
    description: "Experience hassle-free laundry with Whirlpool's fully automatic top load washing machine. Features multiple wash programs and ZPF technology for optimal wash quality.",
    images: [
      "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1000",
      "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0d?q=80&w=1000"
    ],
    features: [
      "7.5 kg Capacity",
      "Fully Automatic Top Load",
      "Multiple Wash Programs",
      "ZPF Technology",
      "Hard Water Wash"
    ],
    tags: ["Washing Machine", "Fully Automatic", "Top Load"],
    specs: {
      "Capacity": "7.5 kg",
      "Type": "Fully Automatic Top Load",
      "Wash Programs": "12",
      "Special Features": "Hard Water Wash, ZPF Technology",
      "Energy Rating": "3 Star"
    }
  },
  {
    id: "4",
    title: "Samsung 253L 3 Star Inverter Double Door Refrigerator",
    brand: "Samsung",
    category: "refrigerator",
    price: 28990,
    mrp: 32990,
    discountPct: 12,
    rating: 4.4,
    reviewsCount: 765,
    image: "/samsung refrig.jpg",
    inStock: true,
    capacity: "253 L",
    description: "Samsung's 3-star double door refrigerator with digital inverter technology ensures optimal cooling while being energy efficient. Features include twin cooling plus and stabilizer-free operation.",
    images: [
      "/samsung refrig.jpg",
      "/samsung refrig.jpg"
    ],
    features: [
      "253L Capacity",
      "Double Door",
      "Digital Inverter Technology",
      "Twin Cooling Plus",
      "Stabilizer Free Operation"
    ],
    tags: ["Refrigerator", "Double Door", "Inverter"],
    specs: {
      "Capacity": "253 Liters",
      "Type": "Double Door",
      "Energy Rating": "3 Star",
      "Special Features": "Digital Inverter, Twin Cooling Plus",
      "Refrigerant": "R600a"
    }
  },
  {
    id: "5",
    title: "Havells 48-inch Ceiling Fan with Remote",
    brand: "Havells",
    category: "fan",
    price: 3499,
    mrp: 4199,
    discountPct: 17,
    rating: 4.1,
    reviewsCount: 543,
    image: "/havells fan.jpg",
    inStock: true,
    capacity: "48-inch",
    description: "Havells 48-inch premium ceiling fan with remote control for convenient operation. Features high speed air delivery and energy efficient motor.",
    images: [
      "/havells fan.jpg",
      "/havells fan.jpg"
    ],
    features: [
      "48-inch Sweep",
      "Remote Control",
      "High Air Delivery",
      "Energy Efficient",
      "3 Year Warranty"
    ],
    tags: ["Fan", "Ceiling Fan", "Remote Control"],
    specs: {
      "Sweep Size": "48-inch",
      "Speed": "370 RPM",
      "Air Delivery": "240 CMM",
      "Power Consumption": "70W",
      "Warranty": "3 Years"
    }
  },
  {
    id: "6",
    title: "LG 8.0 Kg 5 Star Inverter Front Load Washing Machine",
    brand: "LG",
    category: "washing-machine",
    price: 42990,
    mrp: 47990,
    discountPct: 10,
    rating: 4.6,
    reviewsCount: 1123,
    image: "/lg washing.jpg",
    inStock: true,
    capacity: "8.0 kg",
    description: "LG's 5-star rated front load washing machine with AI DD™ and 6 Motion Direct Drive technology for perfect wash care. Steam for hygiene and allergy care.",
    images: [
      "/lg washing.jpg",
      "/lg washing.jpg"
    ],
    features: [
      "8.0 kg Capacity",
      "Front Load",
      "AI DD™ with 6 Motion Direct Drive",
      "Steam for Hygiene",
      "Allergy Care"
    ],
    tags: ["Washing Machine", "Front Load", "Inverter", "AI DD"],
    specs: {
      "Capacity": "8.0 kg",
      "Type": "Front Load",
      "Energy Rating": "5 Star",
      "Special Features": "AI DD™, Steam, Allergy Care",
      "Warranty": "2 Years"
    }
  },
  {
    id: "7",
    title: "Sony Bravia 65\" 4K Ultra HD Smart LED TV",
    brand: "Sony",
    category: "tv",
    price: 89990,
    mrp: 109990,
    discountPct: 18,
    rating: 4.7,
    reviewsCount: 1345,
    image: "/sony tv.jpg",
    inStock: true,
    description: "Experience breathtaking 4K HDR picture quality with Sony's X1 4K HDR Processor. Smart TV with Android TV, Google Assistant built-in, and Chromecast built-in.",
    images: [
      "/sony tv.jpg",
      "/sony tv.jpg"
    ],
    features: [
      "65\" 4K HDR",
      "Processor X1",
      "TRILUMINOS Display",
      "Android TV with Google Assistant",
      "Dolby Vision & Atmos",
      "Netflix, Prime Video, Disney+ Hotstar"
    ],
    tags: ["TV", "4K", "Smart TV", "Android TV"],
    specs: {
      "Screen Size": "65 inch",
      "Display Type": "4K HDR LED",
      "Smart Features": "Android TV, Google Assistant, Chromecast",
      "Audio": "20W Output, Dolby Atmos",
      "Connectivity": "4 x HDMI, 3 x USB, WiFi, Bluetooth"
    }
  },
  {
    id: "8",
    title: "Voltas 1.5 Ton 3 Star Split Inverter AC",
    brand: "Voltas",
    category: "ac",
    price: 38990,
    mrp: 43990,
    discountPct: 11,
    rating: 4.0,
    reviewsCount: 923,
    image: "/voltas ac.jpg",
    inStock: true,
    capacity: "1.5 Ton",
    energyRating: "3 Star",
    description: "Voltas 3-star split inverter AC with superior cooling and energy efficiency. Features include 4-way swing, anti-dust filter, and stabilizer-free operation.",
    images: [
      "/voltas ac.jpg",
      "/voltas ac.jpg"
    ],
    features: [
      "1.5 Ton Capacity",
      "3 Star Energy Rating",
      "Inverter Compressor",
      "4-Way Swing",
      "Stabilizer Free Operation"
    ],
    tags: ["AC", "Split AC", "Inverter"],
    specs: {
      "Cooling Capacity": "1.5 Ton",
      "Energy Rating": "3 Star",
      "Special Features": "4-Way Swing, Anti-Dust Filter",
      "Refrigerant": "R32",
      "Warranty": "1 Year on Product, 10 Years on Compressor"
    }
  },
  {
    id: "9",
    title: "Godrej 190L 3 Star Direct Cool Single Door Refrigerator",
    brand: "Godrej",
    category: "refrigerator",
    price: 15990,
    mrp: 17990,
    discountPct: 11,
    rating: 4.1,
    reviewsCount: 654,
    image: "/godrej refrig.jpg",
    inStock: true,
    capacity: "190 L",
    description: "Godrej 190L direct cool single door refrigerator with smart connect technology. Features include toughened glass shelves and fruit & vegetable box with humidity control.",
    images: [
      "/godrej refrig.jpg",
      "/godrej refrig.jpg"
    ],
    features: [
      "190L Capacity",
      "Direct Cool",
      "3 Star Energy Rating",
      "Toughened Glass Shelves",
      "Fruit & Vegetable Box with Humidity Control"
    ],
    tags: ["Refrigerator", "Single Door", "Direct Cool"],
    specs: {
      "Capacity": "190 Liters",
      "Type": "Single Door",
      "Energy Rating": "3 Star",
      "Special Features": "Smart Connect, Toughened Glass Shelves",
      "Refrigerant": "R600a"
    }
  },
  {
    id: "10",
    title: "Bajaj 1200mm Premium Ceiling Fan",
    brand: "Bajaj",
    category: "fan",
    price: 2299,
    mrp: 2899,
    discountPct: 21,
    rating: 4.0,
    reviewsCount: 876,
    image: "/bajaj fan.jpg",
    inStock: true,
    capacity: "1200mm",
    description: "Bajaj 1200mm premium ceiling fan with high speed motor and superior air delivery. Features include rust-proof blades and 2-year warranty.",
    images: [
      "/bajaj fan.jpg",
      "/bajaj fan.jpg"
    ],
    features: [
      "1200mm Sweep",
      "High Speed Motor",
      "Rust-proof Blades",
      "Energy Efficient",
      "2 Year Warranty"
    ],
    tags: ["Fan", "Ceiling Fan"],
    specs: {
      "Sweep Size": "48-inch (1200mm)",
      "Speed": "380 RPM",
      "Air Delivery": "230 CMM",
      "Power Consumption": "75W",
      "Warranty": "2 Years"
    }
  },
  {
    id: "11",
    title: "IFB 6.5 Kg Fully Automatic Front Load Washing Machine",
    brand: "IFB",
    category: "washing-machine",
    price: 24990,
    mrp: 28990,
    discountPct: 14,
    rating: 4.4,
    reviewsCount: 1023,
    image: "/ifb washing.jpg",
    inStock: true,
    capacity: "6.5 kg",
    description: "IFB 6.5 kg fully automatic front load washing machine with Aqua Energie technology for hygiene washing. Features include steam wash and 9 wash programs.",
    images: [
      "/ifb washing.jpg",
      "/ifb washing.jpg"
    ],
    features: [
      "6.5 kg Capacity",
      "Front Load",
      "Aqua Energie Technology",
      "Steam Wash",
      "9 Wash Programs"
    ],
    tags: ["Washing Machine", "Front Load", "Fully Automatic"],
    specs: {
      "Capacity": "6.5 kg",
      "Type": "Front Load",
      "Energy Rating": "5 Star",
      "Special Features": "Aqua Energie, Steam Wash",
      "Warranty": "2 Years on Product, 4 Years on Motor"
    }
  },
  {
    id: "12",
    title: "Hitachi 2.0 Ton 5 Star Inverter Split AC",
    brand: "Hitachi",
    category: "ac",
    price: 52990,
    mrp: 58990,
    discountPct: 10,
    rating: 4.3,
    reviewsCount: 876,
    image: "/hitachi ac.jpg",
    inStock: true,
    capacity: "2.0 Ton",
    energyRating: "5 Star",
    description: "Hitachi 2.0 ton 5-star inverter split AC with PM 2.5 filter and eco mode. Features include 100% copper condenser and stabilizer free operation.",
    images: [
      "/hitachi ac.jpg",
      "/hitachi ac.jpg"
    ],
    features: [
      "2.0 Ton Capacity",
      "5 Star Energy Rating",
      "Inverter Compressor",
      "PM 2.5 Filter",
      "Eco Mode"
    ],
    tags: ["AC", "Split AC", "Inverter", "5 Star"],
    specs: {
      "Cooling Capacity": "2.0 Ton",
      "Energy Rating": "5 Star",
      "Special Features": "PM 2.5 Filter, Eco Mode",
      "Refrigerant": "R32",
      "Warranty": "1 Year on Product, 10 Years on Compressor"
    }
  }
];

export const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'TV', name: 'TVs' },
  { id: 'AC', name: 'Air Conditioners' },
  { id: 'Washing Machine', name: 'Washing Machines' },
  { id: 'Refrigerator', name: 'Refrigerators' },
  { id: 'Fan', name: 'Fans' }
];

export const brands = [
  { id: 'samsung', name: 'Samsung', logo: '/samsung logo.png', description: 'Cutting-edge electronics and home appliances.' },
  { id: 'lg', name: 'LG', logo: '/lg logo.jpg', description: "Life's good with LG's innovative home solutions." },
  { id: 'whirlpool', name: 'Whirlpool', logo: '/logo.png' },
  { id: 'godrej', name: 'Godrej', logo: '/godrej logo.jpg', description: 'Innovative and reliable home appliances for modern Indian households.' },
  { id: 'haier', name: 'Haier', logo: '/logo.png' },
  { id: 'hitachi', name: 'Hitachi', logo: '/logo.png' },
  { id: 'voltas', name: 'Voltas', logo: '/voltas logo.png', description: 'Trusted cooling solutions for every Indian home.' },
  { id: 'daikin', name: 'Daikin', logo: '/logo.png' },
  { id: 'blue-star', name: 'Blue Star', logo: '/blue star logo.png', description: 'Premium air conditioning and refrigeration solutions.' },
  { id: 'crompton', name: 'Crompton', logo: '/logo.png' },
  { id: 'havells', name: 'Havells', logo: '/harvells logo.png' },
  { id: 'bajaj', name: 'Bajaj', logo: '/logo.png' },
  { id: 'panasonic', name: 'Panasonic', logo: '/panasonic logo.jpg', description: 'Japanese technology for superior home appliances.' },
  { id: 'bosch', name: 'Bosch', logo: '/bosch logo.jpg', description: 'German engineering excellence in home appliances.' },
  { id: 'siemens', name: 'Siemens', logo: '/siemens logo.jpg', description: 'Premium German technology for modern homes.' },
  { id: 'liebherr', name: 'Liebherr', logo: '/liebherr logo.jpg', description: 'Swiss precision in refrigeration technology.' },
  { id: 'v-guard', name: 'V-Guard', logo: '/v guard logo.jpg', description: 'Trusted Indian brand for electrical appliances and stabilizers.' }
];

export const sortOptions = [
  { id: 'featured', label: 'Featured', value: 'featured' },
  { id: 'price-low', label: 'Price: Low to High', value: 'price-low' },
  { id: 'price-high', label: 'Price: High to Low', value: 'price-high' },
  { id: 'rating', label: 'Top Rated', value: 'rating' },
  { id: 'newest', label: 'Newest Arrivals', value: 'newest' }
];

export const priceRanges = [
  { id: 'under-10k', label: 'Under ₹10,000', value: [0, 9999] },
  { id: '10k-20k', label: '₹10,000 - ₹20,000', value: [10000, 19999] },
  { id: '20k-40k', label: '₹20,000 - ₹40,000', value: [20000, 39999] },
  { id: '40k-70k', label: '₹40,000 - ₹70,000', value: [40000, 69999] },
  { id: 'over-70k', label: 'Over ₹70,000', value: [70000, 1000000] }
];

export const ratings = [
  { id: '5', label: '5 Stars', value: 5 },
  { id: '4', label: '4 Stars & Up', value: 4 },
  { id: '3', label: '3 Stars & Up', value: 3 },
  { id: '2', label: '2 Stars & Up', value: 2 },
  { id: '1', label: '1 Star & Up', value: 1 }
];

export default products;
