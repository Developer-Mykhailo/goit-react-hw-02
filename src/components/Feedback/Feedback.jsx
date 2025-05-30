import s from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div className={s.feedback_wrap}>
      <p>Goog:</p>
      <p>Neutral:</p>
      <p>Bad:</p>
      <p>Total:</p>
      <p>Posityive:</p>
    </div>
  );
};

export default Feedback;
