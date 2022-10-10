import React from 'react'
import AboutImg from "../../assets/img/about.jpg";
import CV from "../../assets/pdf/Hanis-CV.pdf";
import {UilDownloadAlt} from '@iconscout/react-unicons';

function About() {
    
    const about={
        description:"Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.",
        projectsWorkedOn:10,
        yearsOfExperience:20,
        companiesWorkedIn:2
    }
    
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                       {about.description}
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">{about.yearsOfExperience > 9 ? about.yearsOfExperience: "0" + about.yearsOfExperience}+</span>
                            <span className="about__info-name">Years <br /> experience</span>    
                        </div>
                        <div>
                            <span className="about__info-title">{about.projectsWorkedOn>9 ? about.projectsWorkedOn: "0"+about.projectsWorkedOn}+</span>
                            <span className="about__info-name">Completed <br /> project</span>    
                        </div>
                        <div>
                            <span className="about__info-title">{about.companiesWorkedIn>9 ? about.companiesWorkedIn: "0"+about.companiesWorkedIn}+</span>
                            <span className="about__info-name">Companies <br /> Worked</span>    
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href={CV} className="button button--flex">
                            Download CV <UilDownloadAlt className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
