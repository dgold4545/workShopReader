import css from "./Reader.module.css";
import { useState, useEffect } from "react";

export default function Reader({ dataSet }) {
  const [clicks, setClicks] = useState(() => {
    const savedIndex = JSON.parse(window.localStorage.getItem("pageIndex"));

    if (savedIndex !== null) {
      return Number(savedIndex);
    }

    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("pageIndex", JSON.stringify(clicks));
  }, [clicks]);

  const increaseClicks = () => {
    setClicks(clicks + 1);
  };
  const decreaseClicks = () => {
    setClicks(clicks - 1);
  };

  const currentItem = dataSet[clicks];

  return (
    <div className={css.mainBorder}>
      <ul className={css.btnFlex}>
        <li>
          <button onClick={decreaseClicks} disabled={!clicks}>
            Prev
          </button>
        </li>
        <li>
          <button
            onClick={increaseClicks}
            disabled={clicks === dataSet.length - 1}
          >
            Next
          </button>
        </li>
        <li>
          <p>
            <i>
              {clicks + 1}/{dataSet.length}
            </i>
          </p>
        </li>
      </ul>
      <div className={css.text}>
        <h3 className={css.title}>{currentItem.topic} </h3>
        <p className={css.article}>{currentItem.text}</p>
      </div>
    </div>
  );
}
