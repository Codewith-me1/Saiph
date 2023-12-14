
import ProductSection from '@/components/sections/productSection/productSection';
import React from 'react';

const Product = () => {
  return (
    <div className="min-h-screen pt-16">

      <div className="container mx-auto my-8 p-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
        {/* Add responsive classes to adjust padding based on screen size */}
        <ProductSection />
      </div>
    </div>
  );
};

export default Product;
