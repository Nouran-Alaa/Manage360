/* eslint-disable react/prop-types */
import { useSpring, animated } from 'react-spring';

const AnimatedNumbers = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { max: 2, tension: 20, friction: 10 },
  });

  return (
    <animated.div>
      {number.to((n) => (n % 1 ? n.toFixed(2) : n.toFixed(0)))}
    </animated.div>
  );
};

export default AnimatedNumbers;
