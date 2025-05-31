import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, positive, total }) => {
  return (
    <div className={s.feedback_wrap}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
