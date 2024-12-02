import { useState } from "react";
import axios from "axios";
import "../functionality.css"; // Import the CSS file
import Navbar from "./navbar";

const Functionality = () => {
  const [pushups, setPushups] = useState(null);
  const [foodDetected, setFoodDetected] = useState(null);

  const Food_Items = {
    Bread: {
      calories: 79,
      proteins: 2.7,
      carbs: 14.0,
      fats: 1.0,
    },
    Apples: {
      calories: 95,
      proteins: 0.5,
      carbs: 25.0,
      fats: 0.3,
    },
    Rice: {
      calories: 206,
      proteins: 4.3,
      carbs: 45.0,
      fats: 0.4,
    },
    Roti: {
      calories: 71,
      proteins: 2.7,
      carbs: 15.0,
      fats: 0.4,
    },
    Chocolate: {
      calories: 208,
      proteins: 2.2,
      carbs: 24.0,
      fats: 12.0,
    },
    Chips: {
      calories: 152,
      proteins: 2.0,
      carbs: 15.0,
      fats: 10.0,
    },
    Biscuits: {
      calories: 54,
      proteins: 0.8,
      carbs: 7.0,
      fats: 2.4,
    },
    Water: {
      calories: 0,
      proteins: 0.0,
      carbs: 0.0,
      fats: 0.0,
    },
    Samosa: {
      calories: 262,
      proteins: 6.0,
      carbs: 32.0,
      fats: 13.0,
    },
    Puff: {
      calories: 300,
      proteins: 5.0,
      carbs: 34.0,
      fats: 17.0,
    },
  };

  async function startPushups() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/data/pushups"
      );
      const resolute = response.data;
      setPushups(resolute.max_pushups);

      console.log(resolute);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function foodDetection() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/api/data/food-detection"
      );
      const resolute = response.data;
      setFoodDetected(resolute);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="container">
      <Navbar />
      <h1 id="workout-counter">Workout Counter</h1>
      <button onClick={startPushups}>Pushups</button>
      <p>
        {pushups == null ? (
          0
        ) : (
          <p>
            Number of pushups: {pushups}, Calories burnt: {pushups * 0.3}
          </p>
        )}
      </p>

      <div className="divider"></div>

      <h1 id="food-detection">Food Detection</h1>
      <button onClick={foodDetection}>Detect</button>
      <div>
        {foodDetected == null ? (
          "No Data Yet"
        ) : (
          <ul>
            {Object.entries(foodDetected).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
                <br />
                {Food_Items[key] ? (
                  <span>
                    Calories : {Food_Items[key].calories * [value]},
                    <br />
                    Proteins:{Food_Items[key].proteins * [value]},
                    <br />
                    Carbs: {Food_Items[key].carbs * [value]},
                    <br />
                    Fats: {Food_Items[key].fats * [value]}
                  </span>
                ) : (
                  <span>Data not available</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Functionality;
