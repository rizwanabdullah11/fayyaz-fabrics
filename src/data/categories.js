// Categories data - Update this file to manage categories
export const categories = [
    {
        id: 1,
        name: "All Products",
        slug: "all",
        icon: "ShoppingBag",
        count: 156,
        description: "Browse our complete collection"
    },
    {
        id: 2,
        name: "Boski Fabrics",
        slug: "boski",
        icon: "Tag",
        count: 45,
        description: "Premium boski fabrics for formal wear"
    },
    {
        id: 3,
        name: "Wool Collection",
        slug: "wool",
        icon: "Tag",
        count: 38,
        description: "Warm and comfortable wool fabrics"
    },
    {
        id: 4,
        name: "Cotton Fabrics",
        slug: "cotton",
        icon: "Tag",
        count: 52,
        description: "Breathable cotton for all seasons"
    },
    {
        id: 5,
        name: "Designer Collection",
        slug: "designer",
        icon: "Sparkles",
        count: 21,
        description: "Exclusive designer fabrics"
    }
]

export const brands = [
    { name: "Gul Ahmed", count: 28 },
    { name: "Khaadi", count: 24 },
    { name: "Nishat", count: 19 },
    { name: "Alkaram", count: 16 },
    { name: "Sapphire", count: 14 },
    { name: "Designer", count: 32 },
    { name: "Premium", count: 23 }
]

export const priceRanges = [
    { label: "Under Rs. 3,000", min: 0, max: 3000, count: 42 },
    { label: "Rs. 3,000 - Rs. 5,000", min: 3000, max: 5000, count: 58 },
    { label: "Rs. 5,000 - Rs. 7,000", min: 5000, max: 7000, count: 34 },
    { label: "Above Rs. 7,000", min: 7000, max: 999999, count: 22 }
]
