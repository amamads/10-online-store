import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 79.99,
    image: "https://picsum.photos/seed/1/400/300",
    details:
      "High-quality wireless headphones with noise isolation, long battery life, and soft ear cushions for all-day comfort.",
  },
  {
    id: "2",
    title: "Smartphone Nova M8",
    price: 349,
    image: "https://picsum.photos/seed/2/400/300",
    details:
      "The Nova M8 features a 6.5-inch AMOLED display, 128GB storage, and a 48MP triple camera for stunning photography.",
  },
  {
    id: "3",
    title: "Men's Casual Jacket",
    price: 39.5,
    image: "https://picsum.photos/seed/3/400/300",
    details:
      "A lightweight casual jacket made from premium cotton blend — perfect for everyday wear in any season.",
  },
  {
    id: "4",
    title: "UI Design Book",
    price: 14.99,
    image: "https://picsum.photos/seed/4/400/300",
    details:
      "A comprehensive guide to user interface design principles, color theory, and typography for modern web applications.",
  },
  {
    id: "5",
    title: "Gaming Mouse HyperClick",
    price: 59,
    image: "https://picsum.photos/seed/5/400/300",
    details:
      "Ergonomic gaming mouse with 8 programmable buttons, RGB lighting, and ultra-fast response rate.",
  },
  {
    id: "6",
    title: "Running Shoes AeroRun",
    price: 89.99,
    image: "https://picsum.photos/seed/6/400/300",
    details:
      "Lightweight running shoes with breathable mesh, cushioned sole, and superior grip for all surfaces.",
  },
  {
    id: "7",
    title: "Smartwatch FitWatch V2",
    price: 129.99,
    image: "https://picsum.photos/seed/7/400/300",
    details:
      "Smartwatch with fitness tracking, heart rate monitor, sleep analysis, and 7-day battery life.",
  },
  {
    id: "8",
    title: "Women's Sleepwear SilkDream",
    price: 27,
    image: "https://picsum.photos/seed/8/400/300",
    details:
      "Elegant silk sleepwear set designed for comfort and style — soft, breathable, and skin-friendly fabric.",
  },
  {
    id: "9",
    title: "Mini Fridge CompactCool",
    price: 399,
    image: "https://picsum.photos/seed/9/400/300",
    details:
      "Compact refrigerator with energy-efficient cooling, adjustable shelves, and quiet operation — ideal for bedrooms or offices.",
  },
  {
    id: "10",
    title: "Leather Shoulder Bag",
    price: 59.5,
    image: "https://picsum.photos/seed/10/400/300",
    details:
      "Genuine leather shoulder bag with adjustable strap, multiple compartments, and magnetic closure.",
  },
  {
    id: "11",
    title: "Bluetooth Speaker",
    price: 45,
    image: "https://picsum.photos/seed/11/400/300",
    details:
      "Portable Bluetooth speaker with deep bass, water-resistant design, and up to 12 hours of playtime.",
  },
  {
    id: "12",
    title: "Laptop Stand Adjustable",
    price: 29.99,
    image: "https://picsum.photos/seed/12/400/300",
    details:
      "Adjustable aluminum laptop stand for better posture and airflow — compatible with all laptop sizes.",
  },
  {
    id: "13",
    title: "Desk Lamp LED",
    price: 22.5,
    image: "https://picsum.photos/seed/13/400/300",
    details:
      "Energy-efficient LED desk lamp with 3 brightness levels and touch control, perfect for reading or studying.",
  },
  {
    id: "14",
    title: "Gaming Keyboard RGB",
    price: 69.99,
    image: "https://picsum.photos/seed/14/400/300",
    details:
      "Mechanical RGB gaming keyboard with customizable lighting, anti-ghosting keys, and durable switches.",
  },
  {
    id: "15",
    title: "Wireless Charger",
    price: 19.99,
    image: "https://picsum.photos/seed/15/400/300",
    details:
      "Fast wireless charging pad compatible with iPhone, Samsung, and other Qi-enabled devices.",
  },
  {
    id: "16",
    title: "Fitness Band Pro",
    price: 49.99,
    image: "https://picsum.photos/seed/16/400/300",
    details:
      "Track your workouts, sleep, and heart rate with this sleek fitness band featuring a waterproof design.",
  },
  {
    id: "17",
    title: "Portable Power Bank",
    price: 25,
    image: "https://picsum.photos/seed/17/400/300",
    details:
      "10,000mAh power bank with fast charging and dual USB output — slim, lightweight, and ideal for travel.",
  },
  {
    id: "18",
    title: "Noise Cancelling Earbuds",
    price: 89,
    image: "https://picsum.photos/seed/18/400/300",
    details:
      "Wireless earbuds with active noise cancellation, crystal-clear audio, and 20-hour battery life with case.",
  },
  {
    id: "19",
    title: "4K Monitor 27-inch",
    price: 299.99,
    image: "https://picsum.photos/seed/19/400/300",
    details:
      "Ultra HD 27-inch 4K monitor with vibrant colors, thin bezels, and ergonomic stand — ideal for designers and gamers.",
  },
  {
    id: "20",
    title: "Backpack Travel Pro",
    price: 79,
    image: "https://picsum.photos/seed/20/400/300",
    details:
      "Durable travel backpack with waterproof fabric, padded laptop compartment, and multiple storage pockets.",
  },
];
;

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    addProduct(state, action) {
      state = state.push({ ...action.payload, id: nanoid() })
    }
  }
});

export const selectAllProducts = s => s.products
export const selectProductById = (state, productId) => state.products.find(product => product.id === productId)

export const { addProduct } = productsSlice.actions

export default productsSlice.reducer;
