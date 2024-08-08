import { RiDeleteBin6Line } from "react-icons/ri";
import "./style.scss";
import { deleteProduct } from "../../apis/deleteProductCart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

interface Iprops {
  id: string;
  img: string;
  name: string;
  amount: number;
  price: number;
}

export default function Index({ id, img, name, amount, price }: Iprops) {
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = async () => {
    const response = await dispatch(deleteProduct(`users/cart/${id}`));
    console.log(response);
  };
  return (
    <div className="Cart-card d-flex justify-content-between align-items-center">
      <img className="Cart-card-img" src={img} alt="Product" />
      <p className="fw-bold">{name}</p>
      <p className="fw-bold">{amount}</p>
      <p className="fw-bold">{price}$</p>
      <RiDeleteBin6Line color="#fff" size={20} onClick={handleDelete} />
    </div>
  );
}
