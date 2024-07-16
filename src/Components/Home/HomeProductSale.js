import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from "react-router-dom";
import { addToCart } from "../../Store/CartSlice";
import { useDispatch } from "react-redux";
import Timer from "../Timer/Timer";

function HomeProductSale(props) {
    const dispatch = useDispatch();

    const [productSale, setProductSale] = useState([]);

    useEffect(() => {
        async function getProductSaleWithImages() {
            const API_KEY = 'fHezQRFq43KDDrKhPZ0e3SGi66hf9SBlQIqsFWX4d7gtme50Kh3Alerl';
            const query = 'gamepad';
            const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=30`, {
                headers: {
                    Authorization: API_KEY
                }
            });

            const data = await response.json();
            const images = data.photos.map(photo => photo.src.medium);

            const updatedProductSale = [
                {
                    id: 1,
                    price: "$180",
                    sale: "$150",
                    name: "Gamepad Pro-X1",
                    discount: 30,
                    image: images[0],
                },
                {
                    id: 2,
                    price: "$170",
                    sale: "$130",
                    name: "Gamepad Turbo-Z",
                    discount: 23,
                    image: images[1],
                },
                {
                    id: 3,
                    price: "$200",
                    sale: "$160",
                    name: "Gamepad Elite-7",
                    discount: 20,
                    image: images[2],
                },
                {
                    id: 4,
                    price: "$190",
                    sale: "$140",
                    name: "Gamepad Fusion-5",
                    discount: 26,
                    image: images[3],
                },
                {
                    id: 5,
                    price: "$160",
                    sale: "$120",
                    name: "Gamepad Sport-3",
                    discount: 25,
                    image: images[4],
                },
                {
                    id: 6,
                    price: "$175",
                    sale: "$135",
                    name: "Gamepad Classic-4",
                    discount: 22,
                    image: images[5],
                },
                {
                    id: 7,
                    price: "$165",
                    sale: "$125",
                    name: "Gamepad Lightning-2",
                    discount: 24,
                    image: images[6],
                },
                {
                    id: 8,
                    price: "$155",
                    sale: "$115",
                    name: "Gamepad Wave-8",
                    discount: 26,
                    image: images[7],
                },
                {
                    id: 9,
                    price: "$185",
                    sale: "$145",
                    name: "Gamepad Racer-9",
                    discount: 21,
                    image: images[8],
                },
                {
                    id: 10,
                    price: "$165",
                    sale: "$125",
                    name: "Gamepad Speedster-6",
                    discount: 24,
                    image: images[9],
                },
                {
                    id: 11,
                    price: "$190",
                    sale: "$150",
                    name: "Gamepad Adventure-1",
                    discount: 21,
                    image: images[10],
                },
                {
                    id: 12,
                    price: "$175",
                    sale: "$135",
                    name: "Gamepad Comet-2",
                    discount: 22,
                    image: images[11],
                }
            ];


            setProductSale(updatedProductSale);
        }

        getProductSaleWithImages();
    }, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        console.log(item)
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4.4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3.7,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.1,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1.8,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1.2,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="home_product-sale">
                <div className="blocks">
                    <div className="block"></div>
                    <p className='block-text'>Today’s</p>
                </div>
                <Timer />
                <div className="home_product-sale-start">
                    <Slider {...settings}>
                        {productSale.map(item => (
                            <div className="home_product-sale-block" key={item.id}>
                                <div className="home_product-sale-block-start">
                                    <img className="product_img" src={item.image} alt="Product" />
                                    <p className="sale">-{item.discount}%</p>
                                    <p className='icon_img'>
                                        <i className="fa-solid fa-eye"></i>
                                    </p>
                                    <p className='like'><i className="fa-solid fa-heart"></i></p>
                                    <button onClick={() => handleAddToCart(item)} className="add-to-cart">Add to Cart</button>
                                </div>
                                <div className="home_product-sale-block-text">
                                    <p>{item.name}</p>
                                    <div className="home_product-sale-p">
                                        <p>{item.sale}</p>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                                <div className="grade">
                                    {/* Add grading stars or any other details here */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="home_btn">
                    <Link to="/products"><button className="btn">All Products</button> </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeProductSale;
