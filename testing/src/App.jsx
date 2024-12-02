import "./App.css";
import Main from "./Components/main";
// import VideosSection from "./Components/VideoSection";
// import Functionality from "./Components/Functionality";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodRecognition from "./Components/FoodRecognition";
import WorkoutTracker from "./Components/WorkoutTracker";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/food-tracker" element={<FoodRecognition />} />
          <Route path="/workout-tracker" element={<WorkoutTracker />} />
        </Routes>
      </Router>
    </main>
  );
}
