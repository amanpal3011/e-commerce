export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: "top", href: '/women/clothing/tops' },
            { name: 'Dresses', id: "women_dress", href: '#' },
            { name: 'Women Jeans', id: 'women_jeans', href: '#' },
            { name: 'Lengha Choli', id: 'lengha_choli', href: '#' },
            { name: 'Sweaters', id: 'sweater', href: '#' },
            { name: 'T-Shirts', id: 't-shirt', href: '#' },
            { name: 'Jackets', id: 'jacket', href: '#' },
            { name: 'Gowns', id: 'gowns', href: '#' },
            { name: 'Sarees', id: 'saree', href: '#' },
            { name: 'Kurtas', id: 'kurtas', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch', href: '#' },
            { name: 'Wallets', id: 'wallet', href: '#' },
            { name: 'Bags', id: 'bag', href: '#' },
            { name: 'Sunglasses', id: 'sunglasses', href: '#' },
            { name: 'Hats', id: 'hat', href: '#' },
            { name: 'Belts', id: 'belt', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: '#', href: '#' },
            { name: 'My Way', id: '#', href: '#' },
            { name: 'Re-Arranged', id: '#', href: '#' },
            { name: 'Counterfeit', id: '#', href: '#' },
            { name: 'Significant Other', id: '#', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurta', href: '#' },
            { name: 'Shirts', id: 'shirt', href: '#' },
            { name: 'Men Jeans', id: 'men_jeans', href: '#' },
            { name: 'Sweaters', id: '#', href: '#' },
            { name: 'T-Shirts', id: 't-shirt', href: '#' },
            { name: 'Jackets', id: '#', href: '#' },
            { name: 'Activewear', id: '#', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: '#', href: '#' },
            { name: 'Wallets', id: '#', href: '#' },
            { name: 'Bags', id: '#', href: '#' },
            { name: 'Sunglasses', id: '#', href: '#' },
            { name: 'Hats', id: '#', href: '#' },
            { name: 'Belts', id: '#', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: '#', href: '#' },
            { name: 'Counterfeit', id: '#', href: '#' },
            { name: 'Full Nelson', id: '#', href: '#' },
            { name: 'My Way', id: '#', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', id: '/', href: '/' },
    { name: 'Stores', id: '/', href: '/' },
  ],
};
