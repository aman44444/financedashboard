import styles from "../Switch/Switch.module.css";

export default function Switch({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`${styles.switch} ${checked ? styles.active : ""}`}
      role="switch"
      aria-checked={checked}
    >
      <span className={styles.thumb} />
    </button>
  );
}