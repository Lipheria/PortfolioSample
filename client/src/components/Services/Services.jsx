import React,{useState} from 'react'
import Service from './Service';
import DynamicIcon from '../DynamicIcon/DynamicIcon';

function Services() {
    const serviceList = [
        {
            name:"UI/UX gner",
            icon:"UilWebGrid",
            services:["I develop the user interface","I develop the user interface","I develop the user interface"]
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
    ] 
    const [active,setActive] = useState("none");
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span onClick={()=>{setActive("UI/UX Designer");console.log(active)}} className="section__subtitle">What i offer </span>

            <div className="services__container container grid">
                {serviceList.map((service,key)=>{
                    return (<Service service={service} key={key} active={active} setActive={setActive} icon={<DynamicIcon name={service.icon} className="services__icon" size={24}/>}/>)
                })}
                
            </div>
        </section>
    )
}

export default Services;
