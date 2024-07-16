import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {addToCart} from "../../Store/CartSlice";
import {useDispatch} from "react-redux";

function HomeAllProduct(props) {
    const [productALl, setProductSale] = useState([]);


    const dispatch = useDispatch();
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

            const updatedProductALL = [
                {
                    id: 1,
                    price: "$180",
                    name: "Gamepad Pro-X1",
                    image: images[0],
                },
                {
                    id: 2,
                    price: "$170",
                    name: "Gamepad Turbo-Z",
                    image: images[1],
                },
                {
                    id: 3,
                    price: "$200",
                    name: "Gamepad Elite-7",
                    image: images[2],
                },
                {
                    id: 4,
                    price: "$190",
                    name: "Gamepad Fusion-5",
                    image: images[3],
                },
                {
                    id: 5,
                    price: "$160",
                    name: "Gamepad Sport-3",
                    image: images[4],
                },
                {
                    id: 6,
                    price: "$175",
                    name: "Gamepad Classic-4",
                    image: images[5],
                },
                {
                    id: 7,
                    price: "$165",
                    name: "Gamepad Lightning-2",
                    image: images[6],
                },
                {
                    id: 8,
                    price: "$155",
                    name: "Gamepad Wave-8",
                    image: images[7],
                },
                {
                    id: 9,
                    price: "$185",
                    name: "Gamepad Racer-9",
                    image: images[8],
                },
                {
                    id: 10,
                    price: "$165",
                    name: "Gamepad Speedster-6",
                    image: images[9],
                },
                {
                    id: 11,
                    price: "$190",
                    name: "Gamepad Adventure-1",
                    image: images[10],
                },
                {
                    id: 12,
                    price: "$175",
                    name: "Gamepad Comet-2",
                    image: images[11],
                }
            ];


            setProductSale(updatedProductALL);
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
        rows: 2,

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
            <div className="homeAll_products">
                <div className="homeAll_product-start">
                    <div className="blocks">
                        <div className="block"></div>
                        <p className='block-text'>Our Products</p>
                    </div>
                    <div className="Gtext">Explore Our Products</div>
                    <div className="homeAll_products-content">
                        <Slider {...settings}>
                            {productALl.map(item => (
                                <div className="home_product-sale-block" key={item.id}>
                                    <div className="homeAll_products-content-block">
                                        <img className="product_img" src={item.image} alt="Product"/>
                                        <p className='icon_img'>
                                            <i className="fa-solid fa-eye"></i>
                                        </p>
                                        <p className='like'><i className="fa-solid fa-heart"></i></p>
                                        <button onClick={() => handleAddToCart(item)} className="add-to-cart">Add to
                                            Cart
                                        </button>
                                    </div>
                                    <div className="homeAll_products-content-block-text">
                                    <p>{item.name}</p>
                                        <div className="homeAll_products-content-block-text-p">
                                            <span>{item.price}</span>
                                        </div>
                                    </div>

                                    <div className="grade">
                                        {/* Add grading stars or any other details here */}
                                    </div>


                                </div>
                            ))}
                        </Slider>
                        <div className="homeAll_products-content_btn">
                            <Link to="/products"><button className='btn'>View All Products</button></Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeAllProduct;