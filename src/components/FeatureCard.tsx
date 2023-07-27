import type { Component } from 'solid-js';
import setMode from '../setMode';

interface CardProps {
  darkImage: string;
  lightImage: string;
  feature: string;
  featureDes: string;
}
const FeatureCard: Component<CardProps> = ({
  darkImage,
  lightImage,
  feature,
  featureDes,
}: CardProps) => {
  const { darkMode } = setMode;
  return (
    <>
      <div class='max-w-xs'>
        <div class='avatar mx-[15px] mt-[20px]'>
          <div class='w-32 rounded-xl bg-base/[.5] p-4 shadow-sm border-box border-2 border-solid border-white/[.75] dark:bg-dark dark:opacity-100 dark: border-0'>
            <img src={darkMode() ? darkImage : lightImage} />
          </div>
        </div>
        <div class='py-[8px]'>
          <h2 class='text-xl font-bold my-[8px]'>{feature}</h2>
          <p>{featureDes}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
