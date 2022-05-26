import React, { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CartContext from "../../../../context/cartContext/cart-context";
import { Category } from "../../../../services/commonServices";
import "./index.scss";

// interface ProductCategoriesProps {
//   list: Category[] | [];
//   handleClick(item: string): void;
// }

const ProductCategories = ({ list, handleClick }: any) => {
  const {
    CartState: { selectedCategory },
  } = useContext(CartContext);

  const getActiveLink =  () => {
    const cat =  list.find((x: Category)=> x.id === selectedCategory)
    return cat ? cat.name : 'All'
  }

  return (
    <aside style={{ height: "100%" }}>
      <ul className="category-list pt-3 d-none d-sm-block">
        {list
          .filter((x: Category) => x.enabled)
          .map((item: Category) => (
            <li
            role="link"
            key={item.id}
              onClick={() => handleClick(item)}
              className={selectedCategory === item.id ? "category-active" : ""}
            >
              {item.name}
            </li>
          ))}
      </ul>

      <div className="d-xs-block d-sm-none m-category-list mt-3">
        <DropdownButton id="dropdown-basic-button" title={getActiveLink()}>
          {list
            .filter((x: Category) => x.enabled)
            .map((item: Category) => (
              <Dropdown.Item
              key={item.id}
                onClick={() => handleClick(item)}
                className={selectedCategory === item.id ? "category-active" : ""}
              >
                {item.name}
              </Dropdown.Item>
            ))}
        </DropdownButton>
      </div>
    </aside>
  );
};

export default ProductCategories;
