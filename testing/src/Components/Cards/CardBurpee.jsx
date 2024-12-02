import Card from "./Card";
import mountain_gif from "../../assets/burpee.gif";

const CardBurpee = () => {
  const BurpeeContent = (
    <ol>
      <li>
        Start standing with your feet shoulder-width apart and your arms by your
        sides.
      </li>
      <li>
        Squat down and place your hands on the floor in front of you, just
        inside your feet.
      </li>
      <li>
        Jump your feet back so you land in a high plank position, with your body
        in a straight line from head to heels.
      </li>
      <li>
        Perform a push-up (optional), then jump your feet back towards your
        hands to return to the squat position.
      </li>
      <li>
        Explosively jump up, reaching your arms overhead, and land softly back
        in the standing position.
      </li>
      <li>Repeat for the desired number of reps.</li>
    </ol>
  );

  return (
    <Card
      image={mountain_gif}
      title="Who does the burpee?"
      content={BurpeeContent}
    />
  );
};

export default CardBurpee;
