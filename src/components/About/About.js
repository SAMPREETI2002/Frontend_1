import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
    // Sample data for images and descriptions
    const teamMembers = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            description: 'John Doe - CEO',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            description: 'Jane Smith - CTO',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            description: 'Mike Johnson - COO',
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            description: 'Emily Davis - CFO',
        },
    ];

    return (
        <div>
            {/* Navbar component can be added here */}
            <div className="about-container">
                <h1>About Us</h1>
                <p>
                    At Telstar, we are dedicated to providing top-notch telecom services to connect you with the world. 
                    Our mission is to deliver reliable, fast, and affordable services to meet your personal and business needs.
                </p>
            </div>

            <div className="team-section">
                <h2>Our Team</h2>
                <div className="team-grid">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-member">
                            <img src={member.image} alt={member.description} />
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="customer-reviews">
                <h2>What Our Customers Say</h2>
                <div className="review">
                    <p>“Best telecom service I’ve ever used!” - Harshit Rana</p>
                </div>
                <div className="review">
                    <p>“Reliable and fast Internet, highly recommend!” - Radhika Menon</p>
                </div>
            </div>
        </div>
    );
}

export default About;
