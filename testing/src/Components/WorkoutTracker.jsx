// import { useState } from "react";
// import axios from "axios";
// import "../functionality.css"; // Import the CSS file
// import Navbar from "./navbar";
// // import AllCard from "./Cards/AllCards";
// function WorkoutTracker() {
//   const [pushups, setPushups] = useState(null);
//   async function startPushups() {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:5000/api/data/pushups"
//       );
//       const resolute = response.data;
//       setPushups(resolute.max_pushups);

//       console.log(resolute);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   return (
//     <div>
//       <Navbar />
//       {/* <h1>A little Information about the workouts we provide...</h1> */}
//       {/* <AllCard /> */}
//       <h1 id="workout-counter">Workout Counter</h1>
//       <button onClick={startPushups}>Pushups</button>
//       <p>
//         {pushups == null ? (
//           0
//         ) : (
//           <p>
//             Number of pushups: {pushups}, Calories burnt: {pushups * 0.3}
//           </p>
//         )}
//       </p>
//     </div>
//   );
// }

// export default WorkoutTracker;

import { useState } from "react";
import axios from "axios";
import "../functionality.css"; // Import the CSS file
import Navbar from "./navbar";
import Footer from "./Footer";
import AllCard from "./Cards/AllCards";

function WorkoutTracker() {
  // State for tracking multiple exercises
  const [exerciseData, setExerciseData] = useState({
    pushups: null,
    situps: null,
    burpees: null,
    highknees: null,
    jumpingjacks: null,
    legraises: null,
    lunges: null,
    mountainclimbers: null,
  });

  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(false); // State for loading indicator

  async function startExercise(exerciseName) {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/data/${exerciseName}`
      );
      const result = response.data;
      setExerciseData((prevData) => ({
        ...prevData,
        [exerciseName]: result.max_reps || 0,
      }));
      console.log(`${exerciseName} results:`, result);
    } catch (err) {
      console.error("Error:", err);
      setError(`Failed to fetch data for ${exerciseName}. Please try again.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <AllCard />
      <h1 id="workout-counter">Workout Tracker</h1>
      <div className="workout-buttons">
        {/** Buttons for each exercise */}
        {[
          "pushups",
          "situps",
          "burpees",
          "highknees",
          "jumpingjacks",
          "legraises",
          "lunges",
          "mountainclimbers",
        ].map((exercise) => (
          <button
            key={exercise}
            className="workout-button"
            onClick={() => startExercise(exercise)}
          >
            {exercise.charAt(0).toUpperCase() + exercise.slice(1)}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}

      {error && <p className="error-message">{error}</p>}

      <div className="workout-results">
        {/** Display results for each exercise */}
        {Object.entries(exerciseData).map(([exercise, count]) => (
          <div key={exercise} className="workout-result">
            <h2>{exercise.charAt(0).toUpperCase() + exercise.slice(1)}</h2>
            <p>Reps Completed: {count === null ? 0 : count}</p>
            <p>Calories Burned: {(count || 0) * 0.3}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default WorkoutTracker;
