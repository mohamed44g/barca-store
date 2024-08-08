import Input from "../../componants/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { schema } from "../../Validation/index";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import UserRegister from "../../apis/register";
import { useNavigate } from "react-router-dom";
import Formfooter from "../../componants/FormFooter";

export default function Index() {
  const navigate = useNavigate();
  interface Inputs {
    username: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const loading_toast = toast.loading("Registration please wait");
    const registertion = await UserRegister(data, "users/register");
    toast.dismiss(loading_toast);
    if (registertion?.status == "success") {
      toast.success(
        "register successed you'll navigate to login after 2 seconds",
        {
          position: "top-center",
          duration: 1800,
        }
      );

      setTimeout(() => {
        navigate("/login");
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
      <h2 className="Register-title">Register</h2>
      <div className="Register-form">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          {errors.username && (
            <p className="error">{errors.username?.message}</p>
          )}
          <Input placeholder="username" type="text" {...register("username")} />
          {errors.email && <p className="error">{errors.email?.message}</p>}
          <Input placeholder="email" type="email" {...register("email")} />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
          <Input
            placeholder="password"
            type="password"
            {...register("password")}
          />
          <Input type="Submit" value="Register" />
          <Formfooter url="/login" text="I have an acount" highlight="Login?" />
        </form>
      </div>
    </div>
  );
}
