import { useDispatch, useSelector } from "react-redux";
import Card from "../../../componants/CartCard";
import "./style.scss";
import { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { getProductsCart } from "../../../apis/getProductCart";
import Loader from "../../../componants/Loader";

import { Link } from "react-router-dom";

interface Iproduct {
  id: string;
  img: string;
  name: string;
  price: number;
  amount: number;
}

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, cartItems, error } = useSelector(
    (state: RootState) => state?.Cart
  );
  let total = 0;

  useEffect(() => {
    dispatch(getProductsCart());
  }, [dispatch]);

  if (loading === true) {
    return <Loader />;
  }

  if (error?.response?.status == 401) {
    return (
      <div className="Cart_message d-flex justify-content-center align-items-center fs-4">
        <p>
          Cart is empty please
          <Link to={"/login"} className="Login-highlight fw-bold">
            login
          </Link>
          to show products
        </p>
      </div>
    );
  }

  return (
    <div className="Cart d-flex flex-column">
      {cartItems?.data?.length !== 0 &&
        cartItems?.data !== undefined &&
        cartItems.data?.map((item: Iproduct) => {
          total += item.price * item.amount;
          return (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              amount={item.amount}
              price={item.price}
            />
          );
        })}

      {cartItems?.data?.length != 0 && cartItems?.data != undefined ? (
        <>
          <hr />
          <div className="Cart-footer d-flex justify-content-between align-items-center mt-3">
            <Link to={"/payment"}>
              <button className="btn Cart-btn">Check out</button>
            </Link>
            <p>Total: {total}$</p>
          </div>
        </>
      ) : (
        <div className="Cart_message d-flex justify-content-center align-items-center fs-4">
          <p>Cart is empty please add some product</p>
        </div>
      )}
    </div>
  );
}
