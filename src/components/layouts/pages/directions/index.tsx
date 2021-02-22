import styles from "../../../../styles/directions.module.css";
import { FaCar, FaTrain, FaPlane } from "react-icons/fa";
import { GiMagicLamp } from "react-icons/gi";
import { useTranslation, Trans } from "next-i18next";

export const Directions = () => {
	const { t } = useTranslation("directions");
	return (
		<div>
			<h1>{t("title")}</h1>
			<div>
				{t("intro")}
				<br />
				<h2>
					{t("blosseville.title")}
					<a
						target="_blank"
						rel="noreferrer nooponer"
						href="https://www.google.com/maps/place/Manoir+de+Blosseville/@49.3991329,0.1613188,17z/data=!3m1!4b1!4m5!3m4!1s0x47e02d81e05fa59d:0xbcf3bf2ba2a91605!8m2!3d49.3991329!4d0.1635075?hl=en
">
						(Maps)
					</a>
				</h2>
				<div className={styles.map_block}>
					<iframe
						src={`https://www.google.com/maps/embed/v1/place?key=${
							process.env.GOOGLE_API_TOKEN
						}&q=${encodeURI("Manoir de Blosseville")}`}
						width="400"
						height="350"></iframe>
					<ul className={styles.transport_list}>
						<li>
							<FaCar /> {t("blosseville.car")}
						</li>
						<li>
							<FaTrain /> {t("blosseville.train")}
						</li>
						<li>
							<FaPlane /> {t("blosseville.plane")}
						</li>
						<li>
							<GiMagicLamp /> {t("blosseville.magic")}
						</li>
					</ul>
				</div>
				<h2>
					{t("breuil.title")}
					<a
						target="_blank"
						rel="noreferrer nooponer"
						href="https://www.google.com/maps/place/Ch%C3%A2teau+du+Breuil/@49.2306248,0.2127819,17z/data=!3m1!4b1!4m5!3m4!1s0x47e1cfa708ce7d1f:0x529f9aa74ea74c7!8m2!3d49.2306213!4d0.2149706?hl=en
">
						(Maps)
					</a>
				</h2>
				<div className={styles.map_block}>
					<iframe
						src={`https://www.google.com/maps/embed/v1/place?key=${
							process.env.GOOGLE_API_TOKEN
						}&q=${encodeURI(
							"Chateau du Breuil, Les Jourdains, 14130 Le Breuil en Auge"
						)}`}
						width="400"
						height="350"></iframe>
					<ul className={styles.transport_list}>
						<li>
							<FaCar /> {t("breuil.car")}
						</li>
						<li>
							<FaTrain /> {t("breuil.train")}
						</li>
						<li>
							<FaPlane /> {t("breuil.plane")}
						</li>
						<li>
							<GiMagicLamp /> {t("breuil.magic")}
						</li>
					</ul>
				</div>
				<br />
				<Trans i18nKey="contact" t={t}>
					<a
						target="_blank"
						rel="noreferrer nooponer"
						href="mailto: nous@cecile-et-romain.fr">
						nous@cecile-et-romain.fr
					</a>
				</Trans>
			</div>
		</div>
	);
};