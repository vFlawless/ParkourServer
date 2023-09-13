import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarBackground from './FrontPage/StarBackground';

function App() {
  return (
    <Router>
      <div className="App">
        <StarBackground />
        <Routes>
          <Route path="/AWDka" element={<div>Sample Component for AWDka</div>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
