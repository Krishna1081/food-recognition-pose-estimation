import Card from "./Card";
import high_knee from "../../assets/high_knees.gif";

const CardHighKnee = () => {
  const HighKneeContent = (
    <ol>
      <li>
        Start standing tall with your feet hip-width apart and arms at your
        sides.
      </li>
      <li>
        Drive your right knee towards your chest as high as possible while
        keeping your core engaged.
      </li>
      <li>
        Quickly switch legs, bringing your left knee towards your chest as your
        right leg returns to the floor.
      </li>
      <li>
        Move at a quick pace, alternating knees while pumping your arms like
        you're running.
      </li>
      <li>Continue for the desired duration or number of reps.</li>
    </ol>
  );

  return (
    <Card image={high_knee} title="High knees" content={HighKneeContent} />
  );
};

export default CardHighKnee;
