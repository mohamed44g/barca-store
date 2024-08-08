import { MdErrorOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

interface Iparam {
  message: string;
  type: string;
}

export default function AuthErrors() {
  const { state }: { state: Iparam } = useLocation();
  return (
    <>
      <div className="Error d-flex flex-column justify-content-center align-items-center">
        <MdErrorOutline size={"30%"} />
        <p className="Error_message fw-bold">{state?.message}</p>
        {state?.type === "auth" ? (
          <Link to={"/login"}>
            <button className="btn Error-btn">to Login</button>
          </Link>
        ) : (
          <Link to={"/"}>
            <button className="btn Error-btn">to Home</button>
          </Link>
        )}
      </div>
    </>
  );
}
