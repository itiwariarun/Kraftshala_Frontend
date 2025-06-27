const AnimatedCard = ({ animation, digit }) => {
  return (
    <>
      <div className={`flipCardItem ${animation}`}>
        <span>{digit}</span>
      </div>
    </>
  );
};
export default AnimatedCard;
