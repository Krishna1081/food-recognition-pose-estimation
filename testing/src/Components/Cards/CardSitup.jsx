import Card from "./Card";
import situp_gif from "../../assets/Situps.gif";

const SitupCard = () => {
  const situpContent = (
    <ol>
      <li>
        Lie on your back with your knees bent and feet flat on the ground.
      </li>
      <li>Place your hands behind your head or cross them on your chest.</li>
      <li>Engage your core and lift your upper body towards your knees.</li>
      <li>Slowly lower back down to the starting position.</li>
      <li>Repeat for your desired number of reps.</li>
    </ol>
  );

  return (
    <Card
      image={situp_gif}
      title="How to do a proper Situp?"
      content={situpContent}
    />
  );
};

export default SitupCard;
