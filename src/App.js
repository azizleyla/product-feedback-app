import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import FeedbackDetail from './components/feedback/FeedbackDetail';
import Home from './components/pages/Home';
import FeedbackForm from './components/feedback/FeedbackForm';
import Roadmap from './components/sidebar/Roadmap';
import RoadmapDetail from './components/pages/RoadmapDetail';

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/feedback/:id/detail" element={<FeedbackDetail />} />
        <Route path="/add-feedback" element={<FeedbackForm />} />
        <Route path="/edit/feedback/:id" element={<FeedbackForm />} />
        <Route path="/roadmap" element={<RoadmapDetail />} />
      </Routes>
    </div>
  );
}

export default App;
