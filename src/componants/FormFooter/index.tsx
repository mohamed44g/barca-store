import { Link } from "react-router-dom";
import "./style.scss";

interface Iprops {
  url: string;
  text: string;
  highlight: string;
}

export default function index({ url, text, highlight }: Iprops) {
  return (
    <Link to={url} className="footer align-self-center fw-semibold">
      <p>
        {text} <span className="footer-highlight">{highlight}</span>
      </p>
    </Link>
  );
}
