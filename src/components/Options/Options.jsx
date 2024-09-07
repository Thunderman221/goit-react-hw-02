import s from "../Options/Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <button
        type="button"
        className={s.btnGood}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={s.btnNeutral}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.btnBad}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" className={s.btnReset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
