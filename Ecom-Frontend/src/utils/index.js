import { FaBoxOpen, FaHome, FaShoppingCart, FaStore, FaThList, FaUsers } from "react-icons/fa";
import { bannerImageOne, bannerImageThree, bannerImageTwo} from "./constant";

export const bannerLists = [
    {
      
        id: 1, 
        image: bannerImageOne, 
        title: "Little Trendsetters",
        subtitle: "Kids' Fashion",
        description: "Stylish and comfortable outfits for your little ones.",
        tag: "New Arrivals",
      },
      {
        id: 2,
        image: bannerImageTwo,
        title: "Entertainment Hub",
        subtitle: "Smart TV",
        description: "Experience the latest in home entertainment",
        tag: "Best Deals",
      },
      {
        id: 3, 
        image: bannerImageThree, 
        title: "Modern Living",
        subtitle: "Premium Furniture",
        description: "Transform your home with our elegant furniture collection.",
        tag: "Top Rated",
      }
      
];

export const categoryShowcase = [
    {
        id: 1,
        name: "Kids Fashion",
        description: "Trendy outfits for little ones",
        image: bannerImageOne,
        gradient: "from-purple-600/80 to-pink-500/80",
    },
    {
        id: 2,
        name: "Electronics",
        description: "Latest gadgets & appliances",
        image: bannerImageTwo,
        gradient: "from-blue-600/80 to-cyan-500/80",
    },
    {
        id: 3,
        name: "Furniture",
        description: "Premium home décor",
        image: bannerImageThree,
        gradient: "from-emerald-600/80 to-teal-500/80",
    },
];

export const trustFeatures = [
    { id: 1, icon: "truck", title: "Free Shipping", description: "On orders over ₹499" },
    { id: 2, icon: "refresh", title: "Easy Returns", description: "30-day return policy" },
    { id: 3, icon: "shield", title: "Secure Payment", description: "100% protected" },
    { id: 4, icon: "headset", title: "24/7 Support", description: "We're here to help" },
];


export const adminNavigation = [
  {
    name: "Dashboard", 
    href: "/admin", 
    icon: FaHome, 
    current: true 
  }, {
    name: "Orders", 
    href: "/admin/orders", 
    icon: FaShoppingCart
  }, {
    name: "Products", 
    href: "/admin/products", 
    icon: FaBoxOpen
  }, {
    name: "Categories", 
    href: "/admin/categories", 
    icon: FaThList
  }, {
    name: "Sellers", 
    href: "/admin/sellers", 
    icon: FaStore 
  }, {
    name: "Users", 
    href: "/admin/users", 
    icon: FaUsers
  }
];


export const sellerNavigation = [
  {
    name: "Orders", 
    href: "/admin/orders", 
    icon: FaShoppingCart,
    current: true 
  }, {
    name: "Products", 
    href: "/admin/products", 
    icon: FaBoxOpen
  }
];