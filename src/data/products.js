export const products = [
  // =========================
  // EXISTING PRODUCTS
  // =========================

  {
    id: 'P001',
    name: 'Fresh Banana',
    categoryId: 'C001',
    category: 'Fruits & Vegetables',
    price: 45,
    mrp: 55,
    discount: 18,
    quantity: '1 kg',
    rating: 4.5,
    reviews: 120,
    image:
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e',
    inStock: true,
    description: 'Fresh and naturally ripened bananas.',
  },

  {
    id: 'P002',
    name: 'Fresh Milk',
    categoryId: 'C002',
    category: 'Dairy & Bread',
    price: 32,
    mrp: 35,
    discount: 9,
    quantity: '500 ml',
    rating: 4.7,
    reviews: 250,
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150',
    inStock: true,
    description: 'Fresh dairy milk for everyday use.',
  },

  {
    id: 'P003',
    name: 'Fresh Potato',
    categoryId: 'C001',
    category: 'Fruits & Vegetables',
    price: 40,
    mrp: 50,
    discount: 20,
    quantity: '1 kg',
    rating: 4.3,
    reviews: 95,
    image:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
    inStock: true,
    description: 'Fresh farm potatoes.',
  },

  {
    id: 'P004',
    name: 'Coca Cola',
    categoryId: 'C003',
    category: 'Beverages',
    price: 40,
    mrp: 45,
    discount: 11,
    quantity: '750 ml',
    rating: 4.4,
    reviews: 180,
    image:
      'https://images.unsplash.com/photo-1629203849820-fdd70d49c38e',
    inStock: true,
    description: 'Refreshing carbonated soft drink.',
  },

  {
    id: 'P005',
    name: 'Lays Classic',
    categoryId: 'C004',
    category: 'Snacks',
    price: 20,
    mrp: 20,
    discount: 0,
    quantity: '50 g',
    rating: 4.6,
    reviews: 320,
    image:
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b',
    inStock: true,
    description: 'Classic salted potato chips.',
  },

  // =========================
  // ELECTRONICS - 2
  // =========================

  {
    id: 'P006',
    name: 'Wireless Bluetooth Earbuds',
    categoryId: 'C005',
    category: 'Electronics',
    price: 899,
    mrp: 1499,
    discount: 40,
    quantity: '1 pair',
    rating: 4.5,
    reviews: 420,
    image:
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1',
    inStock: true,
    description:
      'Compact wireless earbuds with clear sound and long battery life.',
  },

  {
    id: 'P007',
    name: 'Fast Charging Power Bank',
    categoryId: 'C005',
    category: 'Electronics',
    price: 1199,
    mrp: 1799,
    discount: 33,
    quantity: '10000 mAh',
    rating: 4.4,
    reviews: 285,
    image:
      'https://images.unsplash.com/photo-1609592424830-7c7d8e6e7f75',
    inStock: true,
    description:
      'Portable 10000 mAh power bank with fast charging support.',
  },

  // =========================
  // BEAUTY - 2
  // =========================

  {
    id: 'P008',
    name: 'Vitamin C Face Serum',
    categoryId: 'C006',
    category: 'Beauty',
    price: 399,
    mrp: 599,
    discount: 33,
    quantity: '30 ml',
    rating: 4.6,
    reviews: 315,
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
    inStock: true,
    description:
      'Lightweight vitamin C serum for brighter and healthier-looking skin.',
  },

  {
    id: 'P009',
    name: 'Moisturizing Face Cream',
    categoryId: 'C006',
    category: 'Beauty',
    price: 299,
    mrp: 449,
    discount: 33,
    quantity: '50 g',
    rating: 4.5,
    reviews: 260,
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8',
    inStock: true,
    description:
      'Daily moisturizing cream suitable for everyday skincare.',
  },

  // =========================
  // GIFTING - 3
  // =========================

  {
    id: 'P010',
    name: 'Premium Gift Box',
    categoryId: 'C007',
    category: 'Gifting',
    price: 499,
    mrp: 699,
    discount: 29,
    quantity: '1 box',
    rating: 4.7,
    reviews: 185,
    image:
      'https://images.unsplash.com/photo-1512909006721-3d6018887383',
    inStock: true,
    description:
      'Beautiful premium gift box suitable for birthdays and celebrations.',
  },

  {
    id: 'P011',
    name: 'Chocolate Gift Hamper',
    categoryId: 'C007',
    category: 'Gifting',
    price: 649,
    mrp: 899,
    discount: 28,
    quantity: '1 hamper',
    rating: 4.8,
    reviews: 340,
    image:
      'https://images.unsplash.com/photo-1548907040-4d42bfc8f6f4',
    inStock: true,
    description:
      'Delicious chocolate hamper perfect for gifting.',
  },

  {
    id: 'P012',
    name: 'Greeting Card Set',
    categoryId: 'C007',
    category: 'Gifting',
    price: 199,
    mrp: 299,
    discount: 33,
    quantity: '5 cards',
    rating: 4.4,
    reviews: 145,
    image:
      'https://images.unsplash.com/photo-1513883049090-d0b7439799bf',
    inStock: true,
    description:
      'Elegant greeting cards for birthdays, anniversaries and special occasions.',
  },

  // =========================
  // DECOR - 1
  // =========================

  {
    id: 'P013',
    name: 'Decorative Table Lamp',
    categoryId: 'C008',
    category: 'Decor',
    price: 799,
    mrp: 1199,
    discount: 33,
    quantity: '1 piece',
    rating: 4.6,
    reviews: 210,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    inStock: true,
    description:
      'Stylish decorative table lamp for bedrooms and living spaces.',
  },

  // =========================
  // KIDS - 5
  // =========================

  {
    id: 'P014',
    name: 'Building Blocks Set',
    categoryId: 'C009',
    category: 'Kids',
    price: 599,
    mrp: 899,
    discount: 33,
    quantity: '100 pieces',
    rating: 4.7,
    reviews: 390,
    image:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b',
    inStock: true,
    description:
      'Colorful building blocks that encourage creativity and learning.',
  },

  {
    id: 'P015',
    name: 'Cute Teddy Bear',
    categoryId: 'C009',
    category: 'Kids',
    price: 449,
    mrp: 699,
    discount: 36,
    quantity: '1 piece',
    rating: 4.8,
    reviews: 275,
    image:
      'https://images.unsplash.com/photo-1559454403-b8fb88521f11',
    inStock: true,
    description:
      'Soft and cuddly teddy bear for kids.',
  },

  {
    id: 'P016',
    name: 'Kids Drawing Kit',
    categoryId: 'C009',
    category: 'Kids',
    price: 349,
    mrp: 499,
    discount: 30,
    quantity: '1 kit',
    rating: 4.6,
    reviews: 230,
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30',
    inStock: true,
    description:
      'Creative drawing and coloring kit for children.',
  },

  {
    id: 'P017',
    name: 'Remote Control Car',
    categoryId: 'C009',
    category: 'Kids',
    price: 899,
    mrp: 1299,
    discount: 31,
    quantity: '1 piece',
    rating: 4.5,
    reviews: 315,
    image:
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f',
    inStock: true,
    description:
      'Fun remote control car for exciting indoor and outdoor play.',
  },

  {
    id: 'P018',
    name: 'Kids Puzzle Game',
    categoryId: 'C009',
    category: 'Kids',
    price: 299,
    mrp: 449,
    discount: 33,
    quantity: '1 puzzle',
    rating: 4.4,
    reviews: 180,
    image:
      'https://images.unsplash.com/photo-1606503153255-59d8b8b82185',
    inStock: true,
    description:
      'Fun educational puzzle game that improves problem-solving skills.',
  },
];