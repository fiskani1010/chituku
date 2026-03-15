import chefTable from "../assets/chef-table.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import meal1 from "../assets/meal1.jpeg";
import meal10 from "../assets/meal10.jpeg";
import meal2 from "../assets/meal2.jpeg";
import meal3 from "../assets/meal3.jpeg";
import meal4 from "../assets/meal4.jpeg";
import meal5 from "../assets/meal5.jpeg";
import meal6 from "../assets/meal6.jpeg";
import meal8 from "../assets/meal8.jpeg";
import special1 from "../assets/special1.png";
import special2 from "../assets/special2.png";

export const foodItems = [
  {
    id: "golden-crunch",
    title: "Golden Crunch",
    category: "Signature Plates",
    price: "MKW 8,500",
    description: "Crisp texture, rich flavour, and a practical plate built for a full meal.",
    image: special1,
  },
  {
    id: "signature-plate",
    title: "Signature Plate",
    category: "Signature Plates",
    price: "MKW 12,000",
    description: "A colourful cafe favourite with satisfying portions and warm house flavour.",
    image: hero2,
  },
  {
    id: "street-favourite",
    title: "Street Favourite",
    category: "Signature Plates",
    price: "MKW 9,500",
    description: "Bold flavour, relaxed cafe energy, and the kind of meal people return for.",
    image: special2,
  },
  {
    id: "grill-delight",
    title: "Grill Delight",
    category: "Lunch Plates",
    price: "MKW 11,000",
    description: "Fresh sides, grilled richness, and the right balance for lunch or dinner.",
    image: hero1,
  },
  {
    id: "cafe-comfort",
    title: "Cafe Comfort",
    category: "Lunch Plates",
    price: "MKW 10,500",
    description: "A hearty, practical meal for long days, shared tables, and easy conversation.",
    image: hero3,
  },
  {
    id: "school-lunch-box",
    title: "School Lunch Box",
    category: "Lunch Plates",
    price: "MKW 7,500",
    description: "Balanced portions made for quick school lunch breaks without sacrificing flavour.",
    image: meal1,
  },
  {
    id: "house-fry-plate",
    title: "House Fry Plate",
    category: "Chef Specials",
    price: "MKW 8,800",
    description: "Golden fries, crisp edges, and a warm plate with cafe-style comfort.",
    image: meal2,
  },
  {
    id: "table-share-special",
    title: "Table Share Special",
    category: "Chef Specials",
    price: "MKW 13,000",
    description: "Generous portions designed for sharing with family or friends around the table.",
    image: meal3,
  },
  {
    id: "classic-bowl",
    title: "Classic Bowl",
    category: "Chef Specials",
    price: "MKW 8,200",
    description: "Simple, filling, and built around dependable flavour for everyday visits.",
    image: meal4,
  },
  {
    id: "daily-kitchen-pick",
    title: "Daily Kitchen Pick",
    category: "Family Meals",
    price: "MKW 9,800",
    description: "An easy family choice with fresh sides and satisfying home-style taste.",
    image: meal5,
  },
  {
    id: "weekend-plate",
    title: "Weekend Plate",
    category: "Family Meals",
    price: "MKW 12,500",
    description: "A fuller serving for weekend visits, family catch-ups, and slow meals.",
    image: meal6,
  },
  {
    id: "student-favourite",
    title: "Student Favourite",
    category: "Family Meals",
    price: "MKW 6,900",
    description: "Quick, filling, and practical for students who need something dependable fast.",
    image: meal8,
  },
  {
    id: "deluxe-house-platter",
    title: "Deluxe House Platter",
    category: "Cafe Picks",
    price: "MKW 14,500",
    description: "A fuller platter that captures the cafe's warm atmosphere and generous servings.",
    image: meal10,
  },
  {
    id: "chef-table-special",
    title: "Chef Table Special",
    category: "Cafe Picks",
    price: "MKW 15,000",
    description: "A showcase plate with layered flavour, colour, and a more elevated finish.",
    image: chefTable,
  },
];

export const menuSections = [
  {
    title: "Signature Plates",
    description: "Best-known house meals with the strongest Chituku flavour identity.",
    items: foodItems.filter((item) => item.category === "Signature Plates"),
  },
  {
    title: "Lunch Plates",
    description: "Reliable midday meals for workers, students, and quick cafe stops.",
    items: foodItems.filter((item) => item.category === "Lunch Plates"),
  },
  {
    title: "Chef Specials",
    description: "Plates that feel a little richer, more layered, and worth lingering over.",
    items: foodItems.filter((item) => item.category === "Chef Specials"),
  },
  {
    title: "Family Meals",
    description: "Practical choices built for sharing tables, children, and fuller portions.",
    items: foodItems.filter((item) => item.category === "Family Meals"),
  },
  {
    title: "Cafe Picks",
    description: "Distinctive plates that pull together presentation, flavour, and atmosphere.",
    items: foodItems.filter((item) => item.category === "Cafe Picks"),
  },
];
