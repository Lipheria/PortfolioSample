import React, { useState } from 'react';
import {UilGraduationCap,UilBriefcaseAlt} from '@iconscout/react-unicons';
import Qualification from './Qualification';

function Qualifications() {
    const [qualification, setQualification] = useState("Education");

    const qualificationEducation = 
    [
            {
                name:"Computer Engineer",
                location:"Peruversity",
                date:"2009 - 2014"
            },
            {
                name:"Web Design",
                location:"Spain Institute",
                date:"2014 - 2017"
            },
            {
                name:"Master in UI/UX",
                location:"Peru Institute",
                date:"2017 - 2019"
            },
            {
                name:"Computer Engineer",
                location:"Peru University",
                date:"2019 - 2021"
            }
    ];

    const qualificationWork = 
    [
        {
            name:"Computer Engineer",
            location:"Peru University",
            date:"2009 - 2014"
        },
        {
            name:"Web Design",
            location:"Spain Institute",
            date:"2014 - 2017"
        },
        {
            name:"Master in UI/UX",
            location:"Peru Institute",
            date:"2017 - 2019"
        }
    ];

    return (
        <section className="qualification sections">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal Journey</span>
            
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex" onClick={()=>setQualification("Education")}>
                        <UilGraduationCap className="qualification__icon" />
                        Education
                    </div>
                    <div className="qualification__button button--flex" onClick={()=>setQualification("Work")}>
                        <UilBriefcaseAlt className="qualification__icon" />
                        Work
                    </div>
                </div>
                <div className="qualification__sections">
                    {/* Qualification Contnet 1 */}
                    {qualification==="Education"?<Qualification qualificationList={qualificationEducation} />:null}
                    
                    {/* Qualification Contnet 2 */}
                    {qualification==="Work"?<Qualification qualificationList={qualificationWork} />:null}

                </div>
            </div>
        </section>
    )
}

export default Qualifications;
