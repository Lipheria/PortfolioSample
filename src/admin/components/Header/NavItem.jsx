import React from 'react'

function NavItem({icon,text,href}) {
    return (
        <li className="nav__item">
            <a href={href} className="nav__link">
                {icon}
                {text}
            </a>
        </li>
    )
}

export default NavItem
