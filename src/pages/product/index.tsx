import React, { useCallback, useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartContext from "../../context/cartContext/cart-context";
import { Category, getCategories, getProducts, Product } from "../../services/commonServices";
import ProductCategories from "./components/product-categories";
import ProductList from "./components/product-list/indexe";


const Products = () => {
    const [categories , setCategories] = useState<Category[]>([])
    const [products , setProducts] = useState<Product[]>([])
    const [currentProducts , setCurrentProducts] = useState<Product[]>([])
    const {
        CartState: { selectedCategory },
        setSelectedCategory
    } = useContext(CartContext);
  
    useEffect(() => {
      getCategoriesList()
      getProductList()
    },[])
  
    const getCategoriesList = useCallback(async() => {
      const list= await getCategories()
     setCategories(list)
    },[categories])

    const getProductList = useCallback(async() => {
       const list= await getProducts()
       setProducts(list)
       if(selectedCategory) {
        setCurrentProducts(list.filter(x => x.category == selectedCategory))
       } else {
        setCurrentProducts(list)
       }
      },[products])

      const handleCategory = (item: Category) => {
          if(item.id == selectedCategory){
              setCurrentProducts(products)
              setSelectedCategory('')
          } else {
            setCurrentProducts(products.filter(product => product.category == item.id ))
            setSelectedCategory(item.id)
          }
          
      }
  
    return (
        <div>
            <Container>
            <Row>
                <Col xs={12}  sm={3}>
                    <ProductCategories list={categories}  handleClick={handleCategory}/>
                </Col>
                <Col xs={12}  sm={9}>
                    <ProductList list={currentProducts}/>
                </Col>
            </Row>
            </Container>
           
        </div>
    )
}

export default Products