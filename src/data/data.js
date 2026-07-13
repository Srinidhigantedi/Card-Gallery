const products = [
  // ===== TRAVEL (5) =====
{
  id: 1,
  title: "New York City",
  category: "Travel",
  description: "City full of lights and dreams.",
  image: "https://www.karnatakatravel.com/wp-content/uploads/2018/09/destination-new-york-01-1280x854.jpg",
  country: "USA",
  rating: 4.9,
  duration: "5 Days",
  bestTime: "April -June",
  highlights: [
    "Famous Tourist Destination",
    "Amazing Skyline",
    "Great Nightlife"
  ]
},
{
  id: 2,
  title: "Paris",
  category: "Travel",
  description: "Romantic city of lights.",
  image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  country: "France",
  rating: 4.8,
  duration: "4 Days",
  bestTime: "April -June",
  highlights: [
    "Eiffel Tower",
    "Romantic Atmosphere",
    "World-Class Cafés"
  ]
},
{
  id: 3,
  title: "Maldives",
  category: "Travel",
  description: "Crystal clear beaches.",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  country: "Maldives",
  rating: 5.0,
  duration: "6 Days",
  bestTime: "November - April",
  highlights: [
    "Luxury Water Villas",
    "Crystal Clear Beaches",
    "Scuba Diving"
  ]
},
{
  id: 4,
  title: "Tokyo",
  category: "Travel",
  description: "Modern city with tradition.",
  image: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80",
  country: "Japan",
  rating: 4.9,
  duration: "5 Days",
  bestTime: "March - May",
  highlights: [
    "Cherry Blossoms",
    "Modern Technology",
    "Rich Cultural Heritage"
  ]
},
{
  id: 5,
  title: "Mountains",
  category: "Travel",
  description: "Peaceful nature escape.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_qIJfNs7Y53fNKimt07uZ5AzJwIUqzHOPiHAUYLbxw&s=10",
  country: "Switzerland",
  rating: 4.7,
  duration: "3 Days",
  bestTime: "May - September",
  highlights: [
    "Breathtaking Views",
    "Hiking Adventures",
    "Fresh Mountain Air"
  ]
},

// ===== ANIMALS (5) =====
{
  id: 6,
  title: "Dogs",
  category: "Animals",
  description: "Loyal friends forever.",
  image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
  scientificName: "Canis lupus familiaris",
  habitat: "Worldwide",
  lifespan: "10 - 15 Years",
  diet: "Omnivore",
  rating: 4.9,
  highlights: [
    "Highly Intelligent",
    "Loyal Companion",
    "Excellent Sense of Smell"
  ]
},
{
  id: 7,
  title: "Cats",
  category: "Animals",
  description: "Cute and curious.",
  image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  scientificName: "Felis catus",
  habitat: "Domestic Homes",
  lifespan: "12 - 18 Years",
  diet: "Carnivore",
  rating: 4.8,
  highlights: [
    "Independent Nature",
    "Excellent Night Vision",
    "Agile and Playful"
  ]
},
{
  id: 8,
  title: "Lion",
  category: "Animals",
  description: "King of the jungle.",
  image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
  scientificName: "Panthera leo",
  habitat: "Grasslands & Savannah",
  lifespan: "10 - 14 Years",
  diet: "Carnivore",
  rating: 5.0,
  highlights: [
    "Powerful Predator",
    "Lives in Prides",
    "Symbol of Strength"
  ]
},
{
  id: 9,
  title: "Elephant",
  category: "Animals",
  description: "Gentle giant.",
  image: "https://elephantconservation.org/wp-content/uploads/2022/05/AboutElephant-Savanna.jpg",
  scientificName: "Loxodonta africana",
  habitat: "Forests & Savannah",
  lifespan: "60 - 70 Years",
  diet: "Herbivore",
  rating: 4.9,
  highlights: [
    "Largest Land Mammal",
    "Excellent Memory",
    "Highly Social Animal"
  ]
},
{
  id: 10,
  title: "Camel",
  category: "Animals",
  description: "A camel is best described as an ungulate (an even-toed hoofed mammal), but functionally, it is often called a survivor because of its remarkable adaptations to harsh desert environments.",
  image: "https://rajras.in/wp-content/uploads/2016/12/Rajasthan-Camel.jpg",
  scientificName: "Camelus dromedarius",
  habitat: "Hot Deserts",
  lifespan: "40 - 50 Years",
  diet: "Herbivore",
  rating: 4.7,
  highlights: [
    "Stores Fat in Humps",
    "Can Survive Without Water for Days",
    "Ideal Desert Transport"
  ]
},

// ===== TECHNOLOGY (5) =====
{
  id: 11,
  title: "Laptop",
  category: "Technology",
  description: "Work and creativity.",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  brand: "Apple",
  processor: "Apple M3 Chip",
  storage: "512 GB SSD",
  rating: 4.9,
  highlights: [
    "Powerful Performance",
    "Lightweight & Portable",
    "Long Battery Life"
  ]
},
{
  id: 12,
  title: "Smartphone",
  category: "Technology",
  description: "Stay connected.",
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  brand: "Samsung",
  processor: "Snapdragon 8 Gen 3",
  storage: "256 GB",
  rating: 4.8,
  highlights: [
    "High Resolution Camera",
    "Fast 5G Connectivity",
    "AMOLED Display"
  ]
},
{
  id: 13,
  title: "AI Robot",
  category: "Technology",
  description: "Future innovation.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxg3_rlhJZM1qFGUIYHY-wj2Q9-QXx-YhYQHQJNqBM0LzgNr8Uw5xvqA8&s=10",
  brand: "OpenAI Robotics",
  processor: "AI Neural Processor",
  storage: "Cloud Integrated",
  rating: 5.0,
  highlights: [
    "Artificial Intelligence",
    "Voice Recognition",
    "Autonomous Decision Making"
  ]
},
{
  id: 14,
  title: "Coding Setup",
  category: "Technology",
  description: "Developer workspace.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  brand: "Custom Build",
  processor: "Intel Core i9",
  storage: "1 TB SSD",
  rating: 4.9,
  highlights: [
    "Dual Monitor Setup",
    "RGB Mechanical Keyboard",
    "Professional Workspace"
  ]
},
{
  id: 15,
  title: "Cloud Server",
  category: "Technology",
  description: "Power of cloud.",
  image: "https://www.accuwebhosting.com/blog/wp-content/uploads/2021/07/Cloud-VPS-scaled.jpg",
  brand: "AWS",
  processor: "Multi-Core Xeon",
  storage: "Unlimited Cloud Storage",
  rating: 4.8,
  highlights: [
    "Highly Scalable",
    "Secure Infrastructure",
    "99.99% Uptime"
  ]
},
// ===== BIRDS (5) =====
{
  id: 16,
  title: "Parrot",
  category: "Birds",
  description: "Colorful talking bird.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcMtzkGy-TNtdZcFwXXSNfrAzQTP-I8y2D9s8MIuhPRwZU4ds5-2N7mU&s=10",
  habitat: "Tropical Forests",
  lifespan: "20 - 50 Years",
  wingspan: "40 cm",
  rating: 4.8,
  highlights: [
    "Can Mimic Human Speech",
    "Bright Colorful Feathers",
    "Highly Intelligent"
  ]
},
{
  id: 17,
  title: "Eagle",
  category: "Birds",
  description: "Powerful sky hunter.",
  image: "https://t3.ftcdn.net/jpg/14/81/89/08/360_F_1481890885_C5hFEIfgmqopWbg9ucTsjVqjIL6au7Nf.jpg",
  habitat: "Mountains & Forests",
  lifespan: "20 - 30 Years",
  wingspan: "2.3 m",
  rating: 5.0,
  highlights: [
    "Excellent Eyesight",
    "Powerful Hunter",
    "National Bird of Many Countries"
  ]
},
{
  id: 18,
  title: "Peacock",
  category: "Birds",
  description: "Beautiful feathers display.",
  image: "https://wallup.net/wp-content/uploads/2018/10/07/363856-peacock-bird-colorful-56-748x468.jpg",
  habitat: "Forests & Grasslands",
  lifespan: "15 - 20 Years",
  wingspan: "1.5 m",
  rating: 4.9,
  highlights: [
    "National Bird of India",
    "Magnificent Tail Feathers",
    "Graceful Courtship Dance"
  ]
},
{
  id: 19,
  title: "Rooster",
  category: "Birds",
  description: "A rooster is an adult male chicken known for its distinctive loud crowing, colorful, ornate plumage, and sharp leg spurs. While not required for hens to lay eggs, a rooster is essential if you want to fertilize eggs and hatch chicks.",
  image: "https://png.pngtree.com/thumb_back/fh260/background/20240426/pngtree-a-domestic-fowl-rooster-and-chicken-image_15672277.jpg",
  habitat: "Farms & Villages",
  lifespan: "5 - 8 Years",
  wingspan: "75 cm",
  rating: 4.5,
  highlights: [
    "Early Morning Crowing",
    "Protective Nature",
    "Colorful Plumage"
  ]
},
{
  id: 20,
  title: "Flamingo",
  category: "Birds",
  description: "Elegant pink beauty.",
  image: "https://t3.ftcdn.net/jpg/01/99/13/46/360_F_199134657_SdvpCwTJa9z4EXN7xH8izN3UxNSZQNMj.jpg",
  habitat: "Wetlands & Lakes",
  lifespan: "20 - 30 Years",
  wingspan: "1.5 m",
  rating: 4.9,
  highlights: [
    "Beautiful Pink Feathers",
    "Long Elegant Legs",
    "Lives in Large Colonies"
  ]
},
];

export default products;