import Logo from "../../assets/images/fc-barcelona-logo-svgrepo-com.svg";
import "./style.scss";
import StoreCard from "../../componants/StoreCard";
import CartIcon from "../../componants/CartIcon";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getProductsCart } from "../../apis/getProductCart";
import { getProducts } from "../../apis/getProducts";
import Loader from "../../componants/Loader";

interface Idata {
  _id: string;
  img: string;
  name: string;
  price: number;
}
export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, Products } = useSelector(
    (state: RootState) => state?.Products
  );
  const { cartItems } = useSelector((state: RootState) => state?.Cart);
  useEffect(() => {
    dispatch(getProductsCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts({ url: "users/products?page=1" }));
  }, [dispatch]);

  if (loading === true) {
    return <Loader />;
  }

  return (
    <>
      <nav className="Store-navbar d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div>
            <NavLink to="/">
              <img className="Store-logo" src={Logo} alt="FC Barcelona Logo" />
            </NavLink>
          </div>
          <CartIcon
            number={cartItems?.data?.length || cartItems?.length || 0}
          />
        </div>
      </nav>

      <div className="container">
        <div className="Store-cards d-flex justify-content-center align-items-center flex-wrap mt-5">
          {Products &&
            Products.map((item: Idata) => {
              return (
                <StoreCard
                  key={item._id}
                  id={item._id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  className="Store-card"
                />
              );
            })}
        </div>

        <div className="pagination-container d-flex justify-content-center">
          <ul className="pagination" data-bs-theme="dark">
            <li className="page-item">
              <p
                className="page-link"
                onClick={() =>
                  dispatch(getProducts({ url: "users/products?page=1" }))
                }
              >
                1
              </p>
            </li>

            <li className="page-item">
              <p
                className="page-link"
                onClick={() =>
                  dispatch(getProducts({ url: "users/products?page=2" }))
                }
              >
                2
              </p>
            </li>

            <li className="page-item">
              <p
                className="page-link"
                onClick={() =>
                  dispatch(getProducts({ url: "users/products?page=3" }))
                }
              >
                3
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
