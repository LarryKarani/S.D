import { productImgs } from "contains/fakeData";
import productVariantImg2 from "images/products/v2.jpg";
import productVariantImg3 from "images/products/v3.jpg";
import productVariantImg4 from "images/products/v4.jpg";
import productVariantImg5 from "images/products/v5.jpg";
import productVariantImg6 from "images/products/v6.jpg";
//
import productSport1 from "images/products/sport-1.png";
import productSport2 from "images/products/sport-2.png";
import productSport3 from "images/products/sport-3.png";
import productSport4 from "images/products/sport-4.png";
import productSport5 from "images/products/sport-5.png";
import productSport6 from "images/products/sport-6.png";
import productSport7 from "images/products/sport-7.png";
import productSport8 from "images/products/sport-8.png";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: string;
  color?: string;
  featuredImage: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number
  image: string;
  description: string;
  category: string;
  tags: string[];
  link: "/product-detail/";
  variants?: ProductVariant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  prodictimg?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
}

const DEMO_VARIANTS: ProductVariant[] = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Rey Nylon Backpack",
    quantity:1,
    description: "Brown cockroach wings",
    price: 74,
    image: productImgs[0],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
  },
  {
    id: 2,
    quantity:1,
    name: 'Round Buckle 1" Belt',
    description: "Classic green",
    price: 68,
    image: productImgs[0],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
  },
  {
    id: 3,
    name: "Waffle Knit Beanie",
    description: "New blue aqua",
    quantity:1,
    price: 132,
    image: productImgs[0],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 4,
    name: "Travel Pet Carrier",
    description: "Dark pink 2023",
    quantity:1,
    price: 28,
    image:productImgs[0],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
  },
  {
    id: 5,
    name: "Leather Gloves",
    description: "Perfect mint green",
    quantity:1,
    price: 42,
    image: productImgs[0],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
  },
  {
    id: 6,
    name: "Hoodie Sweatshirt",
    description: "New design 2023",
    quantity:1,
    price: 30,
    image: productImgs[0],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
  },
  {
    id: 7,
    name: "Wool Cashmere Jacket",
    quantity:1,
    description: "Matte black",
    price: 12,
    image: productImgs[8],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 8,
    name: "Ella Leather Tote",
    description: "Cream pink",
    quantity:1,
    price: 145,
    image: productImgs[7],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
  },
];

export const SPORT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mastermind Toys",
    description: "Brown cockroach wings",
    quantity:1,
    price: 74,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
  },
  {
    id: 2,
    name: "Jump Rope Kids",
    description: "Classic green",
    quantity:1,
    price: 68,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
  },
  {
    id: 3,
    name: "Tee Ball Beanie",
    description: "New blue aqua",
    price: 132,
    quantity:1,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 4,
    name: "Rubber Table Tennis",
    description: "Dark pink 2023",
    quantity:1,
    price: 28,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
  },
  {
    id: 5,
    name: "Classic Blue Rugby",
    description: "Perfect mint green",
    price: 42,
    image: productSport5,
    quantity:1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
  },
  {
    id: 6,
    name: "Manhattan Toy WRT",
    description: "New design 2023",
    price: 30,
    quantity:1,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
  },
  {
    id: 7,
    name: "Tabletop Football ",
    quantity:1,
    description: "Matte black",
    price: 12,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 8,
    name: "Pvc Catching Toy",
    description: "Cream pink",
    price: 145,
    image: productSport8,
    quantity:1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
  },
];
