import { FC } from "react";
import styles from "./StatsDisplay.module.css";
import { useTypingContext } from "../../context/TypingContext";

const StatsDisplay: FC = () => {
	const { wpm, errors } = useTypingContext();
	return (
		<div className={styles.statsWrapper}>
			<p>Скорость печати: {wpm} слов/мин</p>
			<p>Ошибки: {errors}</p>
		</div>
	);
};

export default StatsDisplay;
