import React,{useState} from 'react'
import Skill from './Skill';
import DynamicIcon from '../DynamicIcon/DynamicIcon';

function Skills() {
    const skills = [
        {
            category:"Frontend Developer",
            icon:"UilBracketsCurly",
            skills:[
                {
                name:"HTML",
                percentage:90,
                years:"4",

                },
                {
                    name:"CSS",
                    percentage:90,
                    years:"4",
    
                }
            ]
        },
        {
            category:"Backend Developer",
            icon:"UilServer",
            skills:[
                {
                name:"HTML",
                percentage:90,
                years:"4",

                },
                {
                    name:"CSS",
                    percentage:90,
                    years:"4",
    
                }
            ]
        },
        
    ];

    const [active,setActive] = useState(skills[0].category);
    
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level </span>

            <div className="skills__container container grid">
               
                <div>
                    {skills.map((skill,key) => 
                        (<Skill key={key} skill={skill} icon={<DynamicIcon name={skill.icon} 
                            className="skills__icon" size={32}/>} active={active} setActive={setActive}/>)
                    )} 
                    
                </div>
            </div>
        </section>
    )
}

export default Skills
