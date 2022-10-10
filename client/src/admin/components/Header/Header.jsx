import React,{useState} from 'react'
import NavItem from './NavItem'
import { UilEstate,UilUser,UilFileAlt,UilBriefcaseAlt,UilScenery,UilMessage,UilTimes,UilApps } from '@iconscout/react-unicons'

function Header() {
    const [navToggle,setNavToggle] = useState(false); 
    const size="19.5";

    const navLink = document.querySelectorAll('.nav__link');
    function linkAction(){
        const navMenu = document.getElementById('nav-menu');
        // when we click on each nav__link, we rempve the show-menu class
        navMenu.classList.remove('show-menu');
    }
    
    navLink.forEach(n=>n.addEventListener('click', linkAction));

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#/" className="nav__logo">Hanis</a>
                <div className={navToggle ? "nav__menu show-menu" : "nav__menu"} id="nav-menu" >
                    <ul className="nav__list grid">
                        
                        {/* <NavItem icon={<UilEstate  size={size} href={"#homeS"}/>} text="Home"/> */}
                        <NavItem icon={<UilEstate size={size}/>} href={"#homeS"} text="Home"/>
                        <NavItem icon={<UilUser size={size}/>} href={"#about"} text="About"/>
                        <NavItem icon={<UilFileAlt size={size}/>} href={"#skills"} text="Skills"/>
                        <NavItem icon={<UilBriefcaseAlt size={size}/>} href={"#services"} text="Services"/>
                        <NavItem icon={<UilScenery size={size}/>} href={"#portfolio"} text="Portfolio"/>
                        <NavItem icon={<UilMessage size={size}/>} href={"#contact"} text="Contact Me"/>
                        <NavItem icon={<UilTimes  size={size} className="nav__close" onClick={()=>setNavToggle(!navToggle)}/>} />
                    </ul>
                </div>

                <div className="nav__btns">
                    <i className="uil uil-moon change-theme" id="theme-button"></i>
                    <div className="nav__toggle" id="nav-toggle" onClick={()=>setNavToggle(!navToggle)}>
                        <UilApps/>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;
