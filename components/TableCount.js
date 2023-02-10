import styles from "../styles/tablecount.module.css";

export default function TableCount() {
  return (
    <div className={styles.tablecontainer}>
        <div className={styles.itemtable}>
            <h3>Black</h3>
            <div id="black_row"></div>
        </div>
        <div className={styles.itemtable}>
            <h3>White</h3>
            <div id="white_row"></div>
        </div>
    </div>
  )
}
