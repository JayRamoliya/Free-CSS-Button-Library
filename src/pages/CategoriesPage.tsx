
import React from 'react';
import { buttonCategories } from '@/data/buttonData';
import CategoryCard from '@/components/CategoryCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CategoriesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Button Categories</h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px]">
              Browse our button styles by category. Each category focuses on a different style, effect, or design approach.
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-12 flex-grow">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {buttonCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
