import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.welcome}>
				<h1>Welcome to my homepage!</h1>
			</div>
			<div>
				<h2>Looking for my projects?</h2>
				<h2>
					Check them out{" "}
					<Link href="https://github.com/ArnabRollin?tab=repositories">
						here
					</Link>
					!
				</h2>
			</div>
		</main>
	);
}
