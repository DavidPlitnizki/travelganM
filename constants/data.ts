import icons from "./icons";
import images from "./images";
import parks from "./parks";

export const cards = [
  {
    title: "Card 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    category: "house",
    image: images.newYork,
  },
  {
    title: "Card 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    category: "house",
    image: images.japan,
  },
  {
    title: "Card 3",
    location: "Location 3",
    price: "$300",
    rating: 2,
    category: "flat",
    image: images.newYork,
  },
  {
    title: "Card 4",
    location: "Location 4",
    price: "$400",
    rating: 5,
    category: "villa",
    image: images.japan,
  },
];

export const featuredCards = [
  {
    title: "Featured 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    image: images.newYork,
    category: "house",
  },
  {
    title: "Featured 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    image: images.japan,
    category: "flat",
  },
];

export const categories = [
  { title: "All", category: "All" },
  { title: "Houses", category: "House" },
  { title: "Condos", category: "Condos" },
  { title: "Duplexes", category: "Duplexes" },
  { title: "Studios", category: "Studios" },
  { title: "Villas", category: "Villa" },
  { title: "Apartments", category: "Apartments" },
  { title: "Townhomes", category: "Townhomes" },
  { title: "Others", category: "Others" },
];

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];

//own
export const MOCK_LIST = [
  {
    id: "1",
    title: "Eco Park",
    description:
      "An eco park is a sustainable green space designed to conserve the environment while offering recreational activities like nature walks, cycling, and wildlife observation. It promotes eco-friendly practices and fosters awareness about preserving natural ecosystems.",
    src: parks.ecopark,
  },
  {
    id: "2",
    title: "Forest Park",
    description:
      "A forest park is a natural area dominated by trees, offering a peaceful setting for outdoor activities like hiking, picnicking, and wildlife observation. It serves as a haven for nature lovers and promotes the conservation of forest ecosystems.",
    src: parks.forestpark,
  },
  {
    id: "3",
    title: "Paris, France",
    description:
      "Situated near the Eiffel Tower, this playground features play structures suitable for young children and a historic hand-cranked carousel, offering a charming experience in the heart of Paris.",
    src: parks.franceplayground,
  },
  {
    id: "4",
    title: "London Highgate Wood",
    description:
      "Found in Queen Elizabeth Olympic Park, it offers sand and water play areas, rock pools, and treehouses, encouraging adventurous play.",
    src: parks.londonplayground,
  },
  {
    id: "5",
    title: "Ninja Park",
    description:
      "A Ninja Park is an adventure playground featuring obstacle courses like climbing walls, rope swings, and balance beams, designed to test agility and strength. It provides a fun and active environment for kids and adults, promoting physical fitness and coordination.",
    src: parks.ninjapark,
  },
  {
    id: "6",
    title: "Yaga Park",
    description:
      "A Yaga Park typically refers to a themed adventure park inspired by folklore, nature, or imaginative storytelling. These parks may feature whimsical play areas, forest trails, and creative activities designed to engage visitors in a unique and enchanting outdoor experience.",
    src: parks.yaga,
  },
];
