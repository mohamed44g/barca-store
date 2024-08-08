import { NavLink } from "react-router-dom";
import logo from "../../assets/images/fc-barcelona-logo-svgrepo-com.svg";
import Cart from "../CartIcon";
import "./style.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getProductsCart } from "../../apis/getProductCart";

interface IProduct {
  id:string;
  name: string;
  price: number;
  img: string;
  amount: number;
}
export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, loggedIn } = useSelector(
    (state: RootState) => state?.Cart
  );
  useEffect(() => {
    dispatch(getProductsCart());
  }, [dispatch]);
  return (
    <div className="nav d-flex justify-content-center">
      <ul className="d-flex justify-content-between align-items-center">
        <NavLink className="Nav-link fw-semibold" to={"/"}>
          Home
        </NavLink>
        <NavLink className="Nav-link fw-semibold" to={"/store"}>
          Store
        </NavLink>
        <NavLink className="Nav-link fw-semibold" to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        {loggedIn ? (
          <NavLink className="Nav-link fw-semibold" to={"/logout"}>
            logout
          </NavLink>
        ) : (
          <NavLink className="Nav-link fw-semibold" to={"/login"}>
            Login
          </NavLink>
        )}
        <div className="Cart-icon">
          <Cart number={cartItems?.data?.length ?? cartItems?.length ?? 0} />
        </div>
      </ul>
    </div>
  );
}
