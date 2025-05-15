
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { buttonStyles } from '@/data/buttonData';
import ButtonCard from '@/components/ButtonCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useFavoriteButtons } from '@/hooks/useFavoriteButtons';
import { Heart } from 'lucide-react';

const FavoritesPage = () => {
  const { toggleFavorite, isFavorite, getFavoriteButtons } = useFavoriteButtons();
  const favoriteButtons = getFavoriteButtons(buttonStyles);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">My Favorite Buttons</h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px]">
              Your collection of saved buttons for quick access.
            </p>
          </div>
        </div>
      </section>
      
      {/* Favorites Grid */}
      <section className="py-12 flex-grow">
        <div className="container px-4 md:px-6">
          {favoriteButtons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteButtons.map(button => (
                <ButtonCard
                  key={button.id}
                  button={button}
                  onAddToFavorites={toggleFavorite}
                  isFavorite={isFavorite(button.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-muted" />
              </div>
              <h3 className="text-2xl font-medium mb-4">No favorites yet</h3>
              <p className="text-muted-foreground mb-8">
                Browse our button collection and save your favorites for quick access
              </p>
              <Link to="/buttons">
                <Button>Explore Buttons</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FavoritesPage;
