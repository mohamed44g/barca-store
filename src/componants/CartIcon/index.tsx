import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./style.scss";



export default function index({number} : {number : number}) {
  return (
    <div className="Store-icon d-flex flex-column align-items-center">
      <div className="cart-amount align-self-end">
        <p>{number}</p>
      </div>
      <NavLink to="/cart">
        <FaCartShopping color="#fff" size={25} />
      </NavLink>
    </div>
  );
}
