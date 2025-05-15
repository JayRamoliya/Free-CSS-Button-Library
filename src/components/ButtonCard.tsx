
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Copy, Star } from 'lucide-react';
import ButtonPreview from './ButtonPreview';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '@/data/buttonData';

interface ButtonCardProps {
  button: ButtonStyle;
  onAddToFavorites?: (id: string) => void;
  isFavorite?: boolean;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
  button,
  onAddToFavorites,
  isFavorite = false
}) => {
  const { toast } = useToast();
  
  const copyCode = () => {
    navigator.clipboard.writeText(button.htmlCode + '\n\n' + button.cssCode);
    toast({
      title: "Code copied",
      description: "Button code copied to clipboard",
    });
  };
  
  const toggleFavorite = () => {
    if (onAddToFavorites) {
      onAddToFavorites(button.id);
    }
  };
  
  return (
    <Card className="overflow-hidden border transition-all hover:shadow-md">
      <div className="p-6 bg-muted/40 flex items-center justify-center min-h-[140px]">
        <ButtonPreview
          name={button.name}
          cssClass={button.cssClass}
          htmlCode={button.htmlCode}
          cssCode={button.cssCode}
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{button.name}</h3>
          {button.isNew && (
            <div className="px-2 py-1 text-xs rounded-full bg-brand-50 text-brand-600 font-medium">
              New
            </div>
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-4">{button.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {button.tags.map((tag) => (
            <div key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
              {tag}
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t bg-muted/20 flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copyCode}>
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </Button>
          {onAddToFavorites && (
            <Button 
              variant={isFavorite ? "default" : "outline"}
              size="sm"
              onClick={toggleFavorite}
              className={isFavorite ? "bg-brand hover:bg-brand-600" : ""}
            >
              <Star className="w-4 h-4 mr-1" fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? "Saved" : "Save"}
            </Button>
          )}
        </div>
        <Link to={`/button/${button.id}`}>
          <Button variant="link" size="sm" className="p-0">
            Details
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ButtonCard;
