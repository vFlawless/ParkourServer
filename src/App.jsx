import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarBackground from './FrontPage/StarBackground';

function App() {
  return (
    <Router>
      <div className="App">
        <StarBackground />
        <Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
