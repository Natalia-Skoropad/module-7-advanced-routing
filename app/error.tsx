'use client';
import css from './error.module.css';

//===========================================================================

interface ErrorProps {
  error: Error;
  reset: () => void;
}

//===========================================================================

function Error({ error, reset }: ErrorProps) {
  return (
    <div className={css.wrap}>
      <h2>Помилка при завантаженні</h2>
      <p>{error.message}</p>
      <button className={css.btn} onClick={reset}>
        Спробувати знову
      </button>
    </div>
  );
}

export default Error;
