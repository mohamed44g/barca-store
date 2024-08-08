import "./style.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MatchSlide from "../../../componants/NextmatchSlide";
import Barca from "../../../assets/images/be8cf40ceac36007f28a50d9db97c538.png";
import Valincia from "../../../assets/images/valincia.png";
import Belbao from "../../../assets/images/belbao.png";
import { Getdata } from "../../../apis/getData";
import Loader from "../../../componants/Loader";
export default function Index() {
  const { data, isLoading, error } = Getdata("/users/matches", "matchesdata");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="Next-match">
      <h6 className="Next-match-title text-center fw-semibold">
        Up coming match
      </h6>
      <div className="Next-match-slides d-flex justify-content-center align-items-center">
        <div className="container">
          <Carousel
            infiniteLoop={false}
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
            showIndicators={false}
          >
            {data?.length != 0 &&
              data?.map((item) => {
                return (
                  <MatchSlide
                    team1={item.homeTeam.crest}
                    team2={item.awayTeam.crest}
                    matchDate={item.date}
                  />
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
