import React from 'react';
import ps5 from "../../assets/Images/ps5.png";
import arrival1 from "../../assets/Images/arrival1.png";
import arrival2 from "../../assets/Images/arrival2.png";

function HomeArrival(props) {
    return (
        <div>
            <div className="home_arrival">
                <div className="home_arrival-start">
                    <div className="blocks">
                        <div className="block"></div>
                        <p className='block-text'>Featured</p>
                    </div>
                    <div className="Gtext">New Arrival</div>
                    <div className="home_arrival-content">
                        <div className="home_arrival-content-start">
                            <div className="home_arrival-content-left">
                                <img src={ps5} alt="img"/>
                                <div className="home_arrival-content-left-text">
                                    <h4>PlayStation 5</h4>
                                    <p>Black and White version of the PS5 coming out on sale.</p>
                                    <a href="">Shop now</a>
                                </div>
                            </div>
                            <div className="home_arrival-content-right">
                                <div className="home_arrival-content-right-blocks">
                                    <img
                                        src='https://avatars.mds.yandex.net/get-altay/1886165/2a0000016e9cf8994fbdd8b15d7b50081075/orig'
                                        alt="img"/>
                                    <div className="home_arrival-content-left-text">
                                        <h4>Women’s Collections</h4>
                                        <p>Featured woman collections that give you another vibe.</p>
                                        <a href="">Shop now</a>
                                    </div>
                                </div>

                                <div className="home_arrival-content-blocks-start">
                                    <div className="home_arrival-content-right-block">
                                        <div className="home_arrival-content-right-block-img">
                                            <img src={arrival1} alt="arrival1"/>
                                            <div className="home_arrival-content-left-text">
                                                <h4>Speakers</h4>
                                                <p> Amazon wireless speakers</p>
                                                <a href="">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home_arrival-content-right-block">
                                        <div className="home_arrival-content-right-block-img">
                                            <img src={arrival2} alt="arrival1"/>
                                            <div className="home_arrival-content-left-text">
                                                <h4>Perfume</h4>
                                                <p>GUCCI INTENSE OUD EDP</p>
                                                <a href="">Shop now</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeArrival;