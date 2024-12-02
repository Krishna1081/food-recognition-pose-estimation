import Card from "./Card";
import mountain_gif from "../../assets/Mountain_Climber.gif";

const MountainClimbersCard = () => {
  const MountainClimberContent = (
    <ol>
      <li>
        Start in a high plank position with your hands placed directly under
        your shoulders and your body in a straight line from head to heels.
      </li>
      <li>Engage your core and pull your right knee towards your chest.</li>
      <li>
        Quickly switch legs, bringing your left knee towards your chest while
        pushing the right leg back to the starting position.
      </li>
      <li>
        Continue alternating legs as quickly as you can, maintaining a steady
        pace.
      </li>
      <li>
        Keep your hips stable and avoid raising them too high or letting them
        drop.
      </li>
      <li>For best results, try to keep the movement fluid and controlled.</li>
    </ol>
  );

  return (
    <Card
      image={mountain_gif}
      title="What is a Mountain Climber?"
      content={MountainClimberContent}
    />
  );
};

export default MountainClimbersCard;
