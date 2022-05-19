import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/category";
import Slider from "../../components/slider";
import CartContext from "../../context/cartContext/cart-context";
import { Banner, Category, getBanners, getCategories } from "../../services/commonServices";
import './index.scss'

const Home = () => {
  const [banners , setBanners] = useState<Banner[]>([])
  const [categories , setCategories] = useState<Category[]>([])
  const { setSelectedCategory } = useContext(CartContext);
  const navigate = useNavigate()


  useEffect(() => {
    getCategoriesList()
    getSliderImages()
  },[])

  const getCategoriesList = useCallback(async() => {
    const list= await getCategories()
   setCategories(list)
  },[categories])

  
  const getSliderImages = useCallback(async() => {
    const list = await getBanners()
   setBanners(list)
  },[banners])

  const handleSelectedCategory = (category: string) => {
    debugger
    setSelectedCategory(category)
    navigate('/products')
  }

    return (
        <Container className="mt-1">
            <section>
               <Slider list={banners} /> 
            </section>
            <section className="mt-4 mt-md-0">
            {categories && categories.length>0 && categories.filter(x => x.enabled).map((category , index) => (
             <CategoryCard category={category} index={index} key={index}  openCategory={handleSelectedCategory}/>

            ))}
            </section>           
        </Container>
    )
}

export default Home