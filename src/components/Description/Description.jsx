import s from "../Description/Description.module.css";

const Description = () => {
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.header}>Sip Happens Café</h1>
        <p className={s.paragraph}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    </>
  );
};

export default Description;
