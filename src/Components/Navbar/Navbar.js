import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import LikeIcon from '../../assets/Icons/Like.png';
import search from '../../assets/Icons/search.png';
import CartIcon from '../../assets/Icons/Cart.png';


function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);
    return (
        <div className="navbar">
            <div className="navbar_top">
                <div className="container">
                    <div className="navbar_top-start">
                        <div className="navbar_pusto"></div>
                         <div className="navbar_top-text">
                             <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                             <a href="#">ShopNow </a>
                         </div>
                         <div className="navbar_top-languages">
                             <select name="languages" id="languages">
                                 <option value="en">English</option>

                                 <option value="uz">Uzb</option>
                                 <option value="ru">Russian</option>
                             </select>
                         </div>
                    </div>
                </div>
            </div>
            <div className="navbar_bottom">
                <div className="container">
                    <div className="navbar_bottom-start">
                        <div className="navbar_logo">
                            <Link to="/">Exclusive</Link>
                        </div>
                        <div className={`navbar_links ${isOpen ? 'open' : ''}`}>
                            <ul>
                                <li><Link to='/' href="">Home</Link></li>
                                <li><Link to='/' href="">Contact</Link></li>
                                <li><Link to='/' href="">About</Link></li>
                                <li><Link to='/' href="">Sign Up</Link></li>
                            </ul>
                        </div>

                        <div className="navbar_content">
                            <div className="navbar_content-search">
                                <input type="text" placeholder="What are you looking for?"/>
                                <img src={search} alt="icon"/>

                            </div>
                            <div className="navbar_icons">
                                <img src={LikeIcon} alt="icon"/>
                                <Link to="/cart">
                                    <img src={CartIcon} alt="icon"/>

                                </Link>
                            </div>
                        </div>
                        <button className="burger" onClick={toggleMenu}>
                            ☰
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Navbar;