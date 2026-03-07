# Collections Feature Guide

## Overview
The collections feature organizes products into curated categories, making it easier for customers to browse and find what they're looking for.

## Structure

### Routes Created
1. `/collections` - Main collections page showing all categories
2. `/collections/[slug]` - Individual collection pages with filtered products

### Available Collections
- **Boski Fabrics** (`/collections/boski-fabrics`)
  - Premium quality formal wear fabrics
  - 5 products
  - Featured collection

- **Wool Collection** (`/collections/wool-collection`)
  - Imported designer wool for winter
  - 3 products
  - Featured collection

- **Cotton Fabrics** (`/collections/cotton-fabrics`)
  - Breathable all-season fabrics
  - 2 products

- **Designer Collection** (`/collections/designer-collection`)
  - Exclusive premium brand fabrics
  - 5 products
  - Featured collection

## Features

### Collections Page (`/collections`)
- Hero section with call-to-action
- Grid layout of all collections
- Collection cards with:
  - Featured badge
  - Product count
  - Description
  - Tags
  - Hover effects

### Individual Collection Pages (`/collections/[slug]`)
- Breadcrumb navigation
- Collection header with:
  - Featured badge
  - Description
  - Tags
- Advanced filtering:
  - Price range filter
  - Sort options (featured, price, rating, newest)
  - View mode toggle (grid/list)
- Product grid/list view
- Collection features section
- Responsive design

### Filter Options
- **Price Ranges:**
  - All Prices
  - Under Rs. 3,000
  - Rs. 3,000 - 5,000
  - Rs. 5,000 - 7,000
  - Above Rs. 7,000

- **Sort Options:**
  - Featured
  - Price: Low to High
  - Price: High to Low
  - Highest Rated
  - Newest First

- **View Modes:**
  - Grid view (default)
  - List view

## Components Created

### 1. CollectionCard.jsx
Reusable card component for displaying collections with:
- Image with overlay
- Featured badge
- Product count
- Description
- Tags
- Click to navigate

### 2. FilterSidebar.jsx
Advanced filtering sidebar with:
- Price range filters
- Brand filters
- Availability filters
- Sale items filter
- Clear all filters button
- Mobile responsive with overlay

## Data Structure

### Category Object
```javascript
{
  id: 1,
  name: "Boski Fabrics",
  slug: "boski-fabrics",
  description: "Premium quality Boski fabrics...",
  image: "https://...",
  count: 5,
  featured: true,
  tags: ["Premium", "Formal", "Elegant"],
  features: [
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Finest Boski fabric..."
    }
  ]
}
```

## Navigation Integration

### Header Navigation
Updated header with collection links:
- Home
- Collections (main page)
- Individual collection quick links
- Sale section

### Homepage Integration
- "Shop by Collection" section
- Shows 4 featured collections
- "View All" button to collections page
- Click cards to navigate to specific collections

## SEO Optimization

### Sitemap
- All collection pages added to sitemap
- Priority: 0.9 (high priority)
- Change frequency: weekly

### Metadata
- Dynamic page titles
- Collection-specific descriptions
- Open Graph tags ready

### Robots.txt
- Collections pages are crawlable
- Proper indexing instructions

## Usage Examples

### Link to Collections Page
```jsx
<a href="/collections">View All Collections</a>
```

### Link to Specific Collection
```jsx
<a href="/collections/boski-fabrics">Boski Fabrics</a>
```

### Get Collection Data
```javascript
import { categories, getCategoryBySlug } from "@/data/categories"

// Get all collections
const allCollections = categories

// Get specific collection
const boskiCollection = getCategoryBySlug("boski-fabrics")
```

## Mobile Optimization
- Responsive grid layouts
- Touch-friendly buttons
- Horizontal scroll navigation
- Mobile-optimized filters
- Optimized images

## Future Enhancements

### Recommended Additions
1. **Collection Banners**
   - Seasonal promotions
   - Limited time offers
   - New arrivals

2. **Collection Sorting**
   - Sort collections by popularity
   - Sort by newest
   - Sort by product count

3. **Collection Search**
   - Search within collections
   - Filter by multiple criteria

4. **Related Collections**
   - Show similar collections
   - "You might also like"

5. **Collection Analytics**
   - Track popular collections
   - Monitor conversion rates
   - A/B test layouts

6. **Dynamic Collections**
   - Auto-update product counts
   - Seasonal collections
   - Trending collections

7. **Collection Sharing**
   - Share on social media
   - Email collection links
   - WhatsApp sharing

## Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Lazy load images
   - Proper image sizing

2. **Code Splitting**
   - Dynamic imports for filters
   - Lazy load collection features

3. **Caching**
   - Cache collection data
   - Static generation for collections
   - ISR for product counts

## Testing Checklist

- [ ] All collection pages load correctly
- [ ] Filters work as expected
- [ ] Sort options function properly
- [ ] View mode toggle works
- [ ] Mobile navigation is smooth
- [ ] Breadcrumbs navigate correctly
- [ ] Product cards link to details
- [ ] Images load properly
- [ ] SEO metadata is correct
- [ ] Sitemap includes collections

## Troubleshooting

### Collection Not Found
- Check slug matches exactly
- Verify category exists in categories.js
- Check for typos in URL

### Products Not Showing
- Verify product category matches collection name
- Check filter settings
- Ensure products exist in products.js

### Filters Not Working
- Check state management
- Verify filter logic
- Console log filtered results

## Maintenance

### Adding New Collection
1. Add to `src/data/categories.js`
2. Include all required fields
3. Add collection image
4. Update product categories if needed
5. Test navigation and filters

### Updating Collection
1. Edit in `src/data/categories.js`
2. Update description, tags, features
3. Change image if needed
4. Verify changes on live site

### Removing Collection
1. Remove from `src/data/categories.js`
2. Update navigation links
3. Redirect old URLs if needed
4. Update sitemap
