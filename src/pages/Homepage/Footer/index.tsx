import "./style.scss";
import Logo from "../../../assets/images/be8cf40ceac36007f28a50d9db97c538.png";

export default function index() {
  return (
    <footer className="Footer d-flex justify-content-around align-items-center">
      <div className="Footer-logo d-flex align-items-center gap-2">
        <img src={Logo} alt="" />
        <p className="Footer-logo-text fs-5 fw-bold">Fc Barclona</p>
      </div>

      <div className="Footer-text">
        <p className="fw-bold">&#169; Copyright FC Barcelona Official website of FC Barcelona</p>
      </div>
    </footer>
  );
}
