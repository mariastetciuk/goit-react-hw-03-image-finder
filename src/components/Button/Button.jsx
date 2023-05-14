import css from './Button.module.css';

export function Button({ onCkick }) {
  return (
    <button className={css.button} type="button" onClick={onCkick}>
      Load more
    </button>
  );
}
