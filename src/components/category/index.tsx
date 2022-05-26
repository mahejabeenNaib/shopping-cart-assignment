import React, { useCallback } from "react";
import "./index.scss";

const CategoryCard = ({ category, index, openCategory }: any) => {
  const handleCategory = useCallback(
    (id: string) => () => {
      openCategory(id);
    },
    [openCategory]
  );

  return (
    <section className="banner-component d-flex justify-content-between">
        <div className="image-container">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="banner-image"
          />
        </div>
        <div className="content">
          <h1 className="heading">{category.name}</h1>
          <p className="desc">{category.description}</p>
          <button className="link-button" onClick={handleCategory(category.id)}>
            Explore {category.key}
          </button>
        </div>
    </section>
  );
};

export default CategoryCard;
