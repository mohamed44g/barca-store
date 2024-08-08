import { InputHTMLAttributes, Ref, forwardRef } from "react";
import "./style.scss";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}

const input = forwardRef((props: Iprops, ref: Ref<HTMLInputElement>) => {
  return <input className="Form-input" {...props} ref={ref} />;
});

export default input;
