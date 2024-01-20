import Link from "next/link";
import * as style from "./styles.css";

export default function Home() {
  console.log(
    "This is Server Component. This console log will appear in server console as well."
  );

  return (
    <main className={style.container}>
      <h2>Main page</h2>
      <div>
        <p>Is this server component?</p>
      </div>
      <Link href="/tab">tab page</Link>
      <Link href="/accordion">accordion page</Link>
    </main>
  );
}
