import React, { useState, useEffect } from 'react';
import './Leaderboard.css';
import StarBackground from '../FrontPage/StarBackground';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();
  const [cachedData, setCachedData] = useState({}); // Cache for storing fetched data
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading status
  const [timePeriod, setTimePeriod] = useState('all-time');

  const fetchData = async () => {
    if (cachedData[timePeriod]) {
      // If data for the current time period is cached, use it
      setLeaderboardData(cachedData[timePeriod]);
      return;
    }
    
    setIsLoading(true); // Start loading
    try {
      const url = new URL('https://api.luxcompanionapi.com/getLeaderboard');
      url.searchParams.append('type', timePeriod); // Append 'type' as a query parameter

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLeaderboardData(data);
      setCachedData(prevData => ({ ...prevData, [timePeriod]: data })); // Cache the new data
    } catch (error) {
      console.error("Could not fetch the leaderboard data", error);
    }
    setIsLoading(false); // Stop loading
  };

  useEffect(() => {
    fetchData();
  }, [timePeriod]); // fetchData will be called whenever timePeriod changes

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
  };

  const noEntriesMessage = () => {
    switch (timePeriod) {
      case 'weekly':
        return 'In this week, there were no pets found.';
      case 'monthly':
        return 'In this month, there were no pets found.';
      default:
        return 'There were no pets found.'; // Default message, though you mentioned 'all-time' will always have entries
    }
  }

  const handleBackClick = () => {
    navigate('/PetHunt');
  };

  const handleImageClick = () => {
    window.open('https://chromewebstore.google.com/detail/lux-webmasters-companion/ahlpejjcloljgnhfjfkdocmibjhmcjfm?hl=en-GB', '_blank');
  };

  return (
    <div>
      <StarBackground />
      <div className="leaderboard">
        <button className="back-button" onClick={handleBackClick}>Back</button>
        <img src="https://res.cloudinary.com/dapzljsu7/image/upload/v1699837444/ucczzxpgw11nvqznmnmv.png" alt="Extension Logo" className="extension-logo" onClick={handleImageClick} />
        <h1 className="leaderboard-title">Leaderboard</h1>
        <div className="time-period-selector">
          <button
            className={timePeriod === 'all-time' ? 'active' : ''}
            onClick={() => handleTimePeriodChange('all-time')}>
            All Time
          </button>
          <button
            className={timePeriod === 'monthly' ? 'active' : ''}
            onClick={() => handleTimePeriodChange('monthly')}>
            Monthly
          </button>
          <button
            className={timePeriod === 'weekly' ? 'active' : ''}
            onClick={() => handleTimePeriodChange('weekly')}>
            Weekly
          </button>
        </div>
        {isLoading ? (
          <div className="loading-indicator">Loading...</div> // Loading message or spinner
        ) : (
          <ul className="leaderboard-list">
            {leaderboardData.length > 0 ? (
              leaderboardData.map((entry, index) => (
                <li key={index} className="leaderboard-entry">
                  <span className="rank">{index + 1}</span>
                  <span className="name">{entry[0]}</span>
                  <span className="score">{entry[1]}</span>
                </li>
              ))
            ) : (
              <p className="no-entries-message">{noEntriesMessage()}</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
