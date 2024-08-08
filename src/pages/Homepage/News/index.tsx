import "./style.scss";
import Title from "../../../componants/Title";
import Img1 from "../../../assets/images/mini_MESSI-E-INIESTA-COPA-01.jpg";
import { lazy } from "react";
import { Getdata } from "../../../apis/getData";
import Loader from "../../../componants/Loader";

const NewsCard = lazy(() => import("../../../componants/NewsCard"));

export default function index() {
  const { data, isLoading} = Getdata("/users/news", "newsdata");
  if (isLoading) return <Loader />;
  return (
    <div className="News">
      <div className="container">
        <Title title="Barcalona History" />
        <div className="News-cards d-flex justify-content-center flex-wrap gap-5">
          {data.data &&
            data?.data.map((item) => {
              return (
                <NewsCard
                  key={item._id}
                  img={item.img}
                  title={item.name}
                  cardId={item._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
