// Categories data - Update this file to manage categories
export const categories = [
    {
        id: 1,
        name: "Boski Fabrics",
        slug: "boski-fabrics",
        icon: "Tag",
        count: 5,
        description: "Premium quality Boski fabrics perfect for formal wear. Known for their superior drape, comfort, and elegant finish.",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800&h=600&fit=crop",
        featured: true,
        tags: ["Premium", "Formal", "Elegant", "8 Pound"],
        features: [
            {
                icon: "✨",
                title: "Premium Quality",
                description: "Finest Boski fabric with superior finish and texture"
            },
            {
                icon: "👔",
                title: "Perfect for Formal Wear",
                description: "Ideal for suits, sherwanis, and special occasions"
            },
            {
                icon: "💎",
                title: "Luxurious Feel",
                description: "Soft, comfortable, and breathable fabric"
            }
        ]
    },
    {
        id: 2,
        name: "Wool Collection",
        slug: "wool-collection",
        icon: "Tag",
        count: 3,
        description: "Imported designer wool fabrics with exceptional warmth and style. Perfect for winter collection with soft texture.",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=600&fit=crop",
        featured: true,
        tags: ["Imported", "Winter", "Designer", "Warm"],
        features: [
            {
                icon: "🧥",
                title: "Winter Essential",
                description: "Exceptional warmth with lightweight comfort"
            },
            {
                icon: "🌍",
                title: "Imported Quality",
                description: "Premium wool from international mills"
            },
            {
                icon: "🎨",
                title: "Designer Colors",
                description: "Stunning color options including Feroza and Golden Skin"
            }
        ]
    },
    {
        id: 3,
        name: "Cotton Fabrics",
        slug: "cotton-fabrics",
        icon: "Tag",
        count: 2,
        description: "Breathable cotton fabrics from top brands like Gul Ahmed and Khaadi. Perfect for all seasons with vibrant colors.",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop",
        featured: false,
        tags: ["Breathable", "All Season", "Comfortable", "Branded"],
        features: [
            {
                icon: "🌬️",
                title: "Breathable Fabric",
                description: "Natural cotton that keeps you cool and comfortable"
            },
            {
                icon: "🏷️",
                title: "Trusted Brands",
                description: "Authentic Gul Ahmed and Khaadi collections"
            },
            {
                icon: "🌈",
                title: "Vibrant Colors",
                description: "Wide range of colors and patterns"
            }
        ]
    },
    {
        id: 4,
        name: "Designer Collection",
        slug: "designer-collection",
        icon: "Sparkles",
        count: 5,
        description: "Exclusive designer fabrics from premium brands. Contemporary designs with superior quality and professional finish.",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800&h=600&fit=crop",
        featured: true,
        tags: ["Designer", "Exclusive", "Premium", "Contemporary"],
        features: [
            {
                icon: "👗",
                title: "Contemporary Designs",
                description: "Latest fashion trends and modern patterns"
            },
            {
                icon: "⭐",
                title: "Premium Brands",
                description: "Lopaz, Nishat, Alkaram, and Sapphire collections"
            },
            {
                icon: "💼",
                title: "Professional Finish",
                description: "Wrinkle-resistant and easy to maintain"
            }
        ]
    }
]

// Legacy support - get category names only
export const categoryNames = [
    "All Products",
    ...categories.map(cat => cat.name)
]

// Get category by slug
export const getCategoryBySlug = (slug) => {
    return categories.find(cat => cat.slug === slug)
}

// Get category by name
export const getCategoryByName = (name) => {
    return categories.find(cat => cat.name === name)
}

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
