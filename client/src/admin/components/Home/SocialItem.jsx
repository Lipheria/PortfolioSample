import React from 'react'

const SocialItem = ({icon}) => {
    return (
        <a href="#/" target="_blank" className="home__social-icon">
            {icon}
        </a>
    )
}

export default SocialItem;
