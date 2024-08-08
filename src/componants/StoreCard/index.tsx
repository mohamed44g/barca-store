import "./style.scss";
import { FaStar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { GiBackwardTime } from "react-icons/gi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../apis/getProductCart";
import { AppDispatch } from "../../store";
import { useInView } from "react-intersection-observer";

interface Iprops {
  id: string;
  name: string;
  price: number;
  img: string;
  className?: string;
}

export default function Index({ img, className, name, price, id }: Iprops) {
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const addToCartHandel = async () => {
    const prodcutData = {
      id,
      name,
      img,
      price: price * count,
      amount: count,
    };

    const loading_toast = toast.loading("waiting for prodcut to be added");
    const product = await dispatch(addToCart(prodcutData));
    toast.dismiss(loading_toast);
    console.log("Added prodcut", product);
    if (product?.payload.status == "success") {
      toast.success("product added to cart", {
        duration: 2000,
      });
    } else if (product.payload?.response.status === 401) {
      toast.error(
        "You are not logged in, please login to add items to the cart",
        {
          duration: 3000,
        }
      );
    } else {
      toast.error("an error occurred while adding product to cart", {
        duration: 2000,
      });
    }
  };

  return (
    <div
      className={`store-card ${className} d-flex flex-column justify-content-between align-items-center flex-wrap mx-auto`}
    >
      <div className="store-card-img">
        <img src={img} alt="Barca T_shirt" />
      </div>

      <div className="store-card-info mt-5">
        <h3 className="store-card-title fs-3 fw-bold">{name}</h3>
        <div className="store-card-rate">
          <FaStar className="rate" />
          <FaStar className="rate" />
          <FaStar className="rate" />
          <FaStar className="rate" />
          <FaStar className="rate" />
        </div>
        <ul className="store-card-data mt-5">
          <li className="mt-3">
            <TbTruckDelivery size={"30px"} />
            <span className="fw-bold m-2">free Delivery</span>
          </li>
          <li className="mt-3">
            <GrStatusGood size={"30px"} />
            <span className="fw-bold m-2">Original </span>
          </li>
          <li className="mt-3">
            <GiBackwardTime size={"31px"} />
            <span className="fw-bold m-2">Easy Returns</span>
          </li>

          <li className="store-card-price mt-3 fs-4 fw-bold">
            Price : <span className="">{price}$</span>
          </li>
        </ul>

        <div className="store-card-footer d-flex justify-content-between align-items-center mt-5">
          <div className="amount d-flex justify-content-between align-items-center">
            <button className="btn-minus fs-3" onClick={decrement}>
              -
            </button>
            <p>{count}</p>
            <button className="btn-plus fs-3" onClick={increment}>
              +
            </button>
          </div>

          <button className="store-card-btn btn" onClick={addToCartHandel}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
