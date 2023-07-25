import type { Component } from 'solid-js';

interface CardProps {
    image: string;
}
const FeatureCard: Component<CardProps> = ({image}: CardProps) => {
  return (
    <div class='card w-[15rem] bg-base-100 shadow-xl'>
      <img src={image} alt='nVision'></img>
    </div>
  );
};

export default FeatureCard;
