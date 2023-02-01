export interface Asset {
  name: string;
  source: string;
}

export interface Variant {
  productId: number;
  id: number;
  name: string;
  price: number;
}

export interface ProductVariants {
  items: Variant[];
  totalItems: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  featuredAsset: Asset;
  variantList: ProductVariants;
}

export interface Products {
  totalItems: number;
  items: Product[];
}

export interface VariantInfo {
  productId: number;
  variantId: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
