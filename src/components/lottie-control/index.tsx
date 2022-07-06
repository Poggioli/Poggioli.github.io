import Lottie, { LottieEventListener } from "lottie-react-web";
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
  eventListeners?: LottieEventListener[];
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
  eventListeners,
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
      eventListeners={eventListeners}
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
  eventListeners: [],
};

export default LottieControl;
