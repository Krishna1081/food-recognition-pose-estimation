import CardPushup from "./CardPushup";
import SitupCard from "./CardSitup";
import LungeCard from "./CardLunge";
import MountainClimbersCard from "./MountainClimbersCard";
import BurpeeCard from "./CardBurpee";
import JumpingJackCard from "./CardJumpingJack";
import HighKneeCard from "./CardHighKnee";
import LegRaisesCard from "./CardLegRaises";
import "../../functionality.css";

function AllCard() {
  return (
    <div>
      <h1 id="workout-counter">Know About The Workouts</h1>
      <div className="card-grid">
        <CardPushup />
        <SitupCard />
        <LungeCard />
        <MountainClimbersCard />
        <BurpeeCard />
        <JumpingJackCard />
        <LegRaisesCard />
        <HighKneeCard />
      </div>
    </div>
  );
}

export default AllCard;
