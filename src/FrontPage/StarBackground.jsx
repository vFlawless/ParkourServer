import './starryBackground.css';
import React from 'react';

const StarBackground = () => {
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

    return (
        <div className="stars" style={{ left: '0px', bottom: '0px' }}>
            {stars}
        </div>
    );

};

export default React.memo(StarBackground);