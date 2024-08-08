import "./style.scss";

interface IProps {
  team1: string;
  team2: string;
  matchDate: string;
  classname?: string;
}
export default function index({ team1, team2, matchDate, classname }: IProps) {
  return (
    <div className="Next-match-card d-flex justify-content-between align-items-center">
      <div className="team1">
        <img src={team1} alt="Barca logo" />
      </div>
      <div className="info">
        <p className="fs-1">- : -</p>
        <p>{matchDate}</p>
      </div>
      <div className={`team2 ${classname}`}>
        <img src={team2} alt="ManCity logo" />
      </div>
    </div>
  );
}
