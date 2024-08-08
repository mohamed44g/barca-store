import "./style.scss";
import Input from "../../componants/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginSchema } from "../../Validation/index";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import UserLogin from "../../apis/register";
import { useNavigate } from "react-router-dom";
import Formfooter from "../../componants/FormFooter";

export default function Index() {
  const navigate = useNavigate();
  interface Inputs {
    username: string;
    password: string;
  }

  interface Iregistertion {
    status: "success" | "error";
    data?: {
      accesstoken: string;
    };
    massage?: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const loading_toast = toast.loading("Registration please wait");
    const registertion: Iregistertion = await UserLogin(data, "users/login");
    toast.dismiss(loading_toast);
    if (registertion?.status == "success") {
      toast.success(
        "login successed you'll navigate to Home page after 2 seconds",
        {
          position: "top-center",
          duration: 1800,
        }
      );

      localStorage.setItem(
        "jwt",
        JSON.stringify(registertion.data?.accesstoken)
      );
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else if (registertion?.status == "error") {
      toast.error(`${registertion?.massage}`, {
        position: "top-center",
        duration: 3000,
      });
    } else {
      toast.error("something went wrong please try again later", {
        position: "top-center",
        duration: 3000,
      });
    }
  };
  return (
    <div className="Register d-flex flex-column justify-content-center align-items-center">
      <h2 className="Register-title">Login</h2>
      <div className="Register-form">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          {errors.username && (
            <p className="error">{errors.username?.message}</p>
          )}
          <Input placeholder="email" type="text" {...register("username")} />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
          <Input
            placeholder="password"
            type="password"
            {...register("password")}
          />
          <Input type="Submit" value="Login" />
          <Formfooter
            url="/register"
            text="I don't have an acount"
            highlight="Register?"
          />
        </form>
      </div>
    </div>
  );
}
