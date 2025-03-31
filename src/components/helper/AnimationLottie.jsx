import Lottie from 'lottie-react';
import animationData from './education-animation3.json';

export default function AnimationLottie() {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-full h-full"
      />
    </div>
  );
}