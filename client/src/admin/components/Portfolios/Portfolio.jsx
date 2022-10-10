import React from 'react'
import {UilArrowRight} from '@iconscout/react-unicons';
import port from "../../assets/img/portfolio1.jpg"
function Portfolio({data}) {
    return (
        <div className="portfolio__content grid swiper-slide">
            <img src={port} alt="" />
            <div className="portfolio__date">
                <h3 className="portfolio__title">{data.title}</h3>
                <p className="portfolio__description">{data.description}</p>
                <a href="#/" className="button button--flex button--small portfolio__button">
                    Demo
                    <UilArrowRight className="button__icon"/>
                </a>
            </div>
        </div>
    )
}

export default Portfolio;
