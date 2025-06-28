import StaticCard from "./StaticCard";
import AnimatedCard from "./AnimatedCard";
const FlipContainer = ({ digit, shuffle, unit }) => {
  let currentDigit = digit;
  let previousDigit = digit - 1;

  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className="itemClass">
      <div className="animatedCardContainer"> <div className="flipCardContainer">
        <div className="dot">
          <span className="rightDot" />
          <span className="leftDot" />
        </div>
        <StaticCard position="upperCard" digit={currentDigit} />
        <StaticCard position="lowerCard" digit={previousDigit} />
        <AnimatedCard digit={digit1} animation={animation1} />
        <AnimatedCard digit={digit2} animation={animation2} />
      </div>
        <div className="cardBackground" />
      </div>
      <p>{unit}</p>
    </div>
  );
};
export default FlipContainer;
