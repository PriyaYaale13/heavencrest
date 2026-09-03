export const roomsData = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    count: 6,
    shortDescription: "A clean, comfortable, and premium room designed for a relaxing stay.",
    longDescription: "The Deluxe Room is designed to provide everything you need for a restful stay. Ideal for solo travelers or couples, it combines modern amenities with a warm and inviting atmosphere.",
    occupancy: "",
    bedConfig: "King-size bed",
    image: "/assets/images/room1.jpg",
    amenities: [
      "King-size bed",
      "Air conditioning",
      "Wi-Fi",
      "45-inch Smart TV",
      "24/7 hot water",
      "Dental kit",
      "Refreshment sachets (tea, milk powder, and coffee)",
      "Non-smoking rooms"
    ],
    isNonSmoking: true,
    hasBalcony: false,
    extraBedAvailable: false
  },
  {
    id: "suite",
    name: "Suite Room",
    count: 3,
    shortDescription: "Spacious and comfortable stay with a large bedroom, living room, foyer, and a small kitchen unit.",
    longDescription: "Our Suite Room offers a significantly larger layout for those who need extra space. Featuring a distinct living area, foyer, and a small kitchen unit, it is perfect for extended stays or guests desiring a premium experience with the comforts of home.",
    occupancy: "Up to 4 guests + 1 extra bed",
    bedConfig: "King-size bed + Sofa-cum-bed",
    image: "/assets/images/hero-suite.png",
    amenities: [
      "King-size bed",
      "Sofa-cum-bed",
      "Extra bed facility available",
      "Occupancy: Up to 4 guests + add 1 extra bed only",
      "Air conditioning",
      "Wi-Fi",
      "45-inch Smart TV",
      "24/7 hot water",
      "Dental kit",
      "Refreshment sachets (tea, milk powder, and coffee)",
      "Balcony available",
      "Smoking permitted on the balcony"
    ],
    isNonSmoking: false,
    hasBalcony: true,
    extraBedAvailable: true
  },
  {
    id: "family",
    name: "Family Room",
    count: 1,
    shortDescription: "Perfect for families and groups, featuring two separate bedrooms for privacy and comfort.",
    longDescription: "Designed specifically with families and groups in mind, this room provides the ultimate convenience of two separate bedrooms, allowing for both togetherness and privacy. Enjoy ample space and comfortable bedding for everyone.",
    occupancy: "Up to 4 guests + 1 extra bed",
    bedConfig: "Two separate bedrooms",
    image: "/assets/images/roomwithsmallfridge.jpg",
    amenities: [
      "Two separate bedrooms",
      "Occupancy: Up to 4 guests + 1 extra bed",
      "Extra bed facility available",
      "Non-smoking room"
    ],
    isNonSmoking: true,
    hasBalcony: false,
    extraBedAvailable: true
  }
];
