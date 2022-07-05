import Lottie from "lottie-react-web";
import { FC } from "react";

interface LottieControlProps {
  isStopped?: boolean;
  isPaused?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  direction?: 1 | -1 | undefined;
  speed?: number;
  height?: string;
  width?: string;
  animationData: any;
}

const LottieControl: FC<LottieControlProps> = ({
  isStopped,
  isPaused,
  loop,
  autoplay,
  animationData,
  direction,
  speed,
  height,
  width,
}) => {
  const defaultOptions = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      direction={direction}
      speed={speed}
      height={height}
      width={width}
      options={defaultOptions}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  );
};

LottieControl.defaultProps = {
  isStopped: false,
  isPaused: false,
  loop: true,
  autoplay: true,
  direction: 1,
  speed: 1,
  height: "400px",
  width: "400px",
};

export default LottieControl;
