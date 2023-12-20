// ProductItem.tsx
import React from 'react';
import type { Product } from '../types/productTypes';


interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
  <div key={product.id} className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      {product.ProductVariations.map((variation, index) => (
        <img
          key={index}
          src={variation.ProductVarientImages[0].image_path}
          alt={`Variation ${index}`}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      ))}
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.Brands.brand_name}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">
        {product.ProductVariations.map((variation: { price: any; }) => `$${variation.price} `)}
      </p>
    </div>
  </div>
);

export default ProductItem;
