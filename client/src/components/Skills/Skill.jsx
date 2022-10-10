import React from 'react';
import {UilAngleDown} from '@iconscout/react-unicons';

function Skill({skill,icon,active,setActive}) {
    const onToggleClick = (category) =>{
        if(active===category){
            setActive("none");
        }else{
            setActive(category);
        }
    }
    return (
        <div className={active===skill.category? "skills__content skills__open":"skills__content skills__close"} >
            <div className="skills__header" onClick={()=>onToggleClick(skill.category)}>
                {icon}
                <div>
                    <h1 className="skills__titles">{skill.category}</h1>
                    <span className="skills__subtitle">More than {skill.years} year(s)</span>
                </div>
                <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                <UilAngleDown className="skills__arrow" size={32} />
            </div>

            <div className="skills__list grid">
                {(skill.skills).map((skillItem,key) => 
                    <div key={key} className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">{skillItem.name}</h3>
                            <span className="skills__number">{skillItem.percentage}%</span>
                        </div> 
                        <div className="skills__bar">
                            <span className="skills__percentage skills__css"></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    
    )
}

export default Skill;
