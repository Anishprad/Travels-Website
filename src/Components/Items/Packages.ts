import * as anyName from "../../Assets/Icons/Others";

// Case 1
type aType = [number, number, string, boolean]
const a: aType = [1, 2, "udip", false]

// Case 2
type bObjectType = { name: string }
type bType = bObjectType[]
const b: bType = [{ name: "udip" }, { name: "ram" }]


// Case 3
type PackageObjType = {
  id: number;
  name: string;
  image: string;
  location: string;
  main: string;
  duration: string;
  price: number;
  rating: string;
};

const Packages: PackageObjType[] = [
  {
    id: 1,
    name: "Patan",
    image: anyName.patan,
    location: "Patan Durbar Squarel-5D/4N",
    main: "Lakeside Pokhara",
    duration: "7D/6N",
    price: 500,
    rating: anyName.rating,
  },
  {
    id: 2,
    name: "Basantapur",
    image: anyName.basantapur,
    location: "Basantapur Durbar Squarel-5D/4N",
    main: "Lakeside Pokhara",
    duration: "7D/6N",
    price: 600,
    rating: anyName.rating,
  },
  {
    id: 3,
    name: "Basantapur",
    image: anyName.bhaktapur,
    location: "Bhaktapur Durbar Squarel-5D/4N",
    main: "Lakeside Pokhara",
    duration: "7D/6N",
    price: 650,
    rating: anyName.rating,
  },
  {
    id: 4,
    name: "Thailand",
    image: anyName.thailand,
    location: "Thailand",
    main: "Lakeside Pokhara",
    duration: "7D/6N",
    price: 800,
    rating: anyName.rating,
  },
  {
    id: 5,
    name: "Maldives",
    image: anyName.maldives,
    location: "Maldives",
    main: "Lakeside Pokhara",
    duration: "7D/6N",
    price: 900,
    rating: anyName.rating,
  },
  {
    id: 6,
    name: "Hongkong",
    image: anyName.hongkong,
    location: "Hongkong",
    main: "Lakeside Pokhara",
    duration: "7D/6N",
    price: 700,
    rating: anyName.rating,
  },
];
export default Packages;





