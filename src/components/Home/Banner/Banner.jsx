import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { Navigate } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Elevate your Sound and Tech Experience
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam pariatur obcaecati iure culpa nostrum.</p>
                    <div className="ctas">
                        {/* <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div> */}
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
