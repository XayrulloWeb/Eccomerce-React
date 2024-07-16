import React from 'react';
import apple from "../../assets/Images/apple.png";
import iphone from "../../assets/Images/image_iphone.png";
import {Link} from "react-router-dom";

function HomeBanner(props) {
    return (
        <div>
            <div className="home_banner">
                <div className="home_links">
                    <ul>
                        <li><a href="">Woman’s Fashion</a> <i className="fa-solid fa-angle-right"></i></li>
                        <li><a href="">Men’s Fashion</a> <i className="fa-solid fa-angle-right"></i></li>
                        <li><a href="">Electronics</a></li>
                        <li><a href="">Home & Lifestyle</a></li>
                        <li><a href="">Medicine</a></li>
                        <li><a href="">Sports & Outdoor</a></li>
                        <li><a href="">Baby’s & Toys</a></li>
                        <li><a href="">Health & Beauty</a></li>
                        <li><a href="">Groceries & Pets</a></li>
                    </ul>
                </div>
                <div className="home_banner_start">
                    <div className="home_banner-content">
                        <div className="home_banner-text">
                            <div className="home_banner-paragraph">
                                <img src={apple} alt="icon"/>
                                <p>iPhone 14 Series</p>
                            </div>
                            <h4>Up to 10% <br/> off Voucher</h4>
                            <div className="home_banner-link">
                                <Link to="/products">Shop Now </Link><i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="home_banner-img">
                            <img src={iphone} alt="img iphone"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeBanner;