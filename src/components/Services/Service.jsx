import React from 'react'
import {UilArrowRight,UilTimes,UilCheckCircle} from '@iconscout/react-unicons';

function Service({service,icon,active,setActive}) {
    return (
        <div className="services__content">
            {icon}
            <h3 className="services__title">{service.name}</h3>

            <span className="button button--flex button--small button--link services__button" onClick={()=>setActive(service.name)}>
                View More <UilArrowRight className="button__icon"/>
            </span>

            <div className={active===service.name?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <h4 className="services__modal-title">{service.name}</h4>
                    <UilTimes className="services__modal-close" onClick={()=>setActive("none")}/>

                    <ul className="services__modal-services grid">
                        {service.services.map((item,key)=>{
                            return (
                                <li key={key} className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon"/>
                                    <p>{item}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Service;
