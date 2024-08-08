import "./style.scss";
import { lazy } from "react";
import { Getdata } from "../../apis/getData";
import Loader from "../Loader";
const PlayerCard = lazy(() => import("../NewsCard"));

interface Iplayer {
  _id: string;
  img: string;
  name: string;
}

function Banner() {
  const { data, isLoading } = Getdata("users/player", "playersData");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="Banner">
      <div className="Banner-track">
        {data?.data?.length != 0 &&
          data?.data?.map((item: Iplayer) => {
            return (
              <PlayerCard
                key={item._id}
                img={item.img}
                title={item.name}
                className="Player-card"
                cardId={item._id}
              />
            );
          })}

        {data?.data?.length != 0 &&
          data?.data?.map((item: Iplayer) => {
            return (
              <PlayerCard
                key={item._id}
                img={item.img}
                title={item.name}
                className="Player-card"
                cardId={item._id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Banner;
