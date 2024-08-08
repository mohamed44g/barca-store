import { useInView } from "react-intersection-observer";
import "./style.scss";

interface FullscreenIframeProps {
  src: string;
}

const FullscreenIframe: React.FC<FullscreenIframeProps> = ({ src }) => {
  const { ref, inView } = useInView();
  return (
    <iframe
      ref={ref}
      src={src}
      title="Fullscreen Iframe"
      className={`Video ${inView && "fade-in-up"}`}
      allowFullScreen={true}
    />
  );
};

export default FullscreenIframe;
