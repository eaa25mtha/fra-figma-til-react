import styles from "./Pill.module.css";

export default function Pill({ onClick, children }) {
  return (
    <button type="button" className={styles.pill} onClick={onClick}>
      Pill
    </button>
  );
}
