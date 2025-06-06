import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.descr}>
      <h1>Sip Happens Café</h1>
      <p className={s.color}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
