
import { useState, useEffect } from 'react';
import { ButtonStyle } from '@/data/buttonData';

export function useFavoriteButtons() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('buttonCraftFavorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error);
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('buttonCraftFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (buttonId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(buttonId)) {
        return prevFavorites.filter(id => id !== buttonId);
      } else {
        return [...prevFavorites, buttonId];
      }
    });
  };

  const isFavorite = (buttonId: string) => {
    return favorites.includes(buttonId);
  };

  const getFavoriteButtons = (allButtons: ButtonStyle[]) => {
    return allButtons.filter(button => favorites.includes(button.id));
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoriteButtons
  };
}
