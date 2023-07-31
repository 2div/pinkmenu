"use client"

import React, { useState } from 'react';
import Menu from './Menu';

const Categories = ({ categories, filterItems }) => {
  let [currentCategory, setCurrentCategory] = useState(0);

  const handleCategoryClick = (categoryIndex, category) => {
    filterItems(category);
    setCurrentCategory(categoryIndex);
    
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`filter-btn ${index === currentCategory ? 'active' : ''}`}
            onClick={() => handleCategoryClick(index, category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
