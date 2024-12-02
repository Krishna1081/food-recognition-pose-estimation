import Card from "./Card";
import mountain_gif from "../../assets/jumping_jack.gif";

const CardJumpingJack = () => {
  const JumpingJackContent = (
    <ol>
      <li>
        Start standing upright with your feet together and hands by your sides.
      </li>
      <li>
        Jump up, spreading your legs shoulder-width or wider while
        simultaneously raising your arms above your head.
      </li>
      <li>
        Jump again, bringing your feet back together and lowering your arms to
        your sides.
      </li>
      <li>
        Repeat the movement in a steady, rhythmic motion for the desired
        duration or number of reps.
      </li>
    </ol>
  );

  return (
    <Card
      image={mountain_gif}
      title="How do you do a jumping jack?"
      content={JumpingJackContent}
    />
  );
};

export default CardJumpingJack;
