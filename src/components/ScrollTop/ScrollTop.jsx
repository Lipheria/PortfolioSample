import React from 'react'

function ScrollTop() {
    function scrollsUp(){
        const scrollsUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollsUp.classList.add('show-scroll'); else scrollsUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollsUp)
      
    return (
        <a href="#homeS" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollTop
