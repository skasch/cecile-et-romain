import styles from "../../styles/header.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
	const router = useRouter();
	const pathName = router.pathname;
	const [activeItem, setActiveItem] = useState<string>(pathName);

	const options = {
		"/about": "En Bref",
		"/planning": "Le Planning",
		"/directions": "Comment venir",
		"/accomodation": "Se Loger",
		"/gifts": "Liste de Mariage",
		"/us": "Notre Histoire",
		"/gallery": "Photos",
		"/covid": "Infos Covid-19"
	};

	return (
		<div className={styles.header}>
			{Object.keys(options).map(key => {
				return (
					<Link href={key} key={key}>
						<div
							className={
								activeItem === key
									? styles.nav_option_clicked
									: styles.nav_option
							}
							onClick={() => setActiveItem(key)}>
							<div className={styles.nav}>{options[key]}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Header;