import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import product_banner from "../../assets/Images/banner_product.png"
import service from "../../assets/Icons/Services.png"
import service2 from "../../assets/Icons/Services2.png"
import service3 from "../../assets/Icons/Services3.png"


import HomeProductSale from "./HomeProductSale";
import HomeBanner from "./HomeBanner";
import HomeCategories from "./HomeCategories";
import HomeAllProduct from "./HomeAllProduct";
import HomeArrival from "./HomeArrival";

const Home = () => {


    return (
        <div className="home">
            <div className="container">
                <div className="home_start">
                    <HomeBanner/>
                    <HomeProductSale/>
                    <HomeCategories/>
                    <div className="homesale_banner">
                        <div className="home_sale-banner-start">
                            <div className="home_sale-banner-text">
                                <p>Categories</p>
                                <h2>Enhance Your <br/> Music Experience</h2>
                                <button>Buy Now!</button>
                            </div>
                            <div className="hom_sale-banner-product">
                                <img src={product_banner} alt="product"/>
                            </div>
                        </div>
                    </div>
                    <HomeAllProduct/>
                    <HomeArrival/>
                    <div className="home_service-about">
                        <div className="home_service-about-start">
                            <div className="home_service-about-block">
                                <img src={service} alt="service"/>
                                <h3>FREE AND FAST DELIVERY</h3>
                                <p>Free delivery for all orders over $140</p>
                            </div>
                            <div className="home_service-about-block">
                                <img src={service2} alt="service"/>
                                <h3>24/7 CUSTOMER SERVICE</h3>
                                <p>Friendly 24/7 customer support</p>


                            </div>
                            <div className="home_service-about-block">
                                <img src={service3} alt="service"/>
                                <h3>MONEY BACK GUARANTEE</h3>
                                <p>We reurn money within 30 days</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
