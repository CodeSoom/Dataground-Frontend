import React from 'react';

export default function ProblemSubCategory({ subCategories, onClick }) {
  return (
    <div>
      {subCategories.length !== 0
        ? (
          subCategories.map((subCategory) => (
            <button
              key={subCategory}
              name={subCategory}
              type="button"
              onClick={onClick}
            >
              {subCategory}
            </button>
          ))
        ) : null}

    </div>
  );
}
