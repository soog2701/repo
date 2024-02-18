import { HTMLAttributes } from 'react';

interface RandomWheelPropsType extends HTMLAttributes<HTMLDivElement> {
  data: string;
}

const RandomWheel = (props: RandomWheelPropsType) => {
  const { data, ...attr } = props;
  return (
    <div {...attr}>
      <canvas></canvas>
    </div>
  );
};

export default RandomWheel;
