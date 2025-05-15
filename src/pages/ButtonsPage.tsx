import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { buttonStyles, buttonCategories } from '@/data/buttonData';
import ButtonCard from '@/components/ButtonCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useFavoriteButtons } from '@/hooks/useFavoriteButtons';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

const ITEMS_PER_PAGE = 15;

const ButtonsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';

  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filteredButtons, setFilteredButtons] = useState(buttonStyles);
  const [currentPage, setCurrentPage] = useState(1);

  const { toggleFavorite, isFavorite } = useFavoriteButtons();

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (searchTerm) params.set('search', searchTerm);
    setSearchParams(params);

    let result = [...buttonStyles];

    if (category && category !== 'all') {
      result = result.filter(button => button.category === category);
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(button => 
        button.name.toLowerCase().includes(searchLower) || 
        button.description.toLowerCase().includes(searchLower) ||
        button.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    if (sortBy === 'popular') {
      result.sort((a, b) => b.popularityScore - a.popularityScore);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredButtons(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [category, searchTerm, sortBy, setSearchParams]);

  const clearFilters = () => {
    setCategory('');
    setSearchTerm('');
    setSearchParams({});
    setCurrentPage(1);
  };

  const hasActiveFilters = category || searchTerm;

  // Pagination calculations
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedButtons = filteredButtons.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredButtons.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">All Buttons</h1>
          <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto mt-2">
            Browse our complete collection of button styles. Filter by category, search by name or tags, and sort to find the perfect button for your project.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search buttons..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="md:col-span-3">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {buttonCategories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* <div className="md:col-span-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            {hasActiveFilters && (
              <div className="md:col-span-2 flex justify-end">
                <Button variant="ghost" size="sm" onClick={clearFilters} className="flex items-center gap-1">
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Buttons Grid */}
      <section className="py-12 flex-grow">
        <div className="container px-4 md:px-6">
          {paginatedButtons.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedButtons.map(button => (
                  <ButtonCard
                    key={button.id}
                    button={button}
                    onAddToFavorites={toggleFavorite}
                    isFavorite={isFavorite(button.id)}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-10">
                  <Button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    variant="outline"
                    size="sm"
                  >
                    Previous
                  </Button>
                  <span className="text-muted-foreground text-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    size="sm"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium mb-4">No buttons found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your search or filter criteria</p>
              <Button onClick={clearFilters}>View All Buttons</Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ButtonsPage;








// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Input } from '@/components/ui/input';
// import { 
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '@/components/ui/select';
// import { buttonStyles, buttonCategories } from '@/data/buttonData';
// import ButtonCard from '@/components/ButtonCard';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { useFavoriteButtons } from '@/hooks/useFavoriteButtons';
// import { Button } from '@/components/ui/button';
// import { Search, X } from 'lucide-react';

// const ButtonsPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialCategory = searchParams.get('category') || '';
//   const initialSearch = searchParams.get('search') || '';
  
//   const [category, setCategory] = useState(initialCategory);
//   const [sortBy, setSortBy] = useState('popular');
//   const [searchTerm, setSearchTerm] = useState(initialSearch);
//   const [filteredButtons, setFilteredButtons] = useState(buttonStyles);
  
//   const { toggleFavorite, isFavorite } = useFavoriteButtons();
  
//   // Update search params when filters change
//   useEffect(() => {
//     const params = new URLSearchParams();
//     if (category) params.set('category', category);
//     if (searchTerm) params.set('search', searchTerm);
//     setSearchParams(params);
    
//     // Apply filters
//     let result = [...buttonStyles];
    
//     // Filter by category
//     if (category) {
//       result = result.filter(button => button.category === category);
//     }
    
//     // Filter by search term
//     if (searchTerm) {
//       const searchLower = searchTerm.toLowerCase();
//       result = result.filter(button => 
//         button.name.toLowerCase().includes(searchLower) || 
//         button.description.toLowerCase().includes(searchLower) ||
//         button.tags.some(tag => tag.toLowerCase().includes(searchLower))
//       );
//     }
    
//     // Apply sorting
//     if (sortBy === 'popular') {
//       result.sort((a, b) => b.popularityScore - a.popularityScore);
//     } else if (sortBy === 'newest') {
//       result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
//     } else if (sortBy === 'alphabetical') {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     }
    
//     setFilteredButtons(result);
//   }, [category, searchTerm, sortBy, setSearchParams]);
  
//   const clearFilters = () => {
//     setCategory('');
//     setSearchTerm('');
//     setSearchParams({});
//   };
  
//   const hasActiveFilters = category || searchTerm;
  
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
      
//       {/* Page Header */}
//       <section className="py-12 bg-muted/30">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center gap-4 text-center">
//             <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">All Buttons</h1>
//             <p className="text-muted-foreground md:text-lg max-w-[700px]">
//               Browse our complete collection of button styles. Filter by category, search by name or tags, and sort to find the perfect button for your project.
//             </p>
//           </div>
//         </div>
//       </section>
      
//       {/* Filters */}
//       <section className="py-8 border-b">
//         <div className="container px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//             <div className="md:col-span-4 relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search buttons..."
//                 className="pl-8"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
            
//             <div className="md:col-span-3">
//               <Select value={category} onValueChange={setCategory}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Filter by Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Categories</SelectItem>
//                   {buttonCategories.map(cat => (
//                     <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
            
//             <div className="md:col-span-3">
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Sort By" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="popular">Most Popular</SelectItem>
//                   <SelectItem value="newest">Newest First</SelectItem>
//                   <SelectItem value="alphabetical">Alphabetical</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
            
//             {hasActiveFilters && (
//               <div className="md:col-span-2 flex justify-end">
//                 <Button variant="ghost" size="sm" onClick={clearFilters} className="flex items-center gap-1">
//                   <X className="h-4 w-4" />
//                   Clear Filters
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
      
//       {/* Buttons Grid */}
//       <section className="py-12 flex-grow">
//         <div className="container px-4 md:px-6">
//           {filteredButtons.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredButtons.map(button => (
//                 <ButtonCard
//                   key={button.id}
//                   button={button}
//                   onAddToFavorites={toggleFavorite}
//                   isFavorite={isFavorite(button.id)}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <h3 className="text-2xl font-medium mb-4">No buttons found</h3>
//               <p className="text-muted-foreground mb-8">Try adjusting your search or filter criteria</p>
//               <Button onClick={clearFilters}>View All Buttons</Button>
//             </div>
//           )}
//         </div>
//       </section>
      
//       <Footer />
//     </div>
//   );
// };

// export default ButtonsPage;
