import { HTMLAttributes, useRef, useEffect } from 'react';

interface RandomWheelPropsType extends HTMLAttributes<HTMLDivElement> {
  data?: string;
}

const RandomWheel = (props: RandomWheelPropsType) => {
  const { data, ...attr } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawCircle = () => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext('2d');
    if (context) {
      context.beginPath();
      context.fillStyle = '#FF4422';
      context.arc(80, 80, 40, 0, 2 * Math.PI);
      context.fill();
    }
  };
  useEffect(() => {
    drawCircle();
  }, []);
  return (
    <div {...attr}>
      <canvas ref={canvasRef} width={400} height={400}></canvas>
    </div>
  );
};

export default RandomWheel;
