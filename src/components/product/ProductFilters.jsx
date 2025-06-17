import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import Button from '../common/Button';


const ProductFilters = ({
  filters,
  onFiltersChange,
  categories,
  brands,
  isOpen,
  onToggle
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (key, value) => {
    setLocalFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayFilterToggle = (key, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(item => item !== value)
        : [...prev[key], value]
    }));
  };

  const applyFilters = () => {
    onFiltersChange(localFilters);
    onToggle();
  };

  const clearFilters = () => {
    const resetFilters = {
      category: [],
      brand: [],
      priceRange: [0, 50000],
      rating: 0,
      inStock: false
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  const activeFilterCount =
    localFilters.category.length +
    localFilters.brand.length +
    (localFilters.rating > 0 ? 1 : 0) +
    (localFilters.inStock ? 1 : 0);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          onClick={onToggle}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-luxury-gold text-luxury-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        fixed lg:static inset-0 lg:inset-auto z-50 lg:z-auto
        bg-white lg:bg-transparent
        p-4 lg:p-0
        overflow-y-auto lg:overflow-visible
        lg:w-64
      `}>
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onToggle} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={localFilters.category.includes(category)}
                    onChange={() => handleArrayFilterToggle('category', category)}
                    className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Brand</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {brands.map(brand => (
                <label key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={localFilters.brand.includes(brand)}
                    onChange={() => handleArrayFilterToggle('brand', brand)}
                    className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <span className="ml-2 text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-3">
              <div>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="100"
                  value={localFilters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$0</span>
                  <span>${localFilters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Minimum Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map(rating => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    checked={localFilters.rating === rating}
                    onChange={() => handleFilterChange('rating', rating)}
                    className="text-luxury-gold focus:ring-luxury-gold"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {rating}+ Stars
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* In Stock */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={localFilters.inStock}
                onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                className="rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
              />
              <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="lg:hidden space-y-3 pt-6 border-t">
            <Button onClick={applyFilters} fullWidth>
              Apply Filters
            </Button>
            <Button onClick={clearFilters} variant="outline" fullWidth>
              Clear All
            </Button>
          </div>

          <div className="hidden lg:block space-y-3">
            <Button onClick={clearFilters} variant="outline" size="sm" fullWidth>
              Clear All
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default ProductFilters;