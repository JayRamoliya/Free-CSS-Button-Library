
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ButtonCategory } from '@/data/buttonData';

interface CategoryCardProps {
  category: ButtonCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/buttons?category=${category.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-brand hover:scale-[1.02]">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="text-4xl mb-4">{category.icon}</div>
          <h3 className="font-medium text-lg mb-2">{category.name}</h3>
          <p className="text-muted-foreground text-sm text-center">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
