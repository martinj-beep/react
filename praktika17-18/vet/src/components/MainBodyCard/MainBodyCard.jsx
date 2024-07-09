
export default function MainBodyCard() {
  return (
    <container>
    <div>
        <h1>Levis</h1>
        <p>2001-12-25</p>
        <p>mail@mail.pl</p>
        <div>
            <button className={styles.orangeButton}>VIEW LOG</button>
            <button className={styles.whiteButton}>DELETE</button>
        </div>
    </div>
    </container>
  )
}
