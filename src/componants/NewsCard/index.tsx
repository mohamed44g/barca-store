import { Link } from "react-router-dom";
import "./style.scss";
import { useInView } from "react-intersection-observer";

interface Iprops {
  img: string;
  title: string;
  className?: string;
  cardId?: string;
}
export default function Index({ img, title, className, cardId }: Iprops) {
  const { ref, inView } = useInView();
  if (className) {
    return (
      <Link to={`/player/${cardId || 0}`} className="card-container">
        <div ref={ref} className={`card ${className} text-center`}>
          <img src={img} className="card-img-top" alt="..." loading="lazy" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link to={`news/${cardId || 0}`} className="card-container">
        <div ref={ref} className={`card text-center ${inView && "fade-in-up"}`}>
          <img src={img} className="card-img-top" alt="..." loading="lazy" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </Link>
    );
  }
}
