import React from 'react'
import SocialItem from './SocialItem'
import { UilLinkedinAlt,UilDribbble,UilGithubAlt,UilMessage,UilMouseAlt,UilArrowDown } from '@iconscout/react-unicons'
import HomeImg from './HomeImg';


function Home() {
    const homeData={
        title:"Hi I'am Hanis",
        subtitle:"Full-Stack Developer",
        description:"High level experience in web design and development knowledge, producing quality work."

    }
    return (
        <section className="home section" id="homeS">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <SocialItem icon={<UilLinkedinAlt size={20} />} />
                        <SocialItem icon={<UilDribbble size={20}/>} />
                        <SocialItem icon={<UilGithubAlt size={20}/>} />
                    </div>
                    <div className="home__img">
                        <HomeImg />
                    </div>
                    <div className="home__data">
                        <h1 className="home__title"> {homeData.title} </h1>
                        <h3 className="subtitle"> {homeData.subtitle} </h3>
                        <p className="home__description">{homeData.description}</p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <UilMessage className="button__icon" size={20}/>
                        </a>
                    </div>
                </div>
                <div className="home__scroll" >
                    <a href="#portfolio" className="home__scroll-button button--flex">
                        <UilMouseAlt className="home__scroll-mouse" size={32}/>
                        <span className="home__scroll-name">
                            Scroll Down 
                        </span>
                        <UilArrowDown  className="home__scroll-arrow" size={20}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home;
