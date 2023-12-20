import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
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

const ProductDisplay: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });
  const [ratingFilter, setRatingFilter] = useState({ min: 0, max: 5 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://slash-backend.onrender.com/product"
        );
        const { data } = response.data;
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  const filterProducts = () => {
    const filtered = products.filter(
      (product) =>
        product.ProductVariations.some(
          (variation) =>
            variation.price >= priceFilter.min &&
            variation.price <= priceFilter.max
        ) &&
        product.product_rating >= ratingFilter.min &&
        product.product_rating <= ratingFilter.max
    );
    setFilteredProducts(filtered);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceFilter((prevFilter) => ({
      ...prevFilter,
      [name]: parseFloat(value),
    }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRatingFilter((prevFilter) => ({
      ...prevFilter,
      [name]: parseFloat(value),
    }));
  };

  useEffect(() => {
    filterProducts();
  }, [priceFilter, ratingFilter, products]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1>Product Listing</h1>
        <div>
          <label>
            Price Range:
            <input
              type="number"
              name="min"
              value={priceFilter.min}
              onChange={handlePriceChange}
            />
            <span> - </span>
            <input
              type="number"
              name="max"
              value={priceFilter.max}
              onChange={handlePriceChange}
            />
          </label>
        </div>
        <div>
          <label>
            Rating Range:
            <input
              type="number"
              name="min"
              value={ratingFilter.min}
              onChange={handleRatingChange}
            />
            <span> - </span>
            <input
              type="number"
              name="max"
              value={ratingFilter.max}
              onChange={handleRatingChange}
            />
          </label>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
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
                  <h3 className="text-sm text-gray-700">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.Brands.brand_name}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.ProductVariations.map((variation) => `$${variation.price} `)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
