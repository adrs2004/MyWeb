import Lottie from 'lottie-react';
import animationData from './education-animation3.json';

export default function AnimationLottie() {
  return (
    <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-full h-auto"
      />
    </div>
  );
}
