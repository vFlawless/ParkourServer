import React from 'react';
import './starryBackground.css';
import { useNavigate } from 'react-router-dom';

const RedirectButton = ({ onClick }) => {
    const style = {
        position: 'relative',
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

const PetStoreButton = () => {
    return (
        <div 
            style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                cursor: 'pointer'
            }}
            onClick={() => window.open('https://petstore-opal-three.vercel.app', '_blank')}
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="128" width="128" viewBox="0 0 512 512">
                <rect width="512" height="512" rx="15%"/>
                <path d="M102.507 401.018H411.85v15.9H102.507zm12.374-30.05h285.48v22.095H114.88zm-1.768-251h283.712v30.934H113.113zm281.944-8.84l8.84-9.72-149.37-34.47-148.485 34.47 8.84 9.722h139.646zM153.77 247.23l-.883-45.076-2.652-41.54c0-1.768 0-1.768-1.768-1.768a59.217 59.217 0 0 0-24.747 0c-.884 0-1.768 0-1.768 1.768l-1.767 41.54a1964.773 1964.773 0 0 0 0 112.248l1.767 38.005.884 7.07 13.258 2.652c5.303-.884 9.722-.884 14.14-2.65l.884-7.07 1.768-38.005a1428.283 1428.283 0 0 0 .883-67.172zm77.778 0l-1.767-45.076-1.768-41.54c0-1.768-.884-1.768-1.768-1.768a59.217 59.217 0 0 0-24.747 0c-1.768 0-1.768 0-1.768 1.768l-2.652 41.54a1964.773 1964.773 0 0 0 0 112.248l1.768 38.005.884 7.07c4.42 1.768 9.722 1.768 14.14 2.652l14.142-2.65v-7.07l1.768-38.005a1431.818 1431.818 0 0 0 1.767-67.172zm89.268 0l-.884-45.076-2.65-41.54c0-1.768 0-1.768-1.768-1.768a59.217 59.217 0 0 0-24.748 0c-.883 0-1.767 0-1.767 1.768l-1.768 41.54a1964.773 1964.773 0 0 0 0 112.248l1.77 38.005.884 7.07 13.257 2.652c4.42-.884 9.722-.884 14.142-2.65l.883-7.07 1.768-38.005a1435.353 1435.353 0 0 0 .884-67.172zm75.126 0l-.884-45.076-1.767-41.54c0-1.768-.884-1.768-1.768-1.768a59.217 59.217 0 0 0-25.631 0l-.884 1.768-2.652 41.54a1968.308 1968.308 0 0 0 0 112.248l1.768 38.005.884 7.07c4.42 1.768 8.838 1.768 14.14 2.652l13.258-2.65.884-7.07 1.767-38.005a1431.818 1431.818 0 0 0 .884-67.172z" fill="#fff"/>
            </svg>
        </div>
    );
}





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
        navigate('/PetHunt' + '/' + randomEndpoint);
    };

    const redirectToPetStore = () => {
        window.open('https://petstore-opal-three.vercel.app', '_blank');
    }



    return (
        <div className="stars" style={{ left: '0px', bottom: '0px' }}>
            {stars}
            <div className='buttons'>
                <RedirectButton onClick={redirectToRandomEndpoint} />
                <PetStoreButton />
            </div>
        </div>
    );
};

export default StarBackground;
