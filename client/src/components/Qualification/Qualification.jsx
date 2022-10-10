import React from 'react'
import {UilCalendarAlt} from '@iconscout/react-unicons';

function Qualification({qualificationList}) {

    return (
        <div className="qualification__content">
            {qualificationList.map((qualification, key) => {
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
                        <h3 className="qualification__title">{qualification.name}</h3>
                        <span className="qualification__subtitle">{qualification.location}</span>
                        <div className="qualification__calender">
                            <UilCalendarAlt /> {qualification.date}
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

    )
}

export default Qualification;
