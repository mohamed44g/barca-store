import { useNavigate } from "react-router-dom";
import { logout } from "../../apis/logout";
import Loader from "../../componants/Loader";
import { useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();
  const handelLogout = async () => {
    const response = await logout("users/logout");
    console.log(response);
    if (response?.status === "success") {
      localStorage.removeItem("jwt");
      navigate("/login", { replace: true });
    } else {
      return navigate("/error", {
        state: {
          message: "some error occured please try again",
          type: "error",
        },
      });
    }
  };

  useEffect(() => {
    handelLogout();
  }, []);

  return <Loader />;
}
