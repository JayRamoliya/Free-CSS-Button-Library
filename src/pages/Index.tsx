
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import ButtonCard from '@/components/ButtonCard';
import { buttonStyles, buttonCategories } from '@/data/buttonData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useFavoriteButtons } from '@/hooks/useFavoriteButtons';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleFavorite, isFavorite } = useFavoriteButtons();
  
  // Filter featured buttons for the showcase
  const featuredButtons = buttonStyles
    .filter(button => button.isFeatured)
    .slice(0, 3);
  
  // Filter new buttons for the showcase
  const newButtons = buttonStyles
    .filter(button => button.isNew)
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white to-brand-50 dark:from-background dark:to-background/90">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                The Ultimate CSS Button Library
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Thousands of ready-to-use button styles for your web projects. Search, customize, and implement in seconds.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search"
                  placeholder="Find buttons by name, style, or effect"
                  className="w-full pl-8 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/buttons">
                <Button className="bg-brand hover:bg-brand-600">Browse All Buttons</Button>
              </Link>
              <Link to="/generator">
                <Button variant="outline">Generate Custom Button</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Button Categories
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Explore our collection of button styles by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {buttonCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/categories">
              <Button variant="outline" className="flex gap-2">
                View All Categories
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Buttons */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Buttons
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Our most popular and versatile button styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {featuredButtons.map(button => (
              <ButtonCard 
                key={button.id} 
                button={button} 
                onAddToFavorites={toggleFavorite}
                isFavorite={isFavorite(button.id)}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/buttons">
              <Button className="flex gap-2 bg-brand hover:bg-brand-600">
                View All Buttons
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Buttons */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              New Arrivals
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Check out our latest button styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {newButtons.map(button => (
              <ButtonCard 
                key={button.id} 
                button={button} 
                onAddToFavorites={toggleFavorite}
                isFavorite={isFavorite(button.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to Craft Beautiful Buttons?
            </h2>
            <p className="max-w-[600px] text-brand-50 md:text-lg">
              Start adding these beautiful buttons to your web projects today. Browse our collection, customize to your needs, and implement with ease.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/buttons">
                <Button className="bg-white text-brand hover:bg-brand-50">Get Started</Button>
              </Link>
              <Link to="/generator">
                <Button variant="outline" className="text-white border-white hover:bg-brand-600">
                  Create Custom Button
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
