import React, { useState, useEffect } from 'react';
import { Icons } from '../../assets/exports';

const ContactMe = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="contact-me-container">
            <div className="horizontal-line-container">
                <div className="horizontal-line" />
                <h2>Contact Me</h2>
                <div className="horizontal-line" />
            </div>
            <div className="contact-details">
                <div className="contact-item">
                    <img src={Icons.mail} alt="mail-icon" />
                    <span>dalabanjandheeraj@gmail.com</span>
                </div>
                <div className="contact-item">
                    <img src={Icons.message} alt="phone" />
                    <span>9113241023</span>
                </div>
                <div className="contact-item">
                    <img src={Icons.location} alt="location" />
                    <span>Bangalore, India</span>
                </div>
            </div>
            <hr />
            <div className="thanks-message">
                <p>"Thanks for Scrolling"</p>
            </div>

            <img
                src={Icons.arrowUp}
                alt="arrow-up"
                onClick={scrollTop}
                style={{ display: showScroll ? 'block' : 'none' }}
                className="scroll-to-top"
            />
        </div>
    );
};

export default ContactMe;
