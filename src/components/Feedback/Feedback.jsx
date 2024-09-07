import s from "../Feedback/Feedback.jsx";

const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div className={s.wrapper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>PositiveFeedbackPercentage: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
