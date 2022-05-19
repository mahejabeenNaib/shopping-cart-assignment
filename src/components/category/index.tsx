import React, { useCallback } from "react";
import "./index.scss";

const CategoryCard = ({category ,index, openCategory} : any) => {

    const handleCategory = useCallback(
        (id: string) => () => {
            openCategory(id);
        },
        [openCategory],
    );

    const isEven = (index : number)  => {
        console.log(index)
        if(index % 2 == 0){
            return true
        }
        return false
    }
  return (
//   <section className={isEven(index) ? "swipe" : " "}>
        <div className="banner-component d-flex justify-content-between">
            <div className="image-container">
                <img src={category.imageUrl} alt={category.name} className="banner-image" />
            </div>
            <div className="content">
                <h2 className="heading">{category.name}</h2>
                <p className="desc">{category.description}</p>
                <button className="link-button" onClick={handleCategory(category.id)}>
                    Explore {category.key}
                </button>
            </div>
        </div>
//   </section>
  );
};

export default CategoryCard;
