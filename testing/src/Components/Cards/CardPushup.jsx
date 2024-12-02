import Card from "./Card";
import pushup_gif from "../../assets/pushups-intense.gif";

const PushupCard = () => {
  const pushupContent = (
    <ol>
      <li>
        Start in a high plank position with your hands shoulder-width apart.
      </li>
      <li>Keep your body in a straight line from head to toe.</li>
      <li>Lower your chest towards the ground by bending your elbows.</li>
      <li>Stop when your chest is slightly above the ground.</li>
      <li>Push back up to the starting position by straightening your arms.</li>
      <li>Repeat for your desired number of reps.</li>
    </ol>
  );

  return (
    <Card
      image={pushup_gif}
      title="How to do a proper pushup?"
      content={pushupContent}
    />
  );
};

export default PushupCard;
