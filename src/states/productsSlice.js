import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 79.99,
    image: "https://picsum.photos/seed/1/400/300",
  },
  {
    id: "2",
    title: "Smartphone Nova M8",
    price: 349,
    image: "https://picsum.photos/seed/2/400/300",
  },
  {
    id: "3",
    title: "Men's Casual Jacket",
    price: 39.5,
    image: "https://picsum.photos/seed/3/400/300",
  },
  {
    id: "4",
    title: "UI Design Book",
    price: 14.99,
    image: "https://picsum.photos/seed/4/400/300",
  },
  {
    id: "5",
    title: "Gaming Mouse HyperClick",
    price: 59,
    image: "https://picsum.photos/seed/5/400/300",
  },
  {
    id: "6",
    title: "Running Shoes AeroRun",
    price: 89.99,
    image: "https://picsum.photos/seed/6/400/300",
  },
  {
    id: "7",
    title: "Smartwatch FitWatch V2",
    price: 129.99,
    image: "https://picsum.photos/seed/7/400/300",
  },
  {
    id: "8",
    title: "Women's Sleepwear SilkDream",
    price: 27,
    image: "https://picsum.photos/seed/8/400/300",
  },
  {
    id: "9",
    title: "Mini Fridge CompactCool",
    price: 399,
    image: "https://picsum.photos/seed/9/400/300",
  },
  {
    id: "10",
    title: "Leather Shoulder Bag",
    price: 59.5,
    image: "https://picsum.photos/seed/10/400/300",
  },
  {
    id: "11",
    title: "Bluetooth Speaker",
    price: 45,
    image: "https://picsum.photos/seed/11/400/300",
  },
  {
    id: "12",
    title: "Laptop Stand Adjustable",
    price: 29.99,
    image: "https://picsum.photos/seed/12/400/300",
  },
  {
    id: "13",
    title: "Desk Lamp LED",
    price: 22.5,
    image: "https://picsum.photos/seed/13/400/300",
  },
  {
    id: "14",
    title: "Gaming Keyboard RGB",
    price: 69.99,
    image: "https://picsum.photos/seed/14/400/300",
  },
  {
    id: "15",
    title: "Wireless Charger",
    price: 19.99,
    image: "https://picsum.photos/seed/15/400/300",
  },
  {
    id: "16",
    title: "Fitness Band Pro",
    price: 49.99,
    image: "https://picsum.photos/seed/16/400/300",
  },
  {
    id: "17",
    title: "Portable Power Bank",
    price: 25,
    image: "https://picsum.photos/seed/17/400/300",
  },
  {
    id: "18",
    title: "Noise Cancelling Earbuds",
    price: 89,
    image: "https://picsum.photos/seed/18/400/300",
  },
  {
    id: "19",
    title: "4K Monitor 27-inch",
    price: 299.99,
    image: "https://picsum.photos/seed/19/400/300",
  },
  {
    id: "20",
    title: "Backpack Travel Pro",
    price: 79,
    image: "https://picsum.photos/seed/20/400/300",
  },
];

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
});

export const selectAllProducts = s => s.products
export const selectProductById = (state, productId) => state.products.find(product => product.id === productId)

export default productsSlice.reducer;
