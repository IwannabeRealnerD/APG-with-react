import Link from "next/link";
import * as style from "./styles.css";

export default function Home() {
  return (
    <main className={style.container}>
      <h2>Main page</h2>
      <div>
        <p>Is this server component?</p>
      </div>
      <Link href={"/tab"}>tab page</Link>
    </main>
  );
}
