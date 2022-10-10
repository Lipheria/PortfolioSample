import React from 'react'
import Portfolio from './Portfolio'; 
function Portfolios() {
    const portfolioData=[
        {
            title:"Mordern Website",
            description:"Website adaptable to all devices, with ui components and animated interactions.",
            image:"../../assets/img/portfolio1.jpg"
        },
        {
            title:"Mordern Website",
            description:"Website adaptable to all devices, with ui components and animated interactions.",
            image:"../../assets/img/portfolio1.jpg"
        },
        {
            title:"Mordern Website",
            description:"Website adaptable to all devices, with ui components and animated interactions.",
            image:"../../assets/img/portfolio1.jpg"
        }
    ];
   return(
     <section className="portfolio section" id="portfolio">
         <h2 className="section__title">Portfolio</h2>
         <span className="section__subtitle">Most recent works</span>

         <div className="portfolio__container container swiper">
            <div className="swiper-wrapper">
                {portfolioData.map((portfolioItem,key)=>{
                    return( <Portfolio data={portfolioItem} key={key} />)
                })}
            </div>
            
            <div className="swiper-button-next"><i className="uil uil-angle-right-b swiper-portfolio-icon"></i></div>
            <div className="swiper-button-prev"><i className="uil uil-angle-left-b swiper-portfolio-icon"></i></div>

            <div className="swiper-pagination"></div>
         </div>
     </section>
   )
}

export default Portfolios;
