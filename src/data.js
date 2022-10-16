import { faker } from "@faker-js/faker";

faker.seed(99);

const products = [
  {
    id: 1,
    name: "Apple AirPods",
    price: 2000,
    image:
      "https://m.media-amazon.com/images/I/7120GgUKj3L.__AC_SY445_SX342_QL70_FMwebp_.jpg",
    inStock: 5,
    fastDelivery: false,
  },
  {
    id: 2,
    name: "Kindle Paperwhite",
    price: 10000,
    image: "https://m.media-amazon.com/images/I/61P+vrvFZ9L._AC_SX679_.jpg",
    inStock: 7,
    fastDelivery: false,
  },
  {
    id: 3,
    name: "OnePlus Nord N20 5G",
    price: 15000,
    image: "https://m.media-amazon.com/images/I/71hIjJkMqFL._AC_SX679_.jpg",
    inStock: 3,
    fastDelivery: true,
  },
  {
    id: 4,
    name: "Casual Cotton Shirt",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/719sQ8uSEwL._AC_UY500_.jpg",
    inStock: 2,
    fastDelivery: true,
  },
  {
    id: 5,
    name: "Fall Jacket Shackets",
    price: 1100,
    image: "https://m.media-amazon.com/images/I/61DgheD+jJL._AC_UY500_.jpg",
    inStock: 0,
    fastDelivery: false,
  },
  {
    id: 6,
    name: "Star Wars Series",
    price: 1800,
    image: "https://m.media-amazon.com/images/I/61GcOnceBsL._AC_SX569_.jpg",
    inStock: 5,
    fastDelivery: false,
  },
  {
    id: 7,
    name: "Hypoallergenic Pillow",
    price: 400,
    image: "https://m.media-amazon.com/images/I/71iArV-kskL._AC_SX425_.jpg",
    inStock: 0,
    fastDelivery: true,
  },
  {
    id: 8,
    name: "Black Mug",
    price: 700,
    image: "https://m.media-amazon.com/images/I/51TyytXX+iL._AC_SX679_.jpg",
    inStock: 4,
    fastDelivery: true,
  },
  {
    id: 9,
    name: "Fitness Tracker",
    price: 5000,
    image: "https://m.media-amazon.com/images/I/51Pjv19Yt9L._AC_SX569_.jpg",
    inStock: 4,
    fastDelivery: false,
  },
  {
    id: 10,
    name: "Acer Laptop",
    price: 50000,
    image: "https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_SX425_.jpg",
    inStock: 4,
    fastDelivery: false,
  },
];

export default products;
