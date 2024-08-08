import { MdErrorOutline } from "react-icons/md";
import "./style.scss";

function ErrorPage() {
  return (
    <div className="Error d-flex flex-column justify-content-center align-items-center">
      <MdErrorOutline size={"30%"} />
      <p className="Error_message fw-bold">
        Oops! Sorry, an unexpected error has occurred please try again later.
      </p>
    </div>
  );
}

export default ErrorPage;
