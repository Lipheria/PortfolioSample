import React,{useState} from 'react'
import SocialItem from './SocialItem'
import { UilLinkedinAlt,UilDribbble,UilGithubAlt,UilDownloadAlt,UilPlus,UilGraduationCap,UilBriefcaseAlt, UilArrowRight} from '@iconscout/react-unicons'
import AboutImg from "../../../assets/img/about.jpg";
import CV from "../../../assets/pdf/Hanis-CV.pdf";
import testimonial1 from "../../../assets/img/testimonial1.jpg"
import testimonial2 from "../../../assets/img/testimonial2.jpg"
import testimonial3 from "../../../assets/img/testimonial3.jpg"
import port from "../../../assets/img/portfolio1.jpg"
import project from "../../../assets/img/project.png";


function Home() {
    const [qualification,setQualification] = useState('Education');
    const addSkill = (key) =>{
        let temp = data.skills;
        temp[key].skills.push({
            name:"",
            percentage:0,
            years:""
        })
        
        setData({...data,skills:temp});
    }
    
    const addCategory = () =>{
        let temp = data.skills;
        temp.push(
            {
                category:"",
                icon:"",
                years:"",
                skills:[]
            }
        )
        
        setData({...data,skills:temp});
    }

    const addProject = () =>{
        let temp = data.portfolioData;
        const portdata = {
            title:"",
            description:"",
            image:port
        }

        temp.push(portdata);

        setData({...data,portfolioData:temp});
    }
    // const remove = (key,type)=>{
    //     console.log(key);
    //     var tempData = data.portfolioData;
    //     tempData.splice(key,1);
       
    //     setData({...data,portfolioData:tempData});
    // }
    

   
    const [projects, setProjects] = useState([])
    const removeProject = (id) => {
        const temp = data.portfolioData;
        const removeProj = temp.pop(id)
        setProjects(removeProj);
      };
    
    var [data,setData] = useState({
        home:{
            title:"Hi i'm Hanis",
            subtitle:"Full-Stack Developer",
            description:"High level experience in web design and development knowledge, producing quality work."
        },
        about:{
            description:"Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.",
            projectsWorkedOn:10,
            yearsOfExperience:20,
            companiesWorkedIn:2
        },
        skills:[
            {
                category:"Frontend Developer",
                icon:"UilBracketsCurly",
                years:"4",
                skills:[
                    {
                        name:"HTML",
                        percentage:90,
                    },
                    {
                        name:"CSS",
                        percentage:90,
                    }
                ]
            },
            {
                category:"Backend Developer",
                icon:"UilServer",
                years:"4",
                skills:[
                    {
                        name:"HTML",
                        percentage:90,
                    },
                    {
                        name:"CSS",
                        percentage:90,
        
                    }
                ]
            }
        ],
        qualificationEducation:[
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
        ],
        qualificationWork:[
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
        ],
        serviceList:[
            {
                name:"UI/UX gner",
                icon:"UilWebGrid",
                services:["aI develop the user interface","I develop the user interface","I develop the user interface"]
            },
            {
                name:"UI/UX Deer",
                icon:"UilWebGrid",
                services:["I develop the user interface","I develop the user interface","I develop the user interface"]
            },
            {
                name:"UI/UX Designer",
                icon:"UilWebGrid",
                services:["I develop the user interface","I develop the user interface","I develop the user interface"]
            }
        ],
        contact : {
            phone: "+234 909 4242 810",
            email: "hapsahanis.hh@gmail.com",
            location:"Yola, Adamawa State"
        },
        testimonial: [
            {
            name: "a Jones",
            rating: 5,
            text: "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day"
            },
            {
            name: "b Jones",
            rating: 5,
            text: "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day"
            },
            {
            name: "c Jones",
            rating: 5,
            text: "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day"
            },
            {
            name: "d Jones",
            rating: 5,
            text: "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day"
            }
            
        ],
        portfolioData : [
            {
                title:"Mordern Website",
                description:"a Website adaptable to all devices, with ui components and animated interactions.",
                demo:"www.google.com",
                image:''
            },
            {
                title:"Mordern Website",
                description:"b Website adaptable to all devices, with ui components and animated interactions.",
                demo:"www.google.com",
                image:''
            },
            {
                title:"Mordern Website",
                description:"c Website adaptable to all devices, with ui components and animated interactions.",
                demo:"www.google.com",
                image:''
            },
            {
                title:"Mordern Website",
                description:"d Website adaptable to all devices, with ui components and animated interactions.",
                demo:"www.google.com",
                image:''
            },
            {
                title:"Mordern Website",
                description:"e Website adaptable to all devices, with ui components and animated interactions.",
                demo:"www.google.com",
                image:''
            }
        ],
        projectInMind : {
            header: "You have a new project",
            text: "Contact me now and get a 30% discount on your new project."
        }
    });

    
    

    return (
        <>
        <section className="home section admin" id="homeS">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <SocialItem icon={<UilLinkedinAlt size={20} />} />
                        <SocialItem icon={<UilDribbble size={20}/>} />
                        <SocialItem icon={<UilGithubAlt size={20}/>} />
                    </div>
                    <div className="home__img">
                        {/* <HomeImg /> */}
                    </div>
                    <div className="home__data">
                        <h1 className="home__title"> 
                            <input type="text" className="contact__input" defaultValue={data.home.title} 
                                onChange={(e)=>data.home.title=e.target.value} /> 
                        </h1>
                        <h3 className="subtitle"> 
                            <input type="text" className="contact__input" defaultValue={data.home.subtitle} 
                                onChange={(e)=>data.home.subtitle=e.target.value} /> 
                        </h3>
                        <p className="home__description">
                            <textarea rows="4" type="text" className="contact__input" defaultValue={data.home.description} 
                                onChange={(e)=>data.home.description=e.target.value} /> 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">

                <div className="about__data">
                    <p className="about__description">
                        <textarea rows="5" type="text" className="contact__input" defaultValue={data.about.description} 
                            onChange={(e)=>data.about.description=e.target.value} /> 
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">
                                <input type="text" className="contact__input" defaultValue={data.about.yearsOfExperience} 
                                onChange={(e)=>data.about.yearsOfExperience=e.target.value} />
                            </span>
                            <span className="about__info-name">Years <br /> experience</span>    
                        </div>
                        <div>
                            <span className="about__info-title">
                                <input type="text" className="contact__input" defaultValue={data.about.projectsWorkedOn} 
                                onChange={(e)=>data.about.projectsWorkedOn=e.target.value} /> 
                            </span>
                            <span className="about__info-name">Completed <br /> project</span>    
                        </div>
                        <div>
                            <span className="about__info-title">
                                <input type="text" className="contact__input" defaultValue={data.about.companiesWorkedIn} 
                                onChange={(e)=>data.about.companiesWorkedIn=e.target.value} /> 
                            </span>
                            <span className="about__info-name">Companies <br /> Worked</span>    
                        </div>
                    </div>
                    <div className="about__buttons">
                        <span className="button button--flex">
                            Download CV <UilDownloadAlt className="button__icon" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                My technical level <br />
                <div className="button button--flex" style={{cursor:"pointer"}} onClick={()=>addCategory()}>
                    Add Skill Categoory <UilPlus className="button__icon" /> 
                </div>
            </span>

            

            <div className="skills__container container grid">
                <div>
                    {data.skills.map((skill,key) => (
                        <div className="skills__content skills__open" key={key}>
                            <div className="skills__header">
                                {/* {skill.icon} */}
                                <div className="bigger">
                                    <input type="text" placeholder="Category Name" className="contact__input" defaultValue={skill.category} 
                                        onChange={(e)=>{data.skills[key].category=e.target.value;} } /> 
                                    <span className="skills__subtitle smaller">More than 
                                        <input type="text" placeholder="years" style={{width:"20%",textAlign:"center"}} className="contact__input" defaultValue={skill.years} 
                                            onChange={(e)=>{data.skills[key].years=e.target.value;} } /> 
                                     year(s)</span>
                                </div>
                            </div>
                
                            <div className="skills__list grid">
                                {(skill.skills).map((skillItem,key) => 
                                    <div key={key} className="skills__data">
                                        <div className="skills__titles">
                                            <h3 className="skills__name">
                                            <input type="text" placeholder="Skill Name" className="contact__input" style={{minWidth:"60%",float:"right"}} defaultValue={skillItem.name} 
                                              onChange={(e)=>{data.skills[key].name=e.target.value;} } />    
                                            </h3>
                                            <span className="skills__number">
                                                <input type="text" placeholder="%" className="contact__input" style={{width:"30%",float:"right"}} defaultValue={skillItem.percentage} 
                                                    onChange={(e)=>{data.skills[key].percentage=e.target.value;} } /> 
                                            </span>
                                        </div> 
                                        <div className="skills__bar">
                                            <span className="skills__percentage skills__css"></span>
                                        </div>
                                    </div>
                                )}
                                <div className="about__buttons" onClick={()=>addSkill(key)}>
                                    <span className="button button--flex">
                                        Add {skill.category} Skill <UilPlus className="button__icon" /> 
                                    </span>
                                </div>
                            </div>
                        </div>
                    )) } 
                    
                </div> 
            </div>
        </section>
    
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
                    {qualification==="Education"?
                        <div className="qualification__content">
                            {data.qualificationEducation.map((qualification, key) => {
                                return(
                                <div className="qualification__data" key={key}>
                                    {(key%2)!==0 ? 
                                        <>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        </>
                                        : null
                                    }
                                    <div>
                                        <input type="text" placeholder="Qualification Title" className="contact__input" defaultValue={qualification.name} 
                                            onChange={(e)=>{data.qualificationEducation[key].name=e.target.value;} } /> 
                                        <input type="text" placeholder="Location" className="contact__input" defaultValue={qualification.location} 
                                            onChange={(e)=>{data.qualificationEducation[key].location=e.target.value;} } /> 

                                        <div className="qualification__calender">
                                            <input type="text" placeholder="Date" className="contact__input" style={{width:'100%'}} defaultValue={qualification.date}
                                            onChange={(e)=>{data.qualificationEducation[key].date=e.target.value;} } />
                                        </div>
                                    </div>
                                    {(key%2)===0 ? 
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        : null
                                    }
                                </div>
                                )
                            
                            })
                            }
                
                        </div>
                    :null}
                    
                    {/* Qualification Contnet 2 */}
                    {qualification ==="Work"?    <div className="qualification__content">
                            {data.qualificationWork.map((qualification, key) => {
                                return(
                                <div className="qualification__data" key={key}>
                                    {(key%2)!==0 ? 
                                        <>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        </>
                                        : null
                                    }
                                    <div>
                                        <input type="text" placeholder="Qualification Title" className="contact__input" defaultValue={qualification.name} 
                                            onChange={(e)=>{data.qualificationWork[key].name=e.target.value;} } /> 
                                        <input type="text" placeholder="Location" className="contact__input" defaultValue={qualification.location} 
                                            onChange={(e)=>{data.qualificationWork[key].location=e.target.value;} } /> 

                                        <div className="qualification__calender">
                                            <input type="text" placeholder="Date" className="contact__input" style={{width:'100%'}} defaultValue={qualification.date}
                                            onChange={(e)=>{data.qualificationWork[key].date=e.target.value;} } />
                                        </div>
                                    </div>
                                    {(key%2)===0 ? 
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        : null
                                    }
                                </div>
                                )
                            
                            })
                            }
                
                        </div>
                    :null}
                    

                </div>
            </div>
        </section>
          
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer </span>

            <div className="services__container container grid">
                {data.serviceList.map((service,key)=>{
                    return (
                        <div key={key} className="services__content">
                            <input type="text" placeholder="Icon" className="contact__input" style={{width: "80%", marginBottom: "10px"}} 
                                defaultValue={service.icon}   onChange={(e)=>{data.serviceList[key].icon=e.target.value;} }/>
                            
                            <input type="text" placeholder="Title" className="contact__input" style={{width: "80%"}} 
                                defaultValue={service.name} onChange={(e)=>{data.serviceList[key].name=e.target.value;} } />
                
                            <span className="button button--flex button--small button--link services__button">
                                --------------------
                            </span>
                            {service.services.map((item,key1)=>{
                                return (
                                    <span key={key1}>
                                        {/* <UilCheckCircle className="services__modal-icon"/> */}
                                        <input type="text" placeholder="description" className="contact__input" style={{width: "80%", marginBottom: "10px"}} 
                                            defaultValue={item} onChange={(e)=>{data.serviceList[key].services[key1]=e.target.value;} }/>
                                    </span>
                                );
                            })}
                                    
                        </div>
            
                    )
                })}
                
            </div>
        </section>

        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">
                Most recent works
                <br />
                <div onClick={()=>addProject()} className="button button--flex button--small">
                    Add Project
                    <UilPlus className="button__icon" />
                </div>
            </span>
            
        

            <div className="portfolio__containe container">
                <div className="swiper-wrappe">
                    {data.portfolioData.map((portfolioItem,key)=>{
                        return( 
                            <div key={key} className="portfolio__content grid swiper-slid" style={{marginBottom:"15px"}}>
                                <img src={port} alt={portfolioItem.title} />
                                <div className="portfolio__date">
                                    <h3 className="portfolio__title">
                                        <input type="text" className="contact__input" placeholder="Project Title" defaultValue={portfolioItem.title} 
                                            onChange={(e)=>{data.portfolioData[key].title=e.target.value}}/>

                                        <input type="text" className="contact__input" placeholder="Web-Url" defaultValue={portfolioItem.demo} 
                                            onChange={(e)=>{data.portfolioData[key].demo=e.target.value}}/>
                                    </h3>
                                    <p className="portfolio__description">
                                        <textarea className="contact__input" id="" cols="30" rows="4" placeholder="Project Description"
                                            onChange={(e)=>{data.portfolioData[key].description=e.target.value}} defaultValue={portfolioItem.description} />
                                    </p>
                                    {key}
                                    <span  onClick={()=>removeProject(key,'portfolioData')} className="button button--flex button--small portfolio__button red" style={{width:"100%",textAlign:'center'}}>
                                        Remove
                                    </span>
                                </div>
                            </div>
                         )
                    })}
                </div>
            
            </div>
        </section>

        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <input className="contact__input" type="text" placeholder="Insert title here" style={{marginBottom:"10px"}}
                           onChange={(e)=>{data.projectInMind.header=e.target.value}} defaultValue={data.projectInMind.header} />
                        <div className="project__description">
                            <textarea rows="3" cols="3" type="text" className="contact__input" placeholder="Insert promo here" 
                                onChange={(e)=>{data.projectInMind.text=e.target.value}} defaultValue={data.projectInMind.text}/>
                        </div>
                        <a href="#/contact" style={{marginBottom:"20px"}} className="button button--flex button--white">
                            Contact Me
                            <i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>
                    <img src={project} alt="" className="project__img" />
                </div>
            </div>
        </section>
        
        <section className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My Client sayings</span>
            <div className="testimonial__container container swiper">
                <div className="swiper-wrapper">
                    {data.testimonial.map((testimony,key)=>{
                         return(
                            <div key={key} className="testimonial__content swiper-slide">
                                <div className="testimonial__data">
                                    <div className="testimonial__header">
                                        <img src={testimonial1} alt="" className="testimonial__img" />
                                        <div>
                                            <input type="text" placeholder="Name" className="contact__input" style={{width: "90%", marginBottom: "10px"}} 
                                                onChange={(e)=>{data.testimonial[key].name=e.target.value}} defaultValue={testimony.name} />
                                            <span className="testimonial__client">Client</span>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="number" className="contact__input"  defaultValue={testimony.rating} 
                                        onChange={(e)=>{data.testimonial[key].rating=e.target.value}} style={{width: "50%", marginBottom: "10px"}}/>
                                    </div> 
                                </div>
                                <p className="testimonial__description">
                                    <textarea name="" cols="30" rows="4" className="contact__input" 
                                       onChange={(e)=>{data.testimonial[key].text=e.target.value}} placeholder="Testimonial description" defaultValue={testimony.text}></textarea>
                                </p>
                            </div>
                           
                        )
                    })}
                </div>
                <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>
        </section>

        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in Touch</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">
                                Call Me
                            </h3>
                            <input type="text" placeholder="Number" className="contact__input" 
                                defaultValue={data.contact.phone} onChange={(e)=>{data.contact.phone=e.target.value;} }/>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">
                                Email Me
                            </h3>
                            <input type="text" placeholder="Number" className="contact__input" 
                                defaultValue={data.contact.email} onChange={(e)=>{data.contact.email=e.target.value;} }/>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-location-point contact__icon"></i>
                        <div>
                            <h3 className="contact__title">
                                Location
                            </h3>
                            <input type="text" placeholder="Number" className="contact__input" 
                                defaultValue={data.contact.location} onChange={(e)=>{data.contact.location=e.target.value;} }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

       
    

        
    
        </>

        
    )
}

export default Home;
