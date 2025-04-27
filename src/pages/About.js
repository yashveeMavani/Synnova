import React from 'react';
import '../styles/About.css';
import aboutImage from '../logo/Group pic of Synnova BoD for website.jpg';
import vinodImage from '../logo/Mr_Urvesh_Akabari.png';
import rajeshImage from '../logo/Mr_Pankaj_Babaria.png';
import ajayImage from '../logo/Mr_Satish_Mavani.png';
import nitinImage from '../logo/Mr_Suresh_Vekaria.png';
import johnImage from '../logo/Mr_Jaman_Patel.png';
import janeImage from '../logo/Mr_Diptesh_Patel.png';
import robertImage from '../logo/Mr_K_C_Chovatiya.png';


const leaders = [
    {
        name: 'Mr. Vinod K. Doshi',
        title: 'Chairman',
        description: 'He has over 40 years of experience in manufacturing and precision engineering.',
        img: vinodImage,
    },
    {
        name: 'Mr. Rajesh V. Doshi',
        title: 'Managing Director',
        description: 'He leads business development, strategy, and operations with a vision for growth.',
        img: rajeshImage,
    },
    {
        name: 'Mr. Ajay V. Doshi',
        title: 'Executive Director',
        description: 'He oversees technology upgrades, innovation, and manufacturing excellence.',
        img: ajayImage,
    },
    {
        name: 'Mr. Nitin V. Doshi',
        title: 'Executive Director',
        description: 'He specializes in supply chain management and quality assurance at Synnova.',
        img: nitinImage,
    },
    {
        name: 'Mr. John Doe',
        title: 'Chief Technology Officer',
        description: 'He leads digital transformation and innovation initiatives.',
        img: johnImage,
    },
    {
        name: 'Ms. Jane Smith',
        title: 'Chief Financial Officer',
        description: 'She manages financial planning, risk management, and investments.',
        img: janeImage,
    },
    {
        name: 'Mr. Robert Brown',
        title: 'Chief Marketing Officer',
        description: 'He drives marketing strategies and brand growth globally.',
        img: robertImage,
    },
];


const About = () => {
    return (
        <div className="about-container">
            {/* About Us Section */}
            <h1 className="about-title">About Us</h1>
            <div className="about-image-container">
                <img src={aboutImage} alt="About Us" className="about-image" />
            </div>
            <p className="about-description">
                Synnova Gears & Transmissions Pvt Ltd is a leading provider of precision engineered transmission solutions,
                specializing in the manufacture of high-quality gears, gearboxes, and drive systems for various industrial applications.
                <br /><br />
                With a strong focus on innovation, technology, and quality, Synnova has established itself as a trusted partner for industries 
                worldwide seeking reliable and efficient power transmission solutions.
            </p>

            {/* Leadership Section */}
            <h2 className="leadership-title">Our Leadership Team</h2>
            
            {/* First Row - Chairman and Mission/Vision */}
            <div className="leadership-grid-first-row">
                <div className="leader-card first-leader">
                    <img src={leaders[0].img} alt={leaders[0].name} className="leader-image" />
                    <div className="leader-info">
                        <h3>{leaders[0].name}</h3>
                        <p className="leader-title">{leaders[0].title}</p>
                        <p className="leader-description">{leaders[0].description}</p>
                    </div>
                </div>

                <div className="mission-vision-container">
                    <div className="card">
                        <h2>Our Mission</h2>
                        <p>
                            To deliver world-class transmission products and services that enhance customer productivity and drive sustainable growth.
                        </p>
                    </div>
                    <div className="card">
                        <h2>Our Vision</h2>
                        <p>
                            To be a global leader in transmission technology, delivering innovative, reliable, and high-performance solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Remaining Leadership Team */}
            <div className="leadership-grid">
                {leaders.slice(1).map((leader, index) => (
                    <div key={index} className="leader-card">
                        <img src={leader.img} alt={leader.name} className="leader-image" />
                        <div className="leader-info">
                            <h3>{leader.name}</h3>
                            <p className="leader-title">{leader.title}</p>
                            <p className="leader-description">{leader.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
