import Card from "./Card";
import lunge_gif from "../../assets/lunges-workout.gif";

const LungeCard = () => {
  const LungeContent = (
    <ol>
      <li>
        Start by standing tall with your feet hip-width apart and hands on your
        hips (or with dumbbells if you prefer).
      </li>
      <li>
        Step forward with your right leg, lowering your hips to drop your body
        straight down.
      </li>
      <li>
        Ensure both knees are at 90-degree angles, with the front knee directly
        above the ankle.
      </li>
      <li>The back knee should hover just above the floor.</li>
      <li>Push through the front heel to return to the starting position.</li>
      <li>Repeat on the other side by stepping forward with your left leg.</li>
      <li>Continue alternating legs for your desired number of reps.</li>
    </ol>
  );

  return (
    <Card
      image={lunge_gif}
      title="How to do a proper lunge?"
      content={LungeContent}
    />
  );
};

export default LungeCard;
