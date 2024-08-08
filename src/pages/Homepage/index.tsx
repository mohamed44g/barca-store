import "./style.scss";
import Slide from "../../componants/Slide";
import Navbar from "../../componants/Navbar";
import NextMatch from "./NextMatch";
import News from "./News";
import BestMoments from "./BestMoments";
import T_shirts from "./T-shirts";
import Players from "./Players";
import Cups from "./Cups";
import Footer from "./Footer";
export default function index() {
  return (
    <>
      <div className="Homepage">
        <Navbar />
        <Slide/>
      </div>
      <NextMatch />
      <News />
      <BestMoments />
      <T_shirts />
      <Players />
      <Cups />
      <Footer />
    </>
  );
}
