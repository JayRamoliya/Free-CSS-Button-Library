
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { buttonStyles } from '@/data/buttonData';
import ButtonPreview from '@/components/ButtonPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Star, Tag } from 'lucide-react';
import { useFavoriteButtons } from '@/hooks/useFavoriteButtons';
import ButtonCard from '@/components/ButtonCard';

const ButtonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavoriteButtons();
  
  const button = buttonStyles.find(b => b.id === id);
  
  if (!button) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Button Not Found</h2>
            <p className="text-muted-foreground mb-6">The button you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/buttons')}>View All Buttons</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related buttons from the same category
  const relatedButtons = buttonStyles
    .filter(b => b.id !== button.id && b.category === button.category)
    .slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container px-4 md:px-6 py-12">
        <div className="mb-8">
          <Link to="/buttons">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Buttons
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold tracking-tight">{button.name}</h1>
              <Button 
                variant={isFavorite(button.id) ? "default" : "outline"}
                size="sm" 
                onClick={() => toggleFavorite(button.id)}
                className={isFavorite(button.id) ? "bg-brand hover:bg-brand-600" : ""}
              >
                <Star className="w-4 h-4 mr-2" fill={isFavorite(button.id) ? "currentColor" : "none"} />
                {isFavorite(button.id) ? "Saved to Favorites" : "Add to Favorites"}
              </Button>
            </div>
            
            <p className="text-muted-foreground mb-8">{button.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                <Tag className="w-3.5 h-3.5 mr-1" />
                {button.category}
              </div>
              
              {button.tags.map(tag => (
                <Link 
                  key={tag} 
                  to={`/buttons?search=${tag}`} 
                  className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full hover:bg-muted/80 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            
            <ButtonPreview
              name={button.name}
              cssClass={button.cssClass}
              htmlCode={button.htmlCode}
              cssCode={button.cssCode}
              isDetailView
            />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-medium mb-4">Similar Buttons</h3>
              <div className="space-y-6">
                {relatedButtons.map(relatedButton => (
                  <ButtonCard
                    key={relatedButton.id}
                    button={relatedButton}
                    onAddToFavorites={toggleFavorite}
                    isFavorite={isFavorite(relatedButton.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ButtonDetailPage;
