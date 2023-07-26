import type { Component } from 'solid-js';

interface CardProps {
  image: string;
  feature: string;
  featureDes: string;
}
const FeatureCard: Component<CardProps> = ({ image, feature, featureDes }: CardProps) => {
  return (
    <>
      <div class='max-w-xs'>
        <div class='avatar mx-[15px] mt-[20px]'>
          <div class='w-24 rounded-xl bg-indigo-500 p-3'>
            <img src={image} />
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
