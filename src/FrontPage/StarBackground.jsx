import React from 'react';
import './starryBackground.css';
import { useNavigate } from 'react-router-dom';

const RedirectButton = ({ onClick }) => {
  const style = {
      position: 'fixed',
      top: '10px',
      left: '50%', // Set the left edge to the middle of the container
      transform: 'translateX(-50%)', // Shift the button leftwards by half its width
      zIndex: 1000,
      backgroundColor: "#62efff",
      border: "none",
      borderRadius: "8px", // Increased border-radius for a more rounded appearance
      padding: "55px 65px", // Increased padding for a larger button size
      fontSize: "32px", // Increased font size for better readability
      color: "#000",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease"
  };

  return <button style={style} onClick={onClick}>Redirect</button>;
};


const StarBackground = () => {
    const navigate = useNavigate();
    const starCount = 750;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 100 + 'vw';
        const y = Math.random() * 100 + 'vh';

        const sizeClass = Math.random() > 0.5 
            ? (Math.random() > 0.75 ? 'large-star' : 'medium-star') 
            : 'small-star';
            
        stars.push(<div key={i} className={`star ${sizeClass}`} style={{ left: x, top: y }} />);
    }

    const redirectToRandomEndpoint = () => {
        const randomEndpoint = Math.random().toString(36).substr(2, 8).toUpperCase();
        navigate('/ParkourServer'+ '/' + randomEndpoint);
    };

    return (
        <div className="stars" style={{ left: '0px', bottom: '0px' }}>
            <RedirectButton onClick={redirectToRandomEndpoint} />
            {stars}
        </div>
    );
};

export default StarBackground;
