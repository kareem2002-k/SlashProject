export interface Product {
    id: number;
    name: string;
    description: string;
    product_rating: number;
    Brands: {
      brand_name: string;
    };
    ProductVariations: {
      price: number;
      ProductVarientImages: {
        image_path: string;
      }[];
    }[];
  }
  