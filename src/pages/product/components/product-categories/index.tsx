import React, { useCallback, useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CartContext from "../../../../context/cartContext/cart-context";
import { Category } from "../../../../services/commonServices";
import "./index.scss";

interface ProductCategories {
  list: Category[] | [];
  handleClick(item: string): void;
}

const ProductCategories = ({ list, handleClick }: any) => {
  const {
    CartState: { selectedCategory },
  } = useContext(CartContext);

  const getActiveLink =  () => {
    const cat =  list.find((x: Category)=> x.id == selectedCategory)
    return cat ? cat.name : 'All'
  }

  return (
    <aside style={{ height: "100%" }}>
      <ul className="category-list pt-3 d-none d-sm-block">
        {list
          .filter((x: any) => x.enabled)
          .map((item: any) => (
            <li
              onClick={() => handleClick(item)}
              className={selectedCategory == item.id ? "category-active" : ""}
            >
              {item.name}
            </li>
          ))}
      </ul>

      <div className="d-xs-block d-sm-none m-category-list mt-3">
        <DropdownButton id="dropdown-basic-button" title={getActiveLink()}>
          {list
            .filter((x: any) => x.enabled)
            .map((item: any) => (
              <Dropdown.Item
                // href="#/action-1"
                onClick={() => handleClick(item)}
                className={selectedCategory == item.id ? "category-active" : ""}
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
