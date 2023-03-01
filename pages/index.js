import Head from 'next/head';
import ChessBoard from '../components/ChessBoard';
import TableCount from '../components/TableCount';
import styles from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chess</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Nabla&family=Rampart+One&family=Rubik+Vinyl&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.mainflexer}>
          <ChessBoard></ChessBoard>
          <TableCount></TableCount>
      </main>
    </div>
  )
}
