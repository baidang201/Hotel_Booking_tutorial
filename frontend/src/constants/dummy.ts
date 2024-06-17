export const Rooms = [
  {
    id: 0,
    category: "Presidential",
    pricePerNight: 500,
    isAvailable: true,
    reviews: [
      { guest: "0xAbc123...", rating: 5, comment: "Amazing experience!" },
      { guest: "0xDef456...", rating: 4, comment: "Very luxurious!" },
    ],
  },
  {
    id: 1,
    category: "Deluxe",
    pricePerNight: 300,
    isAvailable: false,
    reviews: [
      { guest: "0xGhi789...", rating: 4, comment: "Great value for money." },
      { guest: "0xJkl012...", rating: 3, comment: "Comfortable stay." },
    ],
  },
  {
    id: 2,
    category: "Suite",
    pricePerNight: 400,
    isAvailable: true,
    reviews: [
      { guest: "0xMno345...", rating: 5, comment: "Exceptional service!" },
    ],
  },
  {
    id: 3,
    category: "Presidential",
    pricePerNight: 550,
    isAvailable: false,
    reviews: [
      { guest: "0xPqr678...", rating: 5, comment: "Unforgettable stay!" },
    ],
  },
  {
    id: 4,
    category: "Deluxe",
    pricePerNight: 320,
    isAvailable: true,
    reviews: [
      { guest: "0xStu901...", rating: 4, comment: "Very comfortable." },
    ],
  },
  {
    id: 5,
    category: "Suite",
    pricePerNight: 450,
    isAvailable: true,
    reviews: [
      { guest: "0xVwx234...", rating: 5, comment: "Highly recommended!" },
      { guest: "0xYza567...", rating: 5, comment: "Absolutely wonderful!" },
    ],
  },
];

export const roomImages = {
  Presidential: "/images/presidential.jpg",
  Deluxe: "/images/deluxe.jpg",
  Suite: "/images/suite.jpg",
};
