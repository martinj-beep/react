import styles from "./Button.module.css"

export default function Button(props) {
    const { onClick, text } = props;

    return (
    <button className={styles.border} onClick={onClick}>{text}</button>
  )
}
