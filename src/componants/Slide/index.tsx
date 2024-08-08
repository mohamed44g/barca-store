import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Video from "../../assets/video/barca1.mp4";
export default function index() {
  return (
    <>
      <div className="slide-veiw">
        <video className="slide-img" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="slide-content d-flex flex-column justify-content-center align-items-center fade-in-up-title">
          <h1>
            Welcome to <br />
            <span className="title-highlight">Blaugrana World</span>
          </h1>
          <h2>The barcalona store</h2>
        </div>
      </div>
    </>
  );
}
