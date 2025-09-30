import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/logo.svg"
          alt="My Logo"
          width={400} // adjust size as needed
          height={200}
          priority
        />
      </main>
    </div>
  );
}
