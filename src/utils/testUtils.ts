import { Product, VariantInfo } from '../graphql/types';

export const productSummaries: VariantInfo[] = [
  {
    productId: 1,
    variantId: 3,
    name: 'Lenovo IdeaPad S340',
    description:
      'Lenovo IdeaPad S340 is unique for gaming and working purposes',
    price: 2750,
    image:
      'https://www.lenovo.com/medias/lenovo-laptop-ideapad-s340-amd-15-hero.png?context=bWFzdGVyfHJvb3R8MzM0ODk4fGltYWdlL3BuZ3xoYTUvaDQ4Lzk5MTExODU2NzAxNzQucG5nfDgzNTZmZDQ0OTVmMTYzYzgxZTNlOTI0MTZkMzMxNzBiMjg4YWY2Njk5OGY2Y2Y5N2IyN2YwOTU5YzBiMzJlZjA',
  },
  {
    productId: 2,
    variantId: 5,
    name: 'Mouse Logitech M170',
    description:
      'Wireless mouse with 2.4 GHZ technology and battery life up to 12 months',
    price: 90,
    image:
      'https://resource.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-gallery-grey-1.png',
  },
  {
    productId: 3,
    variantId: 6,
    name: 'SSD Kingston 1TB',
    description:
      'This disk transfers data through a PCIe Gen 4.0 x4, NVMe interface, which will allow you to transfer more data at once',
    price: 150,
    image: 'https://cdn1.coppel.com/images/catalog/mkp/371/3000/3711069-1.jpg',
  },
];

export const testProducts: Product[] = [
  {
    id: 1,
    name: 'Lenovo IdeaPad S340',
    description:
      'Lenovo IdeaPad S340 is unique for gaming and working purposes',
    featuredAsset: {
      name: 'lenovo-laptop-ideapad',
      source:
        'https://www.lenovo.com/medias/lenovo-laptop-ideapad-s340-amd-15-hero.png?context=bWFzdGVyfHJvb3R8MzM0ODk4fGltYWdlL3BuZ3xoYTUvaDQ4Lzk5MTExODU2NzAxNzQucG5nfDgzNTZmZDQ0OTVmMTYzYzgxZTNlOTI0MTZkMzMxNzBiMjg4YWY2Njk5OGY2Y2Y5N2IyN2YwOTU5YzBiMzJlZjA',
    },
    variantList: {
      items: [
        {
          productId: 1,
          id: 3,
          name: 'Lenovo IdeaPad S340 16 GB',
          price: 1800,
        },
      ],
      totalItems: 1,
    },
  },
  {
    id: 2,
    name: 'Mouse Logitech M170',
    description:
      'Wireless mouse with 2.4 GHZ technology and battery life up to 12 months',
    featuredAsset: {
      name: 'logitech-mouse-m170',
      source:
        'https://resource.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-gallery-grey-1.png',
    },
    variantList: {
      items: [
        {
          productId: 2,
          id: 5,
          name: 'Mouse Logitech M170 Gaming',
          price: 105,
        },
      ],
      totalItems: 1,
    },
  },
];
