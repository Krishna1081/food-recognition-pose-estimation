import Card from "./Card";
import leg_raises from "../../assets/leg_raises.gif";

const CardLegRaises = () => {
  const LegRaisesContent = (
    <ol>
      <li>
        Lie flat on your back on a mat with your legs fully extended and your
        hands by your sides or under your lower back for support.
      </li>
      <li>
        Engage your core and keep your legs straight as you lift them together
        until they form a 90-degree angle with your torso.
      </li>
      <li>
        Slowly lower your legs back down without letting them touch the floor,
        maintaining tension in your core.
      </li>
      <li>
        Repeat the movement for the desired number of reps, keeping control
        throughout.
      </li>
    </ol>
  );

  return (
    <Card image={leg_raises} title="Leg Raises" content={LegRaisesContent} />
  );
};

export default CardLegRaises;
