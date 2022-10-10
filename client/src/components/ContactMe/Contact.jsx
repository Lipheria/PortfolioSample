import React from 'react'

function Contact() {
    const contact = {
        phone: "+234 909 4242 810",
        email: "hapsahanis.hh@gmail.com",
        location:"Yola, Adamawa State"
    }
    return (
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
                            <span className="contact__subtitle">{contact.phone}</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">
                                Email Me
                            </h3>
                            <span className="contact__subtitle">{contact.email}</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-location-point contact__icon"></i>
                        <div>
                            <h3 className="contact__title">
                                Location
                            </h3>
                            <span className="contact__subtitle">{contact.location}</span>
                        </div>
                    </div>
                </div>
                <form className="contact__form grid" action="">
                <div className="contact__inputs grid">
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Name</label>
                        <input type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Email</label>
                        <input type="email" className="contact__input" />
                    </div>
                </div>
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">Project</label>
                    <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">Message</label>
                    <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                </div>
                <div>
                    <a href="#/" className="button button--flex">
                        Send Message
                        <i className="uil uil-message button__icon"></i>
                    </a>
                </div>
                
                </form>
            </div>
        </section>
    )
}

export default Contact
