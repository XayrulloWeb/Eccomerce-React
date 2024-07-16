import React from 'react';
import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faApple, faBilibili,
    faBimobject,
    faCpanel,
    faGoogle,
    faSteam,
    faUikit,
    faWpexplorer,
    faXbox, faXTwitter
} from "@fortawesome/free-brands-svg-icons";

function HomeCategories(props) {
    const categoriesHome = [
        {
            id: 1,
            icon: faApple,
            name: 'Phones'
        },
        {
            id: 2,
            icon: faXbox,
            name: 'Xbox'
        },
        {
            id: 3,
            icon: faSteam,
            name: 'Steam'
        },
        {
            id: 4,
            icon: faGoogle,
            name: 'Google'
        },
        {
            id: 5,
            icon: faCpanel,
            name: 'Cpanel'
        },
        {
            id: 6,
            icon: faUikit,
            name: 'Uikit'
        },
        {
            id: 7,
            icon: faWpexplorer,
            name: 'Wpexplorer'
        },
        {
            id: 8,
            icon: faBimobject,
            name: 'Bimobject'
        },
        {
            id: 9,
            icon: faXTwitter,
            name: 'Twitter'
        },
        {
            id: 10,
            icon: faBilibili,
            name: 'faBilibili'
        },

    ];
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6.4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 4.7,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.5,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2.8,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.7,
                },
            },
        ],
    };
    return (
        <div>

            <div className="home_categories">
                <div className="home_categories-start">
                    <div className="blocks">
                        <div className="block"></div>
                        <p className='block-text'>Categories</p>
                    </div>
                    <div className="home_product-categories-content">
                        <div className="Gtext">Browse By Category</div>
                    </div>

                    <Slider {...settings}>
                        {categoriesHome.map(category => (
                            <div key={category.id}>
                                <div className="home_categories-content-box">
                                    <FontAwesomeIcon className="icon_home" icon={category.icon}/>
                                    <p>{category.name}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default HomeCategories;