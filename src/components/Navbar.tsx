
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center">
              <span className="text-white font-bold">BC</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">ButtonCraft</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand transition-colors">
            Home
          </Link>
          <Link to="/buttons" className="text-sm font-medium hover:text-brand transition-colors">
            All Buttons
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-brand transition-colors">
            Categories
          </Link>
          <Link to="/generator" className="text-sm font-medium hover:text-brand transition-colors">
            Generator
          </Link>
          <Link to="/favorites" className="text-sm font-medium hover:text-brand transition-colors">
            Favorites
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-brand transition-colors">
            About
          </Link>
          <Link to="/docs" className="text-sm font-medium hover:text-brand transition-colors">
            Docs
          </Link>
          <Link to="/submit" className="text-sm font-medium hover:text-brand transition-colors">
            Submit
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          <Button className="hidden sm:flex">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
