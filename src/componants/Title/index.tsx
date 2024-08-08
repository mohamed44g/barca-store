import { useInView } from "react-intersection-observer";
import "./style.scss";

interface Iprops {
  title: string;
}

export default function Index({ title }: Iprops) {
  const { ref, inView } = useInView();
  return (
    <h2
      className={`Title text-center fs-2 fw-bold ${
        inView && "fade-in"
      }`}
      ref={ref}
    >
      {title}
    </h2>
  );
}
