// ProductDisplay.tsx
import React, { useState, useEffect } from "react";
import type { Product } from "./types/productTypes";
import ProductItem from "./components/productItem";
import axios from "axios";
import './App.css';
import {MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import {  Disclosure, Transition } from '@headlessui/react'




const ProductDisplay: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });
  const [ratingFilter, setRatingFilter] = useState({ min: 0, max: 5 });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const response = await axios.get(
          "https://slash-backend.onrender.com/product"
        );
        const { data } = response.data;
        setProducts(data);
        setFilteredProducts(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setIsloading(false);
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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

      {/* Filters */}
      <Disclosure as="div" className="flex items-center space-x-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                  Filters
                  {open ? (
                    <MinusIcon className="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  ) : (
                    <PlusIcon className="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  )}
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Disclosure.Panel className="absolute right-0 z-10 mt-2 w-64 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-4 py-4 space-y-4">
                      {/* Price Range Filter */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
                        <div className="flex space-x-2">
                          {/* Min Price */}
                          <input
                            type="number"
                            id="minPrice"
                            name="min"
                            placeholder="Min Price"
                            value={priceFilter.min}
                            onChange={handlePriceChange}
                            className="border rounded-md px-2 py-1 text-sm text-gray-700 w-1/2"
                          />
                          {/* Max Price */}
                          <input
                            type="number"
                            id="maxPrice"
                            name="max"
                            placeholder="Max Price"
                            value={priceFilter.max}
                            onChange={handlePriceChange}
                            className="border rounded-md px-2 py-1 text-sm text-gray-700 w-1/2"
                          />
                        </div>
                      </div>

                      {/* Rating Range Filter */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Rating Range</h3>
                        <div className="flex space-x-2">
                          {/* Min Rating */}
                          <input
                            type="number"
                            id="minRating"
                            name="min"
                            placeholder="Min Rating"
                            value={ratingFilter.min}
                            onChange={handleRatingChange}
                            className="border rounded-md px-2 py-1 text-sm text-gray-700 w-1/2"
                          />
                          {/* Max Rating */}
                          <input
                            type="number"
                            id="maxRating"
                            name="max"
                            placeholder="Max Rating"
                            value={ratingFilter.max}
                            onChange={handleRatingChange}
                            className="border rounded-md px-2 py-1 text-sm text-gray-700 w-1/2"
                          />
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
      </div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />{" "}
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</div>
  );
};

export default ProductDisplay;
